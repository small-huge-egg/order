<template>
  <div class="indent-table">
    <title-slot>
      <h3>订单报表</h3>
    </title-slot>
    <div class="detail-total">
      <div class="li">
        <p>订货单</p>
        <p>12339</p>
      </div>
      <div class="li">
        <p>退货单(笔)</p>
        <p>9523</p>
      </div>
      <div class="li">
        <p>订货客户数</p>
        <p>30149</p>
      </div>
      <div class="li">
        <p>退货客户数</p>
        <p>7493</p>
      </div>
      <div class="li">
        <p>订货金额</p>
        <p>￥293439</p>
      </div>
      <div class="li">
        <p>退货金额(元)</p>
        <p>￥8054</p>
      </div>
    </div>
  </div>
</template>
<script>
import TitleSlot from '../components/TitleSlot.vue'
export default {
  components: {
    TitleSlot
  }
}
</script>
<style lang="scss" scoped>
.indent-table {
  font-family: Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,PingFang SC,Microsoft YaHei;
  .detail-total {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    .li {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 22px;
      font-weight: 700;
      margin: 20px 0;
      color: #333;
      p {
        &:first-child {
          font-size: 12px;
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>
