<template>
  <div class="login_container">
    <div class="login_main">
      <div class="login_title">简易管理平台简易模板</div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <Form-item prop="name">
          <i-input type="text" size="large" v-model="formInline.name" placeholder="请输入账号">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-input>
        </Form-item>
        <Form-item prop="password">
          <i-input type="password" size="large"  v-model="formInline.password" placeholder="请输入密码" @on-enter="onLogin('formInline')">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </i-input>
        </Form-item>
        <Form-item>
          <Button class="login_btn" type="primary" size="large" @click="onLogin('formInline')">登录</Button>
        </Form-item>
      </Form>
      <p>任意输入即可登录</p>
    </div>
    <footers></footers>
  </div>
</template>
<script>
import Footers from '../components/footer'
export default {
  components: {
    Footers
  },
  data () {
    return {
      formInline: {
        name: '',
        password: ''
      },
      ruleInline: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onLogin (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$router.push('/main')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: #c8d0dd no-repeat center 110px;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  .login_main {
    width: 368px;
    margin: 70px auto 0;
    flex: 1 1;
    .login_title {
      font-size: 20px;
      font-weight: bold;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .login_btn {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    background: #f0f2f5 url('../assets/login.svg') no-repeat center 110px;
    background-size: 100%;
  }
  footer {
    text-align: center;
    color: rgba(0,0,0,.45);
    font-size: 14px;
    margin-bottom: 24px;
    .footer-content {
      margin-bottom: 8px;
      > a {
        color: rgba(0,0,0,.45);
        margin-right: 40px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
