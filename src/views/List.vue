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
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
