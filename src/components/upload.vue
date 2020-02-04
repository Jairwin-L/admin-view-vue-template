<template>
  <div>
    <Button
      class="btn"
      size="small"
      type="primary"
      icon="ios-cloud-upload-outline"
      ghost
      @click="swithUpStatus"
    >图片上传</Button>
    <Modal v-model="showUpModel" title="图片上传" ok-text="上传完毕" @on-ok="onUpOver" :mask-closable="false">
      <div>
        <div class="demo-upload-list" v-for="(item, index) in uploadList" :key="index">
          <template v-if="item.status === 'finished'">
            <img :src="item.response.data">
            <div class="demo-upload-list-cover">
              <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
          </template>
          <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
          </template>
        </div>
        <Upload
          ref="upload"
          :show-upload-list="false"
          :default-file-list="defaultList"
          :headers="uploadHeader"
          :format="['jpg','jpeg','png', 'gif']"
          :max-size="2048"
          :data="upParams"
          multiple
          type="drag"
          action="/api/upload"
        >
          <div>
            <Icon type="ios-camera" size="20"></Icon>
          </div>
        </Upload>
      </div>
      <p>仅支持gif、jpeg、png三种格式, 大小不超过2M</p>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showUpModel: false,
      upParams: {},
      uploadHeader: { Authorization: 'Bearer' + localStorage.token },
      uploadList: [],
      defaultList: []
    }
  },
  props: ['currentGroup'],
  watch: {
    currentGroup (val, old) {
      if (val) {
        this.upParams.group_id = this.currentGroup.id
      }
    }
  },
  mounted () {
    this.uploadList = this.$refs.upload.fileList
  },
  methods: {
    onUpOver () {
      this.$emit('over', this.uploadList)
    },
    swithUpStatus () {
      this.uploadList.length = 0
      this.showUpModel = !this.showUpModel
    },
    handleRemove (file) {
      const fileList = this.$refs.upload.fileList
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
    }
  }
}
</script>
<style lang="less" scoped>
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
.ivu-upload {
  display: inline-block;
  width: 58px;
  .ivu-upload-drag {
    > div {
      height: 58px;
      line-height: 58px;
    }
  }
}
</style>
