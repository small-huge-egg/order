<template>
  <el-table
    :data="tableData"
    :header-cell-style="{background:'#ebecf0'}"
    :row-style="{height: '100px'}"
    style="width: 100%;"
    size="100px">
    <el-table-column
      prop="title"
      label="#"
      width="20px">
    </el-table-column>
    <el-table-column
      label="产品图片"
      width="100px">
      <template slot-scope="scope">
        <img :src="scope.row.pic" width="90" height="90" class="head_pic"/>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="产品名称">
    </el-table-column>
    <el-table-column
      prop="number"
      label="产品编号">
    </el-table-column>
    <el-table-column
      prop="amount"
      label="订单数量">
    </el-table-column>
    <el-table-column
      prop="money"
      label="订单金额">
    </el-table-column>
    <el-table-column
      prop="date"
      label="订单时间">
    </el-table-column>
    <el-table-column
      label="订单状态">
       <template slot-scope="scope">
          <p v-html="scope.row.content"></p>
        </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          title: 1,
          date: '2018-12-19',
          name: '产品#1',
          number: '1011012',
          amount: 148,
          money: 1654,
          status: '已完成',
          pic: "https://img.alicdn.com/tfs/TB10QvzDhjaK1RjSZKzXXXVwXXa-80-80.png",
          content: '<span style="background:rgb(68, 126, 255);display:inline-block;width:10px;height:10px;margin-right:5px;border-radius:50%;"></span><span>已完成</span>'
        }, {
          title: 2,
          date: '2018-12-19',
          name: '产品#2',
          number: '1736251',
          amount: 214,
          money: 2093,
          status: '派送中',
          pic: "https://img.alicdn.com/tfs/TB1sFHcDmzqK1RjSZFpXXakSXXa-80-80.png",
          content: '<span style="background:rgb(238, 112, 109);display:inline-block;width:10px;height:10px;margin-right:5px;border-radius:50%;"></span><span>派送中</span>'
        }, {
          title: 3,
          date: '2018-12-15',
          name: '产品#3',
          number: '1013678',
          amount: 265,
          money: 7286,
          status: '已完成',
          pic: "https://img.alicdn.com/tfs/TB10QvzDhjaK1RjSZKzXXXVwXXa-80-80.png",
          content: '<span style="background:rgb(68, 126, 255);display:inline-block;width:10px;height:10px;margin-right:5px;border-radius:50%;"></span><span>已完成</span>'
        }, {
          title: 4,
          date: '2018-12-19',
          name: '产品#4',
          number: '1811358',
          amount: 441,
          money: 1401,
          status: '派送中',
          pic: "https://img.alicdn.com/tfs/TB1sFHcDmzqK1RjSZFpXXakSXXa-80-80.png",
          content: '<span style="background:rgb(238, 112, 109);display:inline-block;width:10px;height:10px;margin-right:5px;border-radius:50%;"></span><span>派送中</span>'
        }, {
          title: 5,
          date: '2018-12-19',
          name: '产品#5',
          number: '1216699',
          amount: 468,
          money: 9442,
          status: '已完成',
          pic: "https://img.alicdn.com/tfs/TB10QvzDhjaK1RjSZKzXXXVwXXa-80-80.png",
          content: '<span style="background:rgb(68, 126, 255);display:inline-block;width:10px;height:10px;margin-right:5px;border-radius:50%;"></span><span>已完成</span>'
        }]
      }
    }
  }
</script>
<style scoped>
.header-row-style{
  background:red;
}
.el-table tr {
  padding: 20px !important;
  line-height: 100px;
  height: 100px !important;
}
</style>
