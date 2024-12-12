<template>
  <div class=''>
      <img src="https://picsum.photos/200/200" @click="previewwImgs">
  </div>
</template>

<script>

export default {
  name:'',
  components: {},
  data () {
    return {
      dateTime: ''
    }
  },
  computed: {
    images() {
      const arr = []
      for(let i=0; i<100;i++) {
        arr.push("https://picsum.photos/200/200")
      }
			return arr;
		}
  },
  watch: {},
  methods: {
    previewwImgs() {
      this.$viewerApi({
          images: this.images,
        })
    },
  },
  mounted () {

  },
}
</script>
<style lang='scss' scoped>
// @import url(); 引入公共css类

</style>
