<template>
	<div class="detail">
      <uc-nav/>
		<div class="content" v-if="banner.title">
			<div class="header clear">
				<h2><img width="50" :src="$baseUrl + banner.banner" alt=""/></h2>
				<p>{{banner.author}}</p>
				<h3>{{banner.title}} --</h3>
			</div>
		</div>
    <frame-screen v-else></frame-screen>
	<footer></footer>
    </div>
</template>

<script>
	import UcNav from '../components/Nav'
	import UcToolbar from '../components/Toolbar.vue'
	import FrameScreen from '../components/FrameScreen.vue'
	import axios from '../plugins/axios.js'
	export default {
		name:'bannerdetail',
		props:{},
		data(){
		  return {
			banner:{}
		  }
		},
		components:{
			UcNav,UcToolbar,FrameScreen
		},
		mounted(){
			 axios({
			 	url:`/api/goods/banner/${this.$route.params._id}`,
			 	params:{_page:1,limit:6},
			 }).then(
			 	res=>this.banner = res.data.data
			 )
		},
		updated(){},
		methods:{}
	  }
</script>

<style scoped>
  html,body{ overflow-x: hidden; }
  .nav{width:100%; position:fixed;top:0;left:0; background:#fff; border-bottom:1px solid #e8eaec; z-index:99;}
  .nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;}
  .nav ul li{width:0.29rem;height:0.31rem; background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%; margin:0 0 0 0.38rem;}
  
  .content{max-width:6.4rem; height: 5rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
  .content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none}
  .content .header img{width: 100%;height: 3rem;border: 1px solid #5477B2;}
  .header h3{ float:right; }
  .header p{ float:right;font-size:0.3rem;}
  
  
</style>
