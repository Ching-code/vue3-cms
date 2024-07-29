<script setup>
import { Lock, User, Folder } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { userRegisterService, userLoginService } from '@/api/user'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'

const isRegister = ref(false)
const form = ref()

const formModel = ref({
  username: '',
  password: '',
  repassword: ''
})
const rules = {
  username: [
    { required: true, message: '請輸入用戶名', trigger: 'blur' },
    { min: 3, max: 10, message: '用戶名長度 3-10', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{6,15}$/,
      message: '密碼為 1-9 位英文數字組成',
      trigger: 'blur'
    }
  ],
  repassword: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{6,15}$/,
      message: '密碼為 1-9 位英文數字組成',
      trigger: 'blur'
    },
    {
      validator: (rule, value, callback) => {
        if (value !== formModel.value.password) {
          callback(new Error('密碼不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

const register = async () => {
  await form.value.validate()
  await userRegisterService(formModel.value)
  ElMessage.success('註冊成功')
  isRegister.value = false
}

const userStore = useUserStore()
const router = useRouter()

const login = async () => {
  await form.value.validate()
  const res = await userLoginService(formModel.value)
  userStore.setToken(res.data.token)
  ElMessage.success('登入成功')
  router.push('/')
}

watch(isRegister, () => form.value.resetFields())
</script>

<template>
  <el-row class="login-page">
    <el-col :span="12" class="bg">
      <el-icon size="140"><Folder /></el-icon>
      <h1>CMS</h1>
    </el-col>

    <el-col :span="6" :offset="3" class="form">
      <!-- register form -->
      <el-form
        ref="form"
        size="large"
        autocomplete="on"
        v-if="isRegister"
        :model="formModel"
        :rules="rules"
      >
        <el-form-item>
          <h1>註冊</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            :prefix-icon="User"
            placeholder="請輸入用戶名"
            v-model="formModel.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :prefix-icon="Lock"
            type="password"
            show-password
            placeholder="請輸入密碼"
            v-model="formModel.password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input
            :prefix-icon="Lock"
            type="password"
            show-password
            placeholder="請再次輸入密碼"
            v-model="formModel.repassword"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" auto-insert-space @click="register"
            >註冊</el-button
          >
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = false">&larr; 返回</el-link>
        </el-form-item>
      </el-form>
      <!-- login form -->
      <el-form ref="form" size="large" autocomplete="off" v-else :model="formModel" :rules="rules">
        <el-form-item>
          <h1>登入</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
            :prefix-icon="User"
            placeholder="請輸入用戶名"
            v-model="formModel.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :prefix-icon="Lock"
            type="password"
            show-password
            placeholder="請輸入密碼"
            v-model="formModel.password"
          ></el-input>
        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox>記住我</el-checkbox>
            <el-link type="primary" :underline="false">忘記密碼?</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" auto-insert-space @click="login">登入</el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isRegister = true">註冊 &rarr;</el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  background-color: #fff;
  .bg {
    background: linear-gradient(#4b6cb7, #182848);
    border-radius: 0 50px 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 42px;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    .title {
      margin: 0 auto;
    }
    .button {
      width: 100%;
    }
    .flex {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
