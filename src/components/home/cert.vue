<template>
  <div class="zhengshu">
    <div class="zhengcenter">
      <div class="zigeO">
        <ul class="zhenglist">
          <li class="ziall">资格证书</li>
          <li class="fenzi">一级建造师</li>
          <li class="fenzi">二级建造师</li>
          <li class="fenzi">教师资格证书</li>
        </ul>
        <div class="more">
          <a href="#">更多></a>
        </div>
      </div>

      <!-- 图片加介绍 -->
      <div class="study">
        <div class="study_list">
          <div><img src="../../assets/images/wm.png" alt="" /></div>
          <div class="wyear">2020年二建建筑工程管理</div>
          <div class="yeardes">
            一站式学习体验/知心只能推送，课程逻辑清晰+优学教育
          </div>
          <div class="numbuy">258人已购买</div>
        </div>

        <div class="study_list">
          <div><img src="../../assets/images/wm.png" alt="" /></div>
          <div class="wyear">2020年二建建筑工程管理</div>
          <div class="yeardes">
            一站式学习体验/知心只能推送，课程逻辑清晰+优学教育
          </div>
          <div class="numbuy">258人已购买</div>
        </div>
        <div class="study_list">
          <div><img src="../../assets/images/wm.png" alt="" /></div>
          <div class="wyear">2020年二建建筑工程管理</div>
          <div class="yeardes">
            一站式学习体验/知心只能推送，课程逻辑清晰+优学教育
          </div>
          <div class="numbuy">258人已购买</div>
        </div>
        <div class="study_list study_listr">
          <div><img src="../../assets/images/wm.png" alt="" /></div>
          <div class="wyear">2020年二建建筑工程管理</div>
          <div class="yeardes">
            一站式学习体验/知心只能推送，课程逻辑清晰+优学教育
          </div>
          <div class="numbuy">258人已购买</div>
        </div>
      </div>

      <!-- 图片加介绍结束 -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  /* 资格证书 */
  .zhengshu {
    width: 100%;
    padding: 66px 0;
    background-color: #f1f1f5;
  }
  .zhengcenter {
    width: 62.5%;
    margin: 0 auto;
  }
  .zigeO {
    display: flex;
    justify-content: space-between;
  }
  .zhenglist {
    display: flex;
    list-style: none;
    justify-content: space-around;
  }
  .zhenglist li {
    padding: 0 10px;
    margin-right: 5px;
  }
  .ziall {
    font-size: 22px;
    /* font-weight: bold; */
    color: #111111;
  }
  .fenzi {
    font-size: 18px;
    color: #333333;
  }
  .more {
    font-size: 18px;
  }
  .more a {
    text-decoration: none;
    color: #e6bb3b;
  }
  .study {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-top: 40px;
  }
  .swiper-container {
    width: 100%;
    font-size: 0;
  }
  .imgi {
    width: 100%;
  }
  .study_list {
    width: 25%;
    margin-right: 2%;
    background: #ffffff;
    border-radius: 10px 10px;
    border: 0.001px solid ghostwhite;
  }
  .study_list img {
    width: 100%;
    /* border-radius: 10px 10px 0px 0px; */
  }
  .study_listr {
    margin-right: 0;
    border: 0.001px solid ghostwhite;
  }
  .wyear {
    font-size: 16px;
    color: #333333;
    padding: 10px 0 0 10px;
  }
  .yeardes {
    padding: 10px;
    font-size: 16px;
    color: #999999;
    border-bottom: 0.001px solid ghostwhite;
  }
  .numbuy {
    font-size: 14px;
    color: #999999;
    padding: 10px;
  }
  .zhengshuT {
    background: #ffffff;
  }
</style>
