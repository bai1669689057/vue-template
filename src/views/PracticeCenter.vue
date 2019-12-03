<template>
  <div class="list">
    <div v-for="(item,index) in list" :key="index">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 110, 111, 112]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
