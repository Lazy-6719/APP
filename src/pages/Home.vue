<template>
  <div class="Home">
	<Swiper 
		:data="list"
		apiName="banner"
	>	
	</Swiper>
	<div class="home-m-l-r">
		<Cell
			v-for="(item,index) of home"
			:key="item._id"
			:data="item"
			:index="index"
			apiName="home"
		/>
	</div>
  </div>
</template>

<script>
	import Swiper from '../components/Swiper.vue'
	import Cell from '../components/Cell.vue'
	import axios from '../plugins/axios.js'
	export default {
		name:'Home',
		props:{},
		data(){
			return {
				list:[],
				home:[]
			}
		},
		components:{
			Swiper,Cell
		},
		mounted(){
			axios({
				url:'/api/goods/banner',
				params:{_page:1,limit:3},
			}).then(
				res=>this.list = res.data.data
			)
			axios({
				url:'/api/goods/home',
				params:{_page:1,limit:6},
			}).then(
				res=>this.home = res.data.data
			)
		},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
  .Home{
    /* background: #999999; */
  }
  .home-m-l-r{
    margin: 0 0.4rem;
  }
</style>
