<template>
  <div>
    <el-container style="height: 700px;">
      <el-aside width="240px">
        <order-aside></order-aside>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import OrderAside from '../components/OrderAside.vue'
export default {
   components: {
    OrderAside
  }
}
</script>
<style lang="scss" scoped>
</style>
