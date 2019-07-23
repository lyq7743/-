<template>
  <div class="FooterWarp">
    <Item title='首页' mark='home' :curr='dangqian' @change='getVal'>
    	<img src="../assets/images/home1.png" slot='normalImg' alt="" />
    	<img src="../assets/images/home.png" slot='activeImg' alt="" />
    </Item>
    <Item title='问答' mark='answer' :curr='dangqian' @change='getVal'>
    	<img src="../assets/images/knowledge.png" slot='normalImg' alt="" />
    	<img src="../assets/images/knowledge.png" slot='activeImg' alt="" />
    </Item>
    <Item title='班级' mark='class' :curr='dangqian' @change='getVal'>
    	<img src="../assets/images/msg.png" slot='normalImg' alt="" />
    	<img src="../assets/images/msg.png" slot='activeImg' alt="" />
    </Item>
    <Item title='我的' mark='mine' :curr='dangqian' @change='getVal'>
    	<img src="../assets/images/mine.png" slot='normalImg' alt="" />
    	<img src="../assets/images/mine.png" slot='activeImg' alt="" />
    </Item>
  </div>
</template>

<script>
  import Item from './Item'
export default {
  components:{
    Item
  },
  data:function(){
  	return {
  		dangqian:'home'
  	}
  },
  methods:{
  	getVal(data){
  		this.dangqian = data
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .FooterWarp{
    height: 80px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border: 1px solid gainsboro;
    display: flex;
    background-color: #ffffff;
  }
</style>
