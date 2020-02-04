<template>
  <div class="container">
    <Row class="change-box">
      <i-col span="24" class="main-item">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="90">
          <Form-item label="旧密码" prop="old_password">
            <Input type="password" v-model="formValidate.old_password" placeholder="请输入原始密码"/>
          </Form-item>
          <Form-item label="新密码" prop="new_password">
            <Input type="password" v-model="formValidate.new_password" placeholder="请输入新密码"/>
          </Form-item>
          <Form-item label="确认新密码" prop="new_password_confirm">
            <Input type="password" v-model="formValidate.new_password_confirm" placeholder="请再次输入新密码" @on-enter="onChangePassword('formValidate')"/>
          </Form-item>
          <Form-item>
            <Button type="primary" @click="onChangePassword('formValidate')">修改</Button>
          </Form-item>
        </Form>
      </i-col>
    </Row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formValidate: {
        old_password: '',
        new_password: '',
        new_password_confirm: ''
      },
      ruleValidate: {
        old_password: [
          { required: true, message: '请输入原始密码', trigger: 'blur' }
        ],
        new_password: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ],
        new_password_confirm: [
          { required: true, message: '请再次输入新密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onChangePassword (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          if (this.formValidate.old_password === this.formValidate.new_password) {
            this.$Message.warning('新旧密码一致')
            return
          }
          if (this.formValidatethis.formValidate.new_password_confirm !== this.formValidate.new_password) {
            this.$Message.warning('两次填写的密码不一致')
            return
          }
        }
        console.log(this.formValidate)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.change-box {
  background: #fff;
  padding: 15px;
  .ivu-input-wrapper {
    width: 300px;
  }
}
</style>
