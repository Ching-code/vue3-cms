<script setup>
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import { articleGetListService } from '@/api/article'
import { formatTime } from '@/utils/format'

const articleList = ref([])
const total = ref(0)
const loading = ref(false)
const articleEditRef = ref()
const params = ref({
  pagenum: 1,
  pagesize: 5,
  cate_id: '',
  state: ''
})

const getArticleList = async () => {
  loading.value = true
  const res = await articleGetListService(params.value)
  loading.value = false
  articleList.value = res.data.data
  total.value = res.data.total
}

getArticleList()

const onAddArticle = () => {
  articleEditRef.value.open({})
}

const onEditArticle = (row) => {
  articleEditRef.value.open(row)
}

const onDeleteArticle = (row) => {
  console.log(row)
}

const onSizeChange = (size) => {
  params.value.pagenum = 1
  params.value.pagesize = size
  getArticleList()
}

const onCurrentChange = (page) => {
  params.value.pagenum = page
  getArticleList()
}

const onSearch = () => {
  params.value.pagenum = 1
  getArticleList()
}

const onReset = () => {
  params.value.pagenum = 1
  params.value.cate_id = ''
  params.value.state = ''
  getArticleList()
}

const onEditSuccess = (type) => {
  if (type === 'add') {
    const lastPage = Math.ceil((total.value + 1) / params.value.pagesize)
    params.value.pagenum = lastPage
  }
  getArticleList()
}
</script>

<template>
  <PageContainer title="文章管理">
    <template #extra>
      <el-button @click="onAddArticle" type="primary">發布文章</el-button>
    </template>

    <el-form inline>
      <el-form-item label="文章分類:">
        <ChannelSelect v-model="params.cate_id" width="240px"></ChannelSelect>
      </el-form-item>
      <el-form-item label="發布狀態:">
        <el-select v-model="params.state" style="width: 240px">
          <el-option label="已發布" value="已發布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">搜索</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table v-loading="loading" :data="articleList">
      <el-table-column label="文章標題" prop="title">
        <template #default="{ row }">
          <el-link type="primary" :underline="false">{{ row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="分類" prop="cate_name"></el-table-column>
      <el-table-column label="發表時間" prop="pub_date">
        <template #default="{ row }">
          {{ formatTime(row.pub_date) }}
        </template>
      </el-table-column>
      <el-table-column label="狀態" prop="state"></el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button
            type="primary"
            :icon="Edit"
            circle
            plain
            @click="onEditArticle(row)"
          ></el-button>
          <el-button
            type="danger"
            :icon="Delete"
            circle
            plain
            @click="onDeleteArticle(row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-model:current-page="params.pagenum"
      v-model:page-size="params.pagesize"
      :page-sizes="[2, 3, 5, 10]"
      :background="true"
      layout="jumper, total, sizes, prev, pager, next"
      :total="total"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
    />

    <ArticleEdit ref="articleEditRef" @success="onEditSuccess"></ArticleEdit>
  </PageContainer>
</template>

<style lang="scss" scoped>
.el-pagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
