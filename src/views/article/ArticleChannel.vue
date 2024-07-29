<script setup>
import { ref, onMounted } from 'vue'
import { articleGetChannelsService, articleDeleteChannelService } from '@/api/article'
import { Edit, Delete } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const channelList = ref([])
const loading = ref(false)
const dialog = ref()

const getChannelList = async () => {
  loading.value = true
  const res = await articleGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
}

const onEditChannel = (row) => {
  dialog.value.open(row)
}

const onDeleteChannel = async (row) => {
  await ElMessageBox.confirm('確認要刪除分類嗎?', '刪除提示', {
    type: 'warning',
    confirmButtonText: '確認',
    cancelButtonText: '取消'
  })
  await articleDeleteChannelService(row.id)
  ElMessage.success('刪除成功')
  getChannelList()
}

const onAddChannel = () => {
  dialog.value.open({})
}

const onSuccess = () => {
  getChannelList()
}

onMounted(() => {
  getChannelList()
})
</script>

<template>
  <PageContainer title="文章分類">
    <template #extra>
      <el-button type="primary" @click="onAddChannel">添加分類</el-button>
    </template>
    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column type="index" label="序號" width="100"></el-table-column>
      <el-table-column prop="cate_name" label="分類名稱"></el-table-column>
      <el-table-column prop="cate_alias" label="分類別名"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{ row, $index }">
          <el-button
            type="primary"
            :icon="Edit"
            circle
            plain
            @click="onEditChannel(row, $index)"
          ></el-button>
          <el-button
            type="danger"
            :icon="Delete"
            circle
            plain
            @click="onDeleteChannel(row, $index)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="no data"></el-empty>
      </template>
    </el-table>
    <ChannelEdit ref="dialog" @success="onSuccess"></ChannelEdit>
  </PageContainer>
</template>
