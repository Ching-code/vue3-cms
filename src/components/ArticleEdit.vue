<script setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { articlePublishService, articleGetDetailService, articleEditService } from '@/api/article'
import { baseURL } from '@/utils/request'
import axios from 'axios'

const visibleDrawer = ref(false)
const imageUrl = ref('')
const editorRef = ref()
const defaultFrom = {
  title: '',
  cate_id: '',
  cover_img: '',
  content: '',
  state: ''
}
const formModel = ref({ ...defaultFrom })

const emit = defineEmits(['success'])

const open = async (row) => {
  visibleDrawer.value = true
  if (row.id) {
    const res = await articleGetDetailService(row.id)
    formModel.value = res.data.data
    imageUrl.value = baseURL + formModel.value.cover_img

    // 轉 file
    const file = await imageUrlToFileObject(imageUrl.value, formModel.value.cover_img)
    formModel.value.cover_img = file
  } else {
    formModel.value = { ...defaultFrom }
    imageUrl.value = ''
    editorRef.value.setHTML('')
  }
}

async function imageUrlToFileObject(imageUrl, filename) {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })

    const blob = new Blob([response.data], { type: response.headers['content-type'] })

    const file = new File([blob], filename, { type: response.headers['content-type'] })

    return file
  } catch (error) {
    console.error('Error convertiong iamge url to file', error)
    return null
  }
}

const onSelectFile = (uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw)
  formModel.value.cover_img = uploadFile.raw
}

const onPublish = async (state) => {
  formModel.value.state = state

  const fd = new FormData()
  for (let key in formModel.value) {
    fd.append(key, formModel.value[key])
  }

  if (formModel.value.id) {
    // 編輯
    await articleEditService(fd)
    ElMessage.success('修改成功')
    visibleDrawer.value = false
    emit('success', 'edit')
  } else {
    await articlePublishService(fd)
    ElMessage.success('添加成功')
    visibleDrawer.value = false
    emit('success', 'add')
  }
}

defineExpose({
  open
})
</script>

<template>
  <el-drawer v-model="visibleDrawer" title="發布文章">
    <el-form :model="formModel">
      <el-form-item label="文章標題" prop="title">
        <el-input v-model="formModel.title" placeholder="請輸入標題"></el-input>
      </el-form-item>
      <el-form-item label="文章分類" prop="cate_id">
        <ChannelSelect v-model="formModel.cate_id" width="100%"></ChannelSelect>
      </el-form-item>
      <el-form-item label="文章封面" prop="cover_img">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          :auto-upload="false"
          :on-change="onSelectFile"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章內容" prop="content">
        <div class="editor">
          <QuillEditor
            ref="editorRef"
            v-model:content="formModel.content"
            content-type="html"
            theme="snow"
          ></QuillEditor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="onPublish('已发布')" type="primary">發布</el-button>
        <el-button @click="onPublish('草稿')" type="info">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      overflow: hidden;
      transition: var(--el-transition-primary);
    }
    &:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}

.editor {
  width: 100%;
  :deep(.ql-editor) {
    min-height: 200px;
  }
}
</style>
