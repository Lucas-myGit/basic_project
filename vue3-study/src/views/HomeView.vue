<template>
  <div>{{ obj1 }}</div>
  <button @click="add">修改</button>
  <!-- <button @click="stop">停止监听</button> -->
</template>

<script setup>
import { reactive, watchEffect, watch } from 'vue'
const obj1 = reactive({ age: 18, child: { name: '小红' } })
const add = () => {
  obj1.age++
}
watchEffect((onInvalidate) => {
  console.log('正常打印', obj1.age)
  const aa = setTimeout(() => {
    console.log('异步打印', obj1.age)
  }, 1000)
  onInvalidate(() => clearTimeout(aa))
})
</script>
