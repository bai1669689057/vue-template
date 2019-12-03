<template>
  <div>
    <Swiper></Swiper>
    <Teacher></Teacher>
    <Cert></Cert>
    <Cert style="background:#fff;"></Cert>
    <Study></Study>
    <News></News>
    <Feature></Feature>
    <School></School>
  </div>
</template>

<script>
import Swiper from '../components/home/swiper.vue'
import Teacher from '../components/home/teacher.vue'
import Cert from '@/components/home/cert.vue'
import Study from '@/components/home/study.vue'
import News from '@/components/home/news.vue'
import Feature from '@/components/home/feature.vue'
import School from '@/components/home/school.vue'
export default {
  components: {
    Swiper, Teacher, Cert, Study, News, Feature, School
  }
}
</script>

<style lang="scss" scoped>

</style>
