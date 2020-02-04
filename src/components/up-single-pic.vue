<template>
  <div>
    <div class="main-item main-pic">
      <span>{{text}}</span>
      <div class="uploud-pic" v-if="!model.image" @click="switchUpStatus">
        <Icon type="ios-camera" size="20"></Icon>
      </div>
      <div class="uploud-pic" v-if="model.image" @click="switchUpStatus">
        <img :src="model.image"/>
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
          <Scroll v-if="groupList" :height="550" class="scroll-pic">
            <div :class="{active: item.name === curretName}" class="left-item" dis-hover v-for="(item, index) in groupList" :key="index" @click="onSelectItem(item)">{{ item.name }}</div>
          </Scroll>
        </i-col>
        <i-col span="18">
          <div class="images-box" v-if="list">
            <div class="item" v-for="(item, index) in list.data" :key="index" @click="userPic(item)">
              <div class="checked" v-if="item.selected">
                <Icon type="md-checkmark" size="20"/>
              </div>
              <img class="item-pic" :src="item.url"/>
              <p>{{item.name}}</p>
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
      list: null,
      model: {},
      text: '',
      pageParams: {
        page: 1,
        page_size: 20
      },
      curretName: ''
    }
  },
  props: ['images', 'title'],
  methods: {
    switchUpStatus () {
      this.upImgStatus = !this.upImgStatus
    },
    onChangePage (v) {
      this.pageParams.page = v
      this.fetchImageList()
    },
    submitPic () {
      this.list.data.map(val => {
        if (val.selected) {
          this.model.image = val.url
          this.$emit('save', this.model.image)
        }
      })
    },
    onSelectItem (item) {
      this.currentGroup = item
      this.curretName = item.name
      this.fetchImageList()
    },
    userPic (item) {
      this.list.data = this.list.data.map(pointer => {
        pointer.selected = false
        return pointer
      })
      item.selected = true
    },
    fetchImageList () {
    },
    fetchGroupList () {
    }
  },
  mounted () {
    this.model.image = this.images
    this.text = this.title
    this.fetchImageList()
    this.fetchGroupList()
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
  > span {
    margin-bottom: 5px;
  }
}
.main-pic {
  display: flex;
  flex-flow: row wrap;
  span {
    width: 100%;
  }
  .uploud-pic {
    width: 100px;
    height: 100px;
    line-height: 100px;
    border: 1px dashed #dad9da;
    text-align: center;
    margin-right: 10px;
    cursor: pointer;
    > img {
      width: 100px;
      height: 100px;
    }
  }
}
.images-box {
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: center;
  box-sizing: border-box;
  border: 1px solid #e9ebed;
  overflow-x: hidden;
  .item {
    position: relative;
    margin: 5px;
    &:nth-child(4n) {
      margin-right: 0;
    }
    .item-pic {
      height: 90px;
      width: 90px;
      margin: 0 auto;
      display: block;
      cursor: pointer;
    }
    .checked {
      position: absolute;
      left: 0;
      top: 0;
      height: 90px;
      width: 90px;
      background: rgba(10, 10, 10, 0.7);
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
    }
    > p {
          margin: 0 auto;
    text-align: center;
    width: 70px;
    overflow: hidden;
    }
  }
}
.left-item {
  padding: 10px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.active {
  background: #F8F8F8;
}
.scroll-pic {
  border: 1px solid #E9EBED;
}
.ivu-row {
  height: 550px;
}
</style>
