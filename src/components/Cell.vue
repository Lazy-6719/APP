<template>
	<div class="cell" @click="getDetail">
		<a href="javascript: ;"  >
			<h3><span v-show="index!=null">{{index + 1}} . </span>{{data.title}}</h3>
			<p>{{data.des}}</p>
		</a>
	</div>
</template>

<script>
  export default {
    name:'Cell',
    props:{
		data:{
			 type:Object,
			 required:true,
			 default:function(){ //props类型是个对象，默认值要是一个函数，最后需要返回对象
			   //...
				return {}
			}
		},
		index:{
			type:Number,
			default:null
		},
		apiName:{
			type:String,
			default:null
		}
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{
		 getDetail(){
		    if(this.apiName){
		        this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`)
		    }
		}
    }
  }
</script>

<style scoped>
	.cell{padding: 0 0.4rem;}
	.cell a{display: block; color:#494d4d; padding:0.2rem 0;border-bottom:1px dashed #ccc;}
	.cell a h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
	.cell a p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
	.cell{clear: both;}
</style>
