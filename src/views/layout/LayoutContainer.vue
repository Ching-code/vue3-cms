<script setup>
import {
  Management,
  Promotion,
  UserFilled,
  User,
  Crop,
  EditPen,
  CaretBottom,
  SwitchButton,
  Folder
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'

const userStore = useUserStore()
const router = useRouter()
const sideMenu = ref(null)

userStore.getUser()

const handleCommand = (key) => {
  if (key === 'logout') {
    ElMessageBox.confirm('確定要登出嗎?', {
      confirmButtonText: '是',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        userStore.removeToken()
        userStore.serUser({})
        router.push('/login')
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消登出'
        })
      })
  } else {
    sideMenu.value.open('1')
    router.push(`/user/${key}`)
  }
}
</script>

<template>
  <div>
    <el-container class="layout-container">
      <el-aside width="200px">
        <div class="el-aside__logo">
          <el-icon><Folder /></el-icon>CMS
        </div>
        <el-menu
          router
          active-text-color="#ffd04b"
          background-color="#232323"
          :default-active="$route.path"
          ref="sideMenu"
          text-color="#fff"
        >
          <el-menu-item index="/article/channel">
            <el-icon><Management /></el-icon>
            <span>文章分類</span>
          </el-menu-item>
          <el-menu-item index="/article/manage">
            <el-icon><Promotion /></el-icon>
            <span>文章管理</span>
          </el-menu-item>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><UserFilled /></el-icon>
              <span>個人中心</span>
            </template>
            <el-menu-item index="/user/profile">
              <el-icon><User /></el-icon>
              <span>基本資料</span>
            </el-menu-item>
            <el-menu-item index="/user/avatar">
              <el-icon><Crop /></el-icon>
              <span>更換頭像</span>
            </el-menu-item>
            <el-menu-item index="/user/password">
              <el-icon><EditPen /></el-icon>
              <span>重置密碼</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            使用者: <strong>{{ userStore.user.username }}</strong>
          </div>
          <el-dropdown placement="bottom-end" @command="handleCommand">
            <span class="el-dropdown__box">
              <el-avatar :src="userStore.user.user_pic || ''"></el-avatar>
              <el-icon><CaretBottom /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="profile" :icon="User">基本資料</el-dropdown-item>
                <el-dropdown-item command="avatar" :icon="Crop">更換頭像</el-dropdown-item>
                <el-dropdown-item command="password" :icon="EditPen">重置密碼</el-dropdown-item>
                <el-dropdown-item command="logout" :icon="SwitchButton">登出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>@2024 Created by CMS</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
}
.el-aside {
  background-color: #232323;
  &__logo {
    height: 120px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
    background: linear-gradient(#4b6cb7, #182848) no-repeat center / 120px auto;
  }
  .el-menu {
    border-right: none;
  }
}
.el-header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-dropdown__box {
    display: flex;
    align-items: center;
    .el-icon {
      color: #999;
      margin-left: 10px;
    }
    &:active,
    &:focus {
      outline: none;
    }
  }
}
.el-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #666;
}
</style>
