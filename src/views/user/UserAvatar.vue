<script setup>
import { ref } from 'vue'
import { Plus, Upload } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores'
import { userUpdateAvatarService } from '@/api/user'

const userStore = useUserStore()
const imageUrl = ref(userStore.user.user_pic)
const uploadRef = ref()

const onSelectFile = (uploadFile) => {
  // 基於 FileReader 作圖片預覽
  const reader = new FileReader()
  reader.readAsDataURL(uploadFile.raw)
  reader.onload = () => {
    imageUrl.value = reader.result
  }
}

const onUpdateAvatar = async () => {
  if (!imageUrl.value) {
    ElMessage.warning('請選擇頭像')
    return
  }
  await userUpdateAvatarService(imageUrl.value)
  await userStore.getUser()
  ElMessage.success('更換成功')
}
</script>

<template>
  <PageContainer title="修改用戶頭像">
    <el-upload
      ref="uploadRef"
      class="avatar-uploader"
      :auto-upload="false"
      :show-file-list="false"
      :on-change="onSelectFile"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
    <div class="buttons">
      <el-button
        @click="uploadRef.$el.querySelector('input').click()"
        :icon="Plus"
        size="large"
        type="primary"
        >選擇頭像</el-button
      >
      <el-button @click="onUpdateAvatar" :icon="Upload" size="large" type="success"
        >上傳頭像</el-button
      >
    </div>
  </PageContainer>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 278px;
      height: 278px;
      display: block;
    }
    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }
    &:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 278px;
      height: 278px;
      text-align: center;
    }
  }
}
.buttons {
  margin-top: 10px;
  width: 278px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
