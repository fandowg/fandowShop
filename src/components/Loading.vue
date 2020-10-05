<template>
  <loading :active.sync="isLoading" color="#006699" loader="bars" background-color="#fff">
      <template slot="before">讀取中</template>
    </loading>
</template>

<script>
export default {
  data(){
    return{
      isLoading: false,
    }
    
  },
  methods:{
     changeLoading(v) {
      this.isLoading = v;
     
    },
  },
  created(){
    this.$bus.$on('changeLoading',(v)=>{
      this. changeLoading(v);
  
    })
  },
  beforeDestroy(){
    this.$bus.$off('changeLoading');
  }
};
</script>

