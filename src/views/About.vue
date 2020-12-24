<template>
  <main class="page page--pt about container-xl">
    <div class="about__logo">
      <img src="@/assets/images/logo.svg" alt="" />
    </div>
    <div class="bag-row about__top">
      <div class="bag-xl-5 bag-md-6" v-scrollanimate>
        <h1 class="about__title">重新定義,<br />喝水這件事</h1>
        <p>
          CAMELBAK是世界級的補水專家，專注在補水領域，不斷思考與創新，如何更便利，更有效的飲水，每一項產品皆通過層層把關，每一個細節都在為您考慮。
        </p>
        <p>在研發了這麼多的水瓶產品之後，我們回到初衷，反問自己，<b>為什麼要喝水？</b></p>
      </div>
      <div class="bag-xl-7 bag-md-6" v-scrollanimate>
        <img src="@/assets/images/about_1.jpg" alt="" />
      </div>
    </div>
    <div class="bag-row">
      <div class="bag-md-6 about__item" v-scrollanimate>
        <h2 class="about__title--sm">“為你的下個衝刺準備”</h2>
        <p>
          賴以為生的水，是我們進步的原動力，每天喝水不為別的，就是為了讓下一次的衝刺更快速，沒有時間讓我們停下腳步，為了下一次機會，補充你的水分，再次奔向終點吧。
        </p>
      </div>
      <div class="bag-md-6 about__item" v-scrollanimate>
        <h2 class="about__title--sm">“補充為失敗留下的淚水”</h2>
        <p>
          面對越來越困難與艱苦的人生，我們總是沒有那麼堅強，失敗一次兩次三次都是家常便飯，無論如何不放棄，就算摔倒，也要摔得漂亮，補充那些為懊悔留下的淚水，再次前進吧。
        </p>
      </div>
      <div class="bag-md-6 about__item" v-scrollanimate>
        <h2 class="about__title--sm">“為了讓每個人都充滿笑容”</h2>
        <p>
          人體70%是水分，你的笑容裡也都是水分，補充水分，人才會笑得開心，活的漂亮，自己補水也不忘提醒家人朋友補充水分，大家一起開心喝水，讓每個笑容裡都充滿陽光。
        </p>
      </div>
      <div class="bag-md-6 about__item" v-scrollanimate>
        <h2 class="about__title--sm">“為了下一代的永續發展”</h2>
        <p>
          CAMELBAK所有產品皆不含環境賀爾蒙BPA，每個環節都符合永續發展，透過使用我們的產品，一起為地球的環保盡一份力，你的每一個小小的舉動，都可以大大的改變我們的自然環境。
        </p>
      </div>
    </div>
    <div class="bag-row about__bottom">
      <div class="bag-md-4" v-scrollanimate>
        <img src="@/assets/images/about_2.jpg" alt="" />
      </div>
      <div class="bag-md-8" v-scrollanimate>
        <h2 class="about__title--sm">別再使用一次性的瓶裝水了</h2>
        <p>
          我們一切的出發點，都只為了讓您棄用一次性的瓶裝水，改用CAMELBAK水瓶，您將可感受到喝水效率明顯提升，同時為地球環保盡一份心力，現在就行動，給自己一個更美好的未來。
        </p>
        <router-link to="/product-list" class="btn btn-primary">
          購買CAMELBAK水瓶
        </router-link>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped></style>
<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
};
</script>
