<template>
  <Row class="search">
    <i-col :span="6" style="display: flex;">
      <div style="padding: 3px 7px;">key</div>
      <i-input v-model="searchParams.key" size="small" style="width: 150px;" placeholder="请输入key"></i-input>
    </i-col>
    <i-col :span="6" style="display: flex;">
      <div style="padding: 3px 7px;">标题</div>
      <i-input v-model="searchParams.title" size="small" style="width: 150px;" placeholder="请输入标题"></i-input>
    </i-col>
    <i-col span="6" style="display: flex;">
      <div style="padding: 3px 7px;">平台</div>
      <Select size="small" v-model="searchParams.platform" placeholder="请选择平台" style="width: 150px;">
        <Option v-for="(item, index) in platformData" :value="item.value" :key="index">{{ item.label }}</Option>
      </Select>
    </i-col>
    <i-col :span="24" style="margin-top: 15px;">
      <Button type="primary" size="small" icon="ios-search" @click="onSearch">搜索</Button>
    </i-col>
  </Row>
</template>
<script>
export default {
  data () {
    return {
      platformData: [
        {
          value: 'h5',
          label: 'H5/公众号'
        },
        {
          value: 'mp',
          label: '小程序'
        }
      ]
    }
  },
  props: ['searchParams'],
  methods: {
    onSearch () {
      this.$emit('search', this.searchParams)
    }
  }
}
</script>
