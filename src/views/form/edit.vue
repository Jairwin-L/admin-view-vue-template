<template>
  <div class="container" v-if="model">
    <Row class="form-box">
      <i-col span="24">
        <div class="main-item">
          <p><span>*</span>KEY：</p>
          <Input size="small" v-model="model.key" placeholder="请输入KEY" style="width: 200px;"/>
        </div>
        <div class="main-item">
          <p><span>*</span>平台：</p>
          <Select size="small" v-model="model.platform" style="width: 200px;" placeholder="请选择平台">
            <Option v-for="item in platform" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="main-item">
          <p><span>*</span>打开类型：</p>
          <Select size="small" v-model="model.open_type" style="width: 200px;" placeholder="请选择打开类型">
            <Option v-for="item in openType" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="main-item">
          <p><span>*</span>目标值：</p>
          <Input size="small" v-model="model.target" placeholder="请输入目标值" style="width: 200px;"/>
        </div>
        <div class="main-item">
          <p>标题：</p>
          <Input size="small" v-model="model.title" placeholder="请输入标题" style="width: 200px;"/>
        </div>
        <div class="main-item">
          <p>排序：</p>
          <Input-number size="small" :min="0" v-model="model.sort" placeholder="请输入排序"></Input-number>
        </div>
        <div class="main-item">
          <p>备注说明：</p>
          <Input size="small" type="textarea" v-model="model.remark" placeholder="请输入备注说明" style="width: 200px;"/>
        </div>
        <up-single-pic @save="submitPic" :images="model.image" :title="'封面:'"></up-single-pic>
        <div class="main-item">
          <Button size="small" type="primary" @click="onSubmit">确认修改</Button>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
import UpSinglePic from '@/components/up-single-pic'
export default {
  components: {
    'up-single-pic': UpSinglePic
  },
  data () {
    return {
      model: null,
      platform: [
        {
          value: 'h5',
          label: 'H5/公众号'
        },
        {
          value: 'mp',
          label: '小程序'
        }
      ],
      openType: [
        {
          value: 'url',
          label: '链接'
        },
        {
          value: 'goods',
          label: '商品'
        },
        {
          value: 'goods-zone',
          label: '商品专区'
        },
        {
          value: 'goods-search',
          label: '商品搜索'
        },
        {
          value: 'brand',
          label: '品牌页'
        }
      ],
      showType: [
        {
          value: 1,
          label: '显示'
        },
        {
          value: 2,
          label: '隐藏'
        }
      ]
    }
  },
  beforeMount () {
    this.fetchModel()
  },
  methods: {
    submitPic (val) {
      this.model.image = val
    },
    fetchModel () {
    },
    onSubmit () {
      if (!this.model.key) {
        this.$Message.warning('请填写KEY')
        return
      }
      if (!this.model.platform) {
        this.$Message.warning('请填写平台')
        return
      }
      if (!this.model.open_type) {
        this.$Message.warning('请选择打开类型')
        return
      }
      if (!this.model.target) {
        this.$Message.warning('请选择目标值')
        return
      }
      if (!this.model.image) {
        this.$Message.warning('请上传封面')
        return
      }
      console.log(this.model)
      this.$router.push('./list')
    }
  }
}
</script>

<style lang="less" scoped>
.main-item {
  margin: 15px 0;
  font-size: 14px;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  > p {
    margin-bottom: 5px;
    span {
      color: #f00;
      margin-right: 5px;
    }
  }
}
</style>
