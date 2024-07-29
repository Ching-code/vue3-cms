<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { userUpdateInfoService } from '@/api/user'

const {
  user: { email, id, nickname, username },
  getUser
} = useUserStore()
const formRef = ref()
const form = ref({
  id,
  username,
  nickname,
  email
})

const rules = ref({
  nickname: [
    { required: true, message: '請輸入用戶暱稱', trigger: 'blur' },
    { min: 2, max: 10, message: '用戶暱稱長度為 2-10 位', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '請輸入用戶信箱', trigger: 'blur' },
    { type: 'email', message: '請輸入正確的用戶信箱', trigger: ['blur', 'change'] }
  ]
})

const onSubmit = async () => {
  await formRef.value.validate()
  await userUpdateInfoService(form.value)
  getUser()
  ElMessage.success('修改成功')
}
</script>

<template>
  <PageContainer title="基本資料">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="登入名稱">
        <el-input v-model="form.username" disabled></el-input>
      </el-form-item>
      <el-form-item label="用戶暱稱" prop="nickname">
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item label="用戶信箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交修改</el-button>
      </el-form-item>
    </el-form>
  </PageContainer>
</template>
