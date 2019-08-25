<template>
  <div class="work-stand">
    <!-- 工作台标题 -->
    <title-slot>
      <h3>工作台</h3>
    </title-slot>
    <!-- 四个年度区块 -->
    <div class="year-box">
      <div class="next-col">
        <p>年度总收入</p>
        <div class="next-col-num">
          <h2>￥298,234</h2>
          <span>12%</span>
        </div>
      </div>
      <div class="next-col">
        <p>年度总订单</p>
        <div class="next-col-num">
          <h2>13,293</h2>
          <span class="indent">12%</span>
        </div>
      </div>
      <div class="next-col">
        <p>年度退货单</p>
        <div class="next-col-num">
          <h2>2758</h2>
          <span>1.3%</span>
        </div>
      </div>
      <div class="next-col">
        <p>年度客户数</p>
        <div class="next-col-num">
          <h2>3,659</h2>
          <span class="indent">20%</span>
        </div>
      </div>
    </div>
    <!-- 三个echart图表 -->
    <div class="echart">
      <el-row :gutter="20">
        <!-- 新增订单趋势 -->
        <el-col :span="12">
          <div class="grid-content bg-light">
            <div class="grid-title">
              <h3>新增订单趋势</h3>
            </div>
            <order-trend></order-trend>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-light">
            <div class="grid-title">
              <h3>订单分类</h3>
            </div>
            <order-type></order-type>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-light">
            <div class="grid-title">
              <h3>新增订单类型</h3>
            </div>
            <order-classify></order-classify>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 两个订单列表 -->
    <div class="indent">
      <el-row :gutter="20">
        <!-- 最近的订单一 -->
        <el-col :span="16">
          <div class="grid-content bg-light indent-left">
            <div class="grid-title">
              <h3>最近的订单</h3>
            </div>
            <current-indent></current-indent>
          </div>
        </el-col>
        <!-- 最近的订单二 -->
        <el-col :span="8">
          <div class="grid-content bg-light">
            <div class="grid-title">
              <h3>最近的订单</h3>
            </div>
            <current-indent-two></current-indent-two>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 两个营收 -->
    <div class="totalIncome">
      <el-row :gutter="20">
        <!-- 总营收 -->
        <el-col :span="16">
          <div class="grid-content bg-light indent-left">
            <div class="grid-title">
              <h3>总营收</h3>
            </div>
            <total-income></total-income>
          </div>
        </el-col>
        <!-- 营收类目 -->
        <el-col :span="8">
          <div class="grid-content bg-light">
            <div class="grid-title">
              <h3>营收类目</h3>
            </div>
            <income-type></income-type>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import TitleSlot from '../components/TitleSlot.vue'
import OrderTrend from '../components/WorkStand/OrderTrend.vue'
import OrderType from '../components/WorkStand/OrderType.vue'
import OrderClassify from '../components/WorkStand/OrderClassify.vue'
import CurrentIndent from '../components/WorkStand/CurrentIndent.vue'
import CurrentIndentTwo from '../components/WorkStand/CurrentIndentTwo.vue'
import TotalIncome from '../components/WorkStand/TotalIncome.vue'
import IncomeType from '../components/WorkStand/IncomeType.vue'

export default {
  components: {
    TitleSlot,
    OrderTrend,
    OrderType,
    OrderClassify,
    CurrentIndent,
    CurrentIndentTwo,
    TotalIncome,
    IncomeType
  }
}
</script>
<style lang="scss" scoped>
.work-stand {
  .year-box {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    margin: 0 -10px 20px -10px;
    .next-col {
      padding: 20px;
      margin: 0 10px 20px 10px;
      flex: 1;
      border-top: 3px solid #3080fe;
      background-color: rgb(255, 255, 255);
      border-radius: 6px;
      box-sizing: border-box;
      p {
        margin: 0 0 30px;
        color: #666;
        font-weight: 450;
        font-size: 14px;
      }
      .next-col-num {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        color: #333;
        h2 {
          margin: 0 15px 0 0;
          font-size: 28px;
          font-weight: 500;
          line-height: 30px;
        }
        span {
          margin-top: 12px;
          color: green;
          font-size: 14px;
          font-weight: 700;
        }
        .indent{
          color: red;
        }
      }
    }
  }
  .echart {
    width: 100%;
    flex-wrap: nowrap;
  }
  .indent {
    margin-top: 20px;
    .indent-left {
      padding: 0 20px;
    }
  }
  .totalIncome {
    margin-top: 20px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    .grid-title{
      padding: 20px;
      border-bottom: 1px solid #f0f0f0;
      color: #333;
    }
  }
  .bg-light {
    background: #fff;
  }
}
</style>
