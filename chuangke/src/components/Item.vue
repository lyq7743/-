<template>
  <div class="itemWarp" @click="fn1" :class="{active:falg}">
    <!--<img src="../assets/ic_tab_home_normal.png" alt="" />
    <img src="../assets/ic_tab_home_active.png" alt="" />  -->
    <span v-show='!falg'><slot name='normalImg'></slot></span>
    <span v-show='falg'><slot name='activeImg'></slot></span>
    <br />
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props:['title','mark','curr'],
  computed:{
  	falg(){
  		if(this.mark == this.curr){
  			return true
  		}
  		return false
  	}
  },
	methods:{
		fn1(){
			this.$emit('change',this.mark);
			this.$router.push({path:'/'+this.mark});
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itemWarp{
	flex: 1;
}
.itemWarp img{
	width: 60%;
}
.itemWarp span{
	font-size: 12/64rem;
}
.active{
	color: skyblue;
}
</style>
