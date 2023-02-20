<template>
  <div>
    <van-button type="danger" @click="handleBtn">按钮</van-button>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { getUser } from '@/api/home'

export default {
  setup () {
    const msg = ref('支出系统移动端')
    const list = ref([])
    const store = useStore()
    getUser().then((res) => {
      console.log(res, 're')
      list.value = res.data
    })
    const name = computed(() => store.state.userNmae)

    const handleBtn = () => {
      store.commit('getUserName', '高启强')
    }
    return {
      msg,
      list,
      name,
      handleBtn
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  display: block;
  font-size: 40px;
  text-align: center;
  padding: 20px 0;
}

ul {
  li {
    display: block;
    font-size: 20px;
    padding: 20px 0;
    text-align: center;
  }
}
</style>
