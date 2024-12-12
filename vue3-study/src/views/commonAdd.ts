import { ref, reactive } from 'vue'
export default (str: String) => {
  console.log('传递的参数：', str)
  const num = ref(0)
  const obj = reactive({ name: '小米' })
  const add = () => {
    num.value++
    obj.name += '777'
  }
  return { num, add, obj }
}
