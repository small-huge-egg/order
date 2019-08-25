<template>
  <div class="order-aside">
    <p class="logo-text">LOGO</p>
    <div class="aside-user">
      <img src="https://c-ssl.duitang.com/uploads/item/201412/30/20141230172716_AyFuU.jpeg" alt="">
      <div class="user-detail">
        <p>淘小宝</p>
        <p>技术部</p>
      </div> 
    </div>
    <!-- 导航列表 -->
    <el-col>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#5584ff"
        :router="true"
        >
        <el-menu-item index="/">
          <i class="el-icon-document"></i>
          <span slot="title">工作台</span>
        </el-menu-item>
        <el-menu-item index="/indentTable">
          <i class="el-icon-menu"></i>
          <span slot="title">订单报表</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">订单管理</span>
        </el-menu-item> 
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">退单管理</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">发货管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">添加商品</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-setting"></i>
          <span slot="title">添加订单</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
  .order-aside {
    color: #333;
    .logo-text{
      max-width: 180px;
      margin: 10px 0 0 10px;
      overflow: hidden;
      color:#447eff !important;
      font-weight: bold;
      font-size: 30px;
      white-space: nowrap;
      text-decoration: none;
      text-overflow: ellipsis;
    }
    .aside-user {
      display: flex;
      padding: 20px 0;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      img {
        width: 40px;
        height: 40px;
        margin-right: 12px;
      }
      .user-detail{
        display: flex;
        flex-direction: column;
        font-size: 13px;
        color: #333;
        p:nth-child(2){
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
    .el-col {
      .el-menu {
        .el-menu-item {
          height: 50px;
          position: relative;
          .el-menu-item:active{
            background: #B3C0D1;
          }
          i{
            color:#447eff;
          }
          &:hover{
            background: #fff !important;
          }
        }
        .el-menu-item.is-active,.el-menu-item.is-active i {
          font-weight: bold;
        } 
        .el-menu-item.is-active{
          background: #e9eceeb0 !important;
          border-right: 1.5px solid #447eff; 
        }
      }
    }
  }
</style>

