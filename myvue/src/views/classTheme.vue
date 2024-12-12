<template>
  <!-- <div :class="[themeClass, 'themlayout']" style="padding: 40px 0">
    <div class="class_1">这是一段文字</div>
    <el-button @click="themeClass = 'default_theme'">默认主题</el-button>
    <el-button @click="themeClass = 'coffee_theme'">咖啡主题</el-button>
    <el-button @click="themeClass = 'purple_theme'">紫色主题</el-button>
  </div> -->
  <div :class="[postClass]" style="padding: 40px 0">
    <div class="foo">我是文字</div>
    <el-button @click="postClass = 'default_theme'">变主题</el-button>
  </div>
</template>

<script>
export default {
  name: "classTheme",
  components: {},
  data() {
    return {
      themeClass: "default_theme",
      postClass: ""
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
@import "../assets/css/variables.less";
.themlayout {
  width: 100%;
  height: 100%;
}
.default_theme {
  /*默认主题，经典蓝*/
  .base_theme();
}
.coffee_theme {
  /*咖啡色主题*/
  .base_theme(#f5e2c9, #9f754d);
}
.purple_theme {
  /*紫色主题*/
  .base_theme(#e5d3ed, #b88bcb);
}
</style>
<style>
/* :root {
  --main-color: green;
}
.foo {
  font-size: 16px;
  color: var(--main-color);
} */
</style>
