<script setup>
import { ref } from 'vue'
import { articleEditChannelService, articleAddChannelService } from '@/api/article'
const dialogVisible = ref(false)
const formRef = ref()
const formModel = ref({
  cate_name: '',
  cate_alias: ''
})
const rules = {
  cate_name: [
    { required: true, message: '請輸入分類名稱', trigger: 'blur' },
    { pattern: /^\S{1,10}$/, message: '分類名必須為 1-10 位字元', trigger: 'blur' }
  ],
  cate_alias: [
    { required: true, message: '請輸入分類別名', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9]{1,15}$/, message: '分類別名必須為 1-15 位英文或數字', trigger: 'blur' }
  ]
}

const emit = defineEmits(['success'])

const open = (row) => {
  dialogVisible.value = true
  formModel.value = { ...row }
}

const onSubmit = async () => {
  await formRef.value.validate()
  const isEdit = formModel.value.id
  if (isEdit) {
    await articleEditChannelService(formModel.value)
    ElMessage.success('編輯成功')
  } else {
    await articleAddChannelService(formModel.value)
    ElMessage.success('新增成功')
  }
  dialogVisible.value = false
  emit('success')
}

defineExpose({
  open
})
</script>

<template>
  <el-dialog v-model="dialogVisible" :title="formModel.id ? '編輯分類' : '添加分類'" width="500">
    <el-form ref="formRef" :model="formModel" :rules="rules">
      <el-form-item label="分類名稱" prop="cate_name">
        <el-input v-model="formModel.cate_name" placeholder="請輸入分類名稱"></el-input>
      </el-form-item>
      <el-form-item label="分類別名" prop="cate_alias">
        <el-input v-model="formModel.cate_alias" placeholder="請輸入分類別名"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit"> 確認 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
