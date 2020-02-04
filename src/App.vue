<template>
  <div id="app">
    <transition name="fade" :duration="100" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
button {
  border: none;
  outline: none;
}
#app {
  font-size: 12px;
  img {
    border: 0;
    display: block;
  }
  .container {
    padding: 15px;
    min-height: 600px;
    .search {
      margin-bottom: 15px;
      padding: 15px;
      background: #fff;
    }
    .form-box {
      padding: 15px;
      background: #fff;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .my-title {
    height: 50px;
    display: flex;
    align-items: center;
    margin: 15px 0;
    padding-left: 15px;
    font-family: '黑体';
    font-weight: 500;
    color: #333;
    background: #f8f8f8;
    font-size: 13px;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  /*
    设置iView tabs组件的默认背景色
  */
  .ivu-tabs-nav-scroll {
    background: #fff;
  }
  .ivu-menu {
    .ivu-menu-item {
      font-size: 12px;
      text-align: center;
      padding: 10px!important;
    }
  }
}
.ivu-table td, .ivu-table th {
  border: 0;
}
/*
覆盖iView modal组件的默认样式
*/
.ivu-modal-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal {
    top: 0;
  }
}
/*
删除iView modal组件footer的取消和关闭按钮
*/
.package-model {
  .ivu-modal-footer {
    border-top: 0;
    padding: 0;
  }
}
/*
覆盖iView modal组件body的默认样式
*/
.sku-modal {
  .ivu-modal-body {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .ivu-input-number-input {
      text-align: center;
    }
    /*
      设置iView 商品模块价格编辑字体居中
    */
    .ivu-input-number-small input {
      text-align: center
    }
  }
}
/*
覆盖iView Poptip组件默认样式
*/
.ivu-poptip-confirm .ivu-poptip-footer {
  padding: 8px 10px 10px !important;
}
.ivu-poptip-confirm .ivu-poptip-body .ivu-icon {
  left: 14px;
}
/*
覆盖iView Affix组件层级
*/
.ivu-affix {
  z-index: 100000 !important;
}
.ivu-menu {
  z-index: 0 !important;
}
.ivu-tabs-bar {
  border-bottom: 0 !important;
  margin-bottom: 15px !important;
}
</style>
