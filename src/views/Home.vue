<template>

    <!-- <router-link to="/login">登入後台</router-link>
    <router-link to="/admin">進入後台</router-link>
    <router-link to="/shopping-list">買東西</router-link> -->

    <main>
      
      <swiper class="top-banner"  :options="swiperOptions">
        <swiper-slide
          >
          <div class="top-banner__item" :style="{backgroundImage: 'url(' + bgImg.img_1 + ')'}" >
            <div class="top-banner__inner">
            <h2>2021最新運動水瓶</h2>
            <p>隨時隨地，暢快補水</p>
            <a href="" class="btn btn-primary btn-lg">了解更多</a>
</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="top-banner__item" :style="{backgroundImage: 'url(' + bgImg.img_2 + ')'}" >
            <div class="top-banner__inner">
            <h2>享受親子時光</h2>
            <p>全家人一起開心喝水</p>
            <a href="" class="btn btn-primary btn-lg">了解更多</a>
          </div>
          </div>
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev">        
          
          <img src="@/assets/images/prev.svg" alt="">
        </div>
        <div class="swiper-button-next " slot="button-next"><img src="@/assets/images/next.svg" alt=""></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <section class="section introduction container-1800">
        <h2>重新定義 喝水</h2>
        <div class="section__block bag-row">
          <div class="section__item bag-xl-3 bag-md-6">
            <div class="section__item__img">
              <img src="@/assets/images/category_1.jpg" alt="">
            </div>
            <div class="section__item__content">
              <h3>EVERYDAY BOTTLE <br> <big>吸管水瓶</big></h3>
              <p>使用再生含量為50％的新型塑料材料，製成可重複性使用的水瓶，取代一次性使用的紙杯宇保特瓶。持久耐用的Tritan水瓶，加入了充滿活力的新顏色和有趣的圖案，也滿足您對永續發展的渴望。</p>
            </div>

          </div>
           <div class="section__item bag-xl-3 bag-md-6">
            <div class="section__item__img">
              <img src="@/assets/images/category_2.jpg" alt="">
            </div>
            <div class="section__item__content">
              <h3>SPORT BOTTLE <br> <big>運動水瓶</big></h3>
              <p>適當的補充水分可以提高運動表現、耐力和安全性。我們的高性能運動水瓶系列可以保持水分補給，讓你可以繼續前進。</p>
            </div>

          </div>
           <div class="section__item bag-xl-3 bag-md-6">
            <div class="section__item__img">
              <img src="@/assets/images/category_3.jpg" alt="">
            </div>
            <div class="section__item__content">
              <h3>EVERYDAY
KIDS
BOTTLE<br> <big>兒童水瓶</big></h3>
              <p>CamelBak兒童水瓶，全系列水瓶保證不含環境賀爾蒙BPA「雙酚A」，並符合歐盟食品容器規範及兒童用容器標準、並符合美國FDA認證為安全容器。

針對兒童設計的特殊咬嘴，不會因孩童的啃咬而脫落</p>
            </div>

          </div>
           <div class="section__item bag-xl-3">
            <div class="section__item__img">
              <img src="@/assets/images/category_4.jpg" alt="">
            </div>
            <div class="section__item__content">
              <h3>EVERYDAY
DRINKWARE<br><big>不鏽鋼水瓶</big></h3>
              <p>美好的一天就從早上的第一杯咖啡開始，拿著不鏽鋼保溫杯與馬克杯隨時補充保持一整天的活力熱情。

推出全新樣式與顏色的日常不鏽鋼系列</p>
            </div>

          </div>

        </div>
      </section>


      
    </main>

<!-- 熱賣產品

產品類別 -->



  
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
  data() {
    return {
      bgImg:{
        img_1:require('@/assets/images/top_1.jpg'),
        img_2:require('@/assets/images/top_2.jpg'),
      },
      
      swiperOptions: {        
        loop: true,
        // autoplay: {          
        //   delay: 5000,
        //   disableOnInteraction: false,
        // },
        speed: 800,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // Some Swiper option/callback...
      },
      
    };
  },
};
</script>
