<template>
  <div>
    <div class="main-pic">
      <p><span class="tip">*</span>主图</p>
      <div class="pic-box">
        <div class="uploud-pic" @click="switchUpStatus">
        <Icon type="ios-camera" size="20"></Icon>
      </div>
      <div class="demo-upload-list" v-for="(item, index) in product_img" :key="index">
        <template v-if="item">
          <img :src="item">
          <div class="demo-upload-list-cover">
            <Icon type="ios-trash-outline" @click.native="onRemovePic(index)"></Icon>
          </div>
        </template>
        <template v-else>
          <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
      </div>
    </div>
    </div>
      <!-- 图片上传模态 -->
        <Modal
          v-model="upImgStatus"
          title="选择素材"
          width="700"
          @on-ok="submitPic"
          @on-cancel="switchUpStatus"
          :mask-closable="false"
        >
        <Row>
          <i-col span="6">
            <Scroll v-if="groupList" :height="590" class="brand-scroll">
              <div
                class="left-item"
                dis-hover
                v-for="(item, index) in groupList"
                :key="index"
                @click="onSelectItem(item)"
              >{{ item.name }}</div>
            </Scroll>
          </i-col>
          <i-col span="18">
            <div class="images-box" v-if="list">
              <div class="item" v-for="(item, index) in list.data" :key="index" @click="userPic(item)">
                <div class="checked" v-if="item.selected">
                  <Icon type="md-checkmark" size="20"/>
                </div>
                <img class="item-pic" :src="item.url"/>
              </div>
            </div>
            <Page
            v-if="list"
            size="small"
            :total="list.meta.total"
            :page-size="pageParams.page_size"
            :current="list.meta.current_page"
            show-elevator
            @on-change="onChangePage"
          />
          </i-col>
        </Row>
      </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      upImgStatus: false,
      groupList: null,
      currentGroup: null,
      list: null,
      model: {},
      pageParams: {
        page: 1,
        page_size: 20
      },
      product_img: []
    }
  },
  props: ['images'],
  methods: {
    onRemovePic (index) {
      this.product_img.splice(index, 1)
    },
    switchUpStatus () {
      this.upImgStatus = !this.upImgStatus
    },
    onChangePage (e) {
      this.pageParams.page = e
      this.fetchImageList()
    },
    submitPic () {
      this.list.data.map(val => {
        if (val.selected) {
          this.product_img.push(val.url)
        }
      })
      this.product_img = Array.from(new Set(this.product_img))
      this.$emit('save', this.product_img)
    },
    onSelectItem (item) {
      this.currentGroup = item
      this.fetchImageList()
    },
    userPic (item) {
      item.selected = !item.selected
    },
    fetchImageList () {
    },
    fetchGroupList () {
    }
  },
  mounted () {
    this.product_img = this.images
  },
  beforeMount () {
    this.fetchImageList()
    this.fetchGroupList()
  }
}
</script>

<style lang="less" scoped>
.main-pic {
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  > p {
    margin-bottom: 5px;
    span {
      color: #f00;
      margin-right: 5px;
    }
  }
  .pic-box {
    display: flex;
    flex-wrap: wrap;
    .uploud-pic {
      width: 100px;
      height: 100px;
      line-height: 100px;
      border: 1px dashed RGBA(218, 217, 218, 1.00);
      text-align: center;
      margin-right: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      > img {
        width: 100px;
        height: 100px;
      }
    }
  }
  .demo-upload-list {
    display: inline-block;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      .demo-upload-list-cover {
        display: block;
      }
    }
    .demo-upload-list-cover {
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.6);
      i {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
      }
    }
  }
}
.images-box {
  width: 100%;
  height: 520px;
  margin-bottom: 5px;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  border: 1px solid #e9ebed;
  justify-content: space-around;
  overflow: auto;
  .item {
    margin: 15px 0;
    position: relative;
    .item-pic {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      display: block;
      cursor: pointer;
    }
    .checked {
      position: absolute;
      left: 0;
      top: 0;
      height: 100px;
      width: 100px;
      background: rgba(10, 10, 10, 0.7);
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
    }
  }
}
.brand-scroll {
  border:1px solid #E9EBED;
}
.left-item:hover {
  cursor: pointer;
}
.left-item {
  padding: 10px;
  width: 100%;
  text-align: center;
}
</style>
