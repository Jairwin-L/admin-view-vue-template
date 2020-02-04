<template>
  <div class="page">
    <Layout>
      <Sider ref="sideup" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu theme="dark" :height="800" width="auto">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-home-outline"/>
              <span v-if="!isCollapsed">控制面板</span>
            </template>
             <MenuItem to="/main" name="/main">
              <span>欢迎</span>
            </MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-stats"/>
              <span v-if="!isCollapsed">Form</span>
            </template>
            <MenuItem to="/form/list" name="/form/list">
              <span>列表</span>
            </MenuItem>
          </Submenu>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="page-header-bar">
          <div><Icon
              @click.native="collapsedSider"
              :style="{margin: '0 20px',cursor:'pointer'}"
              type="md-menu"
              size="24"
            ></Icon>欢迎回来！
          </div>
          <Dropdown>
            <img src="@/assets/avatar.jpg" alt="默认头像"/>
            <Dropdown-menu slot="list">
              <Dropdown-item @click.native="$router.push('/auth/change-password')">修改密码</Dropdown-item>
              <Dropdown-item @click.native="onLogout">退出登录</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </Header>
        <Content :style="{background: '#F0F2F5', minHeight: '260px'}">
          <transition name="fade" :duration="100" mode="out-in">
            <router-view/>
          </transition>
          <footers></footers>
        </Content>
      </Layout>
    </Layout>
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
      menus: [],
      isCollapsed: false
    }
  },
  methods: {
    onLogout () {
      this.$router.push('/')
    },
    collapsedSider () {
      this.$refs.sideup.toggleCollapse()
    }
  }
}
</script>
<style lang="less" scoped>
.page {
  background: #515A6F;
  position: relative;
  border-radius: 4px;
  height: auto;
  overflow: hidden;
  overflow-y: auto;
  .page-header-bar {
    background: #fff;
    color: #333;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  .page-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .ivu-layout-sider {
    background: #fff;
    height: 100vh;
  }
  .ivu-layout {
    background: #515a6e;
  }
  .ivu-menu-dark {
    height: auto;
    min-height: 100%;
    font-size: 12px;
  }
  .menu-icon {
    transition: all 0.3s;
  }
  .rotate-icon {
    transform: rotate(-90deg);
  }
  .menu-item span {
    font-size: 12px;
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }
  .menu-item i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 12px;
  }
  .collapsed-menu span {
    width: 100%;
    text-align: center;
    display: inline-block;
    transition: width 0.2s ease;
  }
  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 20px;
  }
}
.ivu-layout-sider-children {
  border-right: 1px solid #D7DDE4;
}
.page-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ivu-dropdown {
  margin-right: 40px;
}
img {
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
