<template lang="html">
  <div class="editor">
    <div ref="toolbar" class="toolbar">
    </div>
    <div ref="editor" class="text">
    </div>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'Editorbar',
  data () {
    return {
      editor: null,
      info_: null,
      uploadHeader: { 'Authorization': 'Bearer' + localStorage.token, contentType: 'multipart/form-data; charset=UTF-8' }
    }
  },
  props: ['content'],
  watch: {
    content (val, old) {
      this.editor.txt.html(val)
    }
  },
  mounted () {
    this.seteditor()
  },
  methods: {
    seteditor () {
      this.editor = new E(this.$refs.toolbar, this.$refs.editor)
      this.editor.customConfig.uploadImgShowBase64 = true // base 64 存储图片
      this.editor.customConfig.uploadImgServer = '/api/upload'// 配置服务器端地址
      this.editor.customConfig.uploadImgHeaders = this.uploadHeader
      this.editor.customConfig.uploadFileName = 'file' // 后端接受上传文件的参数名
      this.editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024 // 将图片大小限制为 2M
      this.editor.customConfig.uploadImgMaxLength = 6 // 限制一次最多上传 3 张图片
      this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000 // 设置超时时间

      // 配置菜单
      this.editor.customConfig.menus = [
        'head', // 标题
        'bold', // 粗体
        'fontSize', // 字号
        'fontName', // 字体
        'underline', // 下划线
        'foreColor', // 文字颜色
        'link', // 插入链接
        'list', // 列表
        'justify', // 对齐方式
        'image', // 插入图片
        'table', // 表格
        'undo'// 撤销
      ]
      this.editor.customConfig.uploadImgHooks = {
        fail: (xhr, editor, result) => {
          // 插入图片失败回调
        },
        success: (xhr, editor, result) => {
          // 图片上传成功回调
        },
        timeout: (xhr, editor) => {
          // 网络超时的回调
        },
        error: (xhr, editor) => {
          // 图片上传错误的回调
        },
        customInsert: (insertImg, result, editor) => {
          // 图片上传成功，插入图片的回调
          var url = result.data
          insertImg(url)
        }
      }
      this.editor.customConfig.onchange = (html) => {
        this.info_ = html // 绑定当前逐渐地值
        this.$emit('on-change', this.info_) // 将内容同步到父组件中
      }

      // 创建富文本编辑器
      this.editor.create()
      if (this.content) this.editor.txt.html(this.content)
    }
  }
}
</script>

<style lang="less">
.editor {
  width: 100%;
  margin: 0 auto;
}
.toolbar {
  border: 1px solid #ccc;
}
.text {
  border: 1px solid #ccc;
  height: 500px;
}
</style>
