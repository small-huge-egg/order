<template>
    <el-table
      class="classTable"
      :data="tableData"
      :header-cell-style="{background:'#ebecf0'}"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="客户名称">
      </el-table-column>
      <el-table-column
        prop="number"
        label="订单数量">
      </el-table-column>
      <el-table-column
        prop="money"
        label="订单金额">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            number: '1447',
            name: '淘小宝',
            money: '￥49150'
          }, {
            number: '1170',
            name: '淘小宝',
            money: '￥25073'
          }, {
            number: '1494',
            name: '淘小宝',
            money: '￥73052'
          }, {
            number: '1167',
            name: '淘小宝',
            money: '￥10899'
          }, {
            number: '1923',
            name: '淘小宝',
            money: '￥87456'
          }, {
            number: '1330',
            name: '淘小宝',
            money: '￥20696'
          }, {
            number: '1799',
            name: '淘小宝',
            money: '￥25977'
          }, {
            number: '1719',
            name: '淘小宝',
            money: '￥96629'
          }, {
            number: '1643',
            name: '淘小宝',
            money: '￥50075'
          }]
        }
      }
    }
  </script>
  <style scoped lang="scss">
  .classTable{
    .el-table_row {
      padding: 0 !important;
      line-height: 50px;
      height: 100px;
    }
  }
 
  </style>
  