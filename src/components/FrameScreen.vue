<template>
  <div class="frame-screen">
   	<a href="" >
   		<h3><span></span></h3>
   		<p></p>
   	</a>
  </div>
</template>

<script>
  export default {
    name:'frame-screen',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	.frame-screen{padding: 0 0.4rem;}
	.frame-screen a{display: block; color:#494d4d; padding:0.2rem 0;/*border-bottom:1px dashed #ccc;*/}
	.frame-screen a h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
	.frame-screen a p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
	.frame-screen{clear: both;}
</style>
