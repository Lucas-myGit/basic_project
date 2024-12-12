<template>
  <!-- herf引用主题 -->
  <!-- <div class="multiple-css">
    <el-button @click="changeTheme('blue')">默认主题</el-button>
    <el-button @click="changeTheme('dark')">暗黑主题</el-button>
  </div> -->

  <!-- css3变量 -->
  <!-- <div class="box" ref="box">
    <el-button @click="changeTheme1('rgb(16, 220,255)')">默认主题</el-button>
    <el-button @click="changeTheme1('rgba(0, 0,0, 0.5 )')">黑色主题</el-button>
  </div> -->

  <themePicker @change="themeChange" />
</template>

<script>
import themePicker from "@/components/themePicker";
export default {
  name: "multipleCss",
  components: { themePicker },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    // 选中的值储存
    themeChange(val) {
      console.log("val", val);
      // 重点:vuex  store存储色值
      this.$store.dispatch("settings/changeSetting", {
        key: "theme",
        value: val
      });
      // 可选 ,可调取接口向后台存储数据
      // updatehandUser().then(res => {
      //   if (res.code == "200") {
      //   // 重点:vuex  store存储色值
      //     this.$store.dispatch("settings/changeSetting", {
      //       key: "theme",
      //       value: val
      //     });
      //   }
      // });
    },
    changeTheme1(color) {
      var themeColor = getComputedStyle(this.$refs.box).getPropertyValue(
        "--theme-dark-color"
      );
      console.log(themeColor);
      this.$refs.box.style.setProperty("--theme-dark-color", color);
    },
    changeTheme(name) {
      document.getElementById("theme").href = `../../static/css/${name}.css`;
    }
  },
  mounted() {
    var link = document.createElement("link");
    link.type = "text/css";
    link.id = "theme";
    link.rel = "stylesheet";
    link.href = "../../static/css/blue.css";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
};
</script>
<style lang="scss" scoped>
:root {
  --theme-dark-color: rgb(
    16,
    220,
    255
  ); // 这里定义了一个--theme-dark-color变量， 值为black
  --theme-dark-text-color: 000; // 这里定义了一个--theme-dark-color变量， 值为black
}
.box {
  padding: 40px;
  color: var(--theme-dark-text-color);
  background: var(--theme-dark-color);
}
</style>
