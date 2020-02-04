<template>
  <div class="container">
    <search :searchParams="searchParams" @search="onSearch"></search>
    <div class="form-box">
      <Button type="primary" size="small" :to="'add'">添加Banner</Button>
    </div>
    <Row class="table" v-if="list">
      <i-col span="24">
        <Table v-if="list.data" :columns="columns" :data="list.data" stripe>
          <template slot-scope="{ row }" slot="image" >
            <img :src="row.image + '?imageMogr2/auto-orient/thumbnail/640x/quality/75'" />
          </template>
          <template slot-scope="{ row }" slot="key" >{{ row.key}}</template>
          <template slot-scope="{ row }" slot="sort">{{ row.sort }}</template>
          <template slot-scope="{ row }" slot="platform">{{ row.platform }}</template>
          <template slot-scope="{ row }" slot="openType">{{ row.open_type }}</template>
          <template slot-scope="{ row }" slot="target">{{ row.target || '暂未设置'}}</template>
          <template slot-scope="{ row }" slot="title">{{ row.title || '暂未设置'}}</template>
          <template slot-scope="{ row }" slot="action">
            <Button type="primary" size="small" ghost style="margin-right: 10px;" :to="`edit/${row.id}`">编辑</Button>
            <Button type="error" size="small" ghost @click="onSwitchDel(row)">删除</Button>
          </template>
        </Table>
     </i-col>
    </Row>
    <Page
      v-if="list"
      size="small"
      :total="list.meta.total"
      :page-size="pageParams.page_size"
      :current="list.meta.current_page"
      show-elevator
      @on-change="onChangePage"
      style="margin-top: 10px;"
    />
    <Modal
      title="删除提示"
      v-model="del_model"
      @on-ok="onDel"
      :mask-closable="false">
      <p>您确认要删除该轮播？</p>
    </Modal>
  </div>
</template>

<script>
import Search from './components/search'
const columns = [
  {
    title: '图片',
    slot: 'image',
    align: 'center'
  },
  {
    title: 'key',
    slot: 'key',
    align: 'center'
  },
  {
    title: '排序',
    slot: 'sort',
    align: 'center'
  },
  {
    title: '平台',
    slot: 'platform',
    align: 'center'
  },
  {
    title: '打开类型',
    slot: 'openType',
    align: 'center'
  },
  {
    title: '目标',
    slot: 'target',
    align: 'center'
  },
  {
    title: '标题',
    slot: 'title',
    align: 'center'
  },
  {
    title: '操作',
    slot: 'action',
    width: 200,
    align: 'center'
  }
]
export default {
  components: {
    'search': Search
  },
  data () {
    return {
      searchParams: {},
      columns,
      list: null,
      pageParams: {
        page: 1,
        page_size: 20
      },
      del_model: false,
      clone_model: false,
      current_item_id: '',
      clone_id: ''
    }
  },
  beforeMount () {
    this.fetchList()
  },
  methods: {
    onSearch (params) {
      this.searchParams = params
      this.pageParams.page = 1
      this.fetchList()
    },
    onDel () {
    },
    onSwitchDel (item) {
      this.del_model = true
      this.current_item_id = item.id
    },
    onChangePage (e) {
      this.pageParams.page = e
      this.fetchList()
    },
    fetchList () {
    }
  }
}
</script>

<style lang="less" scoped>
.form-box {
  margin-bottom: 15px;
}
img {
  height: 50px;
  margin: 10px auto;
}
</style>
