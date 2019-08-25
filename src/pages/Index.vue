<template>
  <div class="index">
     <el-container style="height: 700px;">
      <!-- 侧边 -->
      <el-aside width="240px">
        <order-aside></order-aside>
      </el-aside>
      <!-- 右边 -->
      <el-container>
        <!-- 右边头部 -->
        <el-header></el-header>
        <!-- 右边主体 -->
        <el-main>
          <work-stand></work-stand>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import OrderAside from '../components/OrderAside.vue'
import WorkStand from './WorkStand.vue'
export default {
  components: {
    OrderAside,
    WorkStand
  }
}
</script>
<style lang="scss" scoped>
.el-header, .el-footer {
  background-color: #3080fe;
  height: 62px;
}
.el-main {
  background-color: #f5f5f5;
  padding: 20px;
  overflow-y: scroll;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>

