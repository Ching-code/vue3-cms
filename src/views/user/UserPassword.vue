<script setup>
import { ref } from 'vue'
import { userUpdatePasswordService } from '@/api/user'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'

const formRef = ref()
const form = ref({
  old_password: '',
  new_password: '',
  re_password: ''
})

const userStore = useUserStore()
const router = useRouter()

const checkDifferent = (rule, value, callback) => {
  if (value === form.value.old_password) {
    callback(new Error('新密碼不得與原密碼相同'))
  } else {
    callback()
  }
}

const checkSameAsNewPassword = (rule, value, callback) => {
  if (value !== form.value.new_password) {
    callback(new Error('密碼不一致'))
  } else {
    callback()
  }
}

const rules = {
  old_password: [
    { required: true, message: '請輸入原密碼', trigger: 'blur' },
    { min: 6, max: 15, message: '密碼長度為 6-15 位', trigger: 'blur' }
  ],
  new_password: [
    { required: true, message: '請輸入新密碼', trigger: 'blur' },
    { min: 6, max: 15, message: '密碼長度為 6-15 位', trigger: 'blur' },
    { validator: checkDifferent, trigger: 'blur' }
  ],
  re_password: [
    { required: true, message: '請確認新密碼', trigger: 'blur' },
    { min: 6, max: 15, message: '密碼長度為 6-15 位', trigger: 'blur' },
    { validator: checkSameAsNewPassword, trigger: 'blur' }
  ]
}

const onSubmit = async () => {
  await formRef.value.validate()
  await userUpdatePasswordService(form.value)
  ElMessage.success('修改成功')

  userStore.setToken('')
  userStore.setUser({})
  router.push('/login')
}
</script>

<template>
  <PageContainer title="重置密碼">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="原密碼" prop="old_password">
        <el-input v-model="form.old_password" show-password></el-input>
      </el-form-item>
      <el-form-item label="新密碼" prop="new_password">
        <el-input v-model="form.new_password" show-password></el-input>
      </el-form-item>
      <el-form-item label="確認新密碼" prop="re_password">
        <el-input v-model="form.re_password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit" type="primary">修改密碼</el-button>
        <el-button @click="formRef.resetFields()">重置</el-button>
      </el-form-item>
    </el-form>
  </PageContainer>
</template>
