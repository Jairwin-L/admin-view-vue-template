
<template>
  <div class="box_container">
    <p>管理平台中心</p>
    <img src="@/assets/logo.png" alt="logo" />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.box_container {
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
