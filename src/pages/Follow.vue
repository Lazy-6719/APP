<template>
  <div class="Follow">
	<Cell 
		v-for="(item) of follow"
		:key="item._id"
		:data="item"
		apiName="follow"
	/>
  </div>
</template>

<script>
	import Cell from '../components/Cell.vue'
	import axios from '../plugins/axios.js'
	export default {
		name:'Follow',
		props:{},
		data(){
			return {
				follow:[]
			}
		},
		components:{
			Cell
		},
		mounted(){
			axios({
				url:'/api/goods/follow',
				params:{_page:1,limit:6},
			}).then(
				res=>this.follow = res.data.data
			)
		},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
  .Follow{
    margin-top: .6rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
</style>
