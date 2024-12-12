import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    theme: "#c80000" //主题颜色(控制范围内部分
  },
  mutations: {
    CHANGE_SETTING: (state, { key, value }) => {
      if (state.hasOwnProperty(key)) {
        state[key] = value;
      }
    }
  },
  actions: {
    //此处data的判断是接收userInfo接口后台返回的里res.data.colorBoard
    changesetting({ commit }, data) {
      if (data.value == "") {
        //如未设需主题色，,则默认为#c80000
        data.value = "#c80000";
        commit("CHANGE SETTING", data);
      } else {
        commit("CHANGE SETTING, data");
      }
    }
  }
});

export default store;
