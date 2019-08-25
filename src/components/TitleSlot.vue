<template>
  <div class="title-slot">
    <slot></slot>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.title-slot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5dddd;
  h3 {
    color: rgba(0,0,0,.85);
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
  }
}
</style>
