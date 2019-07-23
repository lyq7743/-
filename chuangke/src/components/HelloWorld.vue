<template>
  <div class="hello">
		<div class="login">
			 <span class="mylogin">
				 <a href="">登录/注册</a>
				 <p><img src="../../static/img/pen.png" /><i>成就更好未来</i></p>
			 </span>
			<a href="" class="reigth"><img src="../../static/img/avatar_default.png"></a>
		</div>
<div class="topbar">
					<div class="item">
						<img src="../../static/img/ic_my_class.png" alt="">
						<br />
						<span>班级</span>
					</div>
					<div class="item">
						<img src="../../static/img/ic_my_download.png" alt="">
						<br />
						<span>离线</span>
					</div>
					<div class="item">
						<img src="../../static/img/ic_my_msg.png" alt="">
						<br />
						<span>消息</span>
					</div>
					<div class="item">
						<img src="../../static/img/ic_my_wechat.png" alt="">
						<br />
						<span>微信</span>
					</div>
				</div>
				   
				 
				<div class="content">
					<ul>
						<div class="div"></div>
						<li>
							<a class="pic" href="#"><img src="../../static/img/ic_my_studycard.png" /></a>
							<span>学习卡</span>
							<a href="" class="jian"><img src="../../static/img/i_more.png" alt=""></a>
						</li>
						<li>
							<a class="pic" href="#"><img src="../../static/img/ic_my_live.png" /></a>
							<span class="my">我公开课</span>
							<a href="" class="jian"><img src="../../static/img/i_more.png" alt=""></a>
						</li>
						<li>
							<a class="pic" href="#"><img src="../../static/img/ic_my_qa.png" /></a>
							<span>我的问答</span>
							<a href="" class="jian"><img src="../../static/img/i_more.png" alt=""></a>
						</li>
						<li>
							<a class="pic" href="#"><img src="../../static/img/ic_my_order.png" /></a>
							<span>我的订单</span>
							<a href="" class="jian"><img src="../../static/img/i_more.png" alt=""></a>
						</li>
						<li>
							<a class="pic" href="#"><img src="../../static/img/ic_my_history.png" /></a>
							<span>浏览历史</span>
							<a href="" class="jian"><img src="../../static/img/i_more.png" alt=""></a>
						</li>
						<li class="foot"> 
							<a class="pic" href="#"><img src="../../static/img/ic_my_setting.png" /></a>
							<span>系统设置</span>
							<a href=""  class="jian"><img src="../../static/img/i_more.png" alt=""></a>
						</li>
					</ul>
				</div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{
		position: relative;
		width: 100%;
	}
	.login {
	 position: relative;
	}
	.mylogin{
		display: inline-block;
		width: 150px;
		position: absolute;
		left: 10px;
		top: 50px;
	}
	.login img {
	  position: absolute;
	  right: .6rem;
	  top: .3rem;
	}
	.login a {
		text-decoration: none;
	  color: #000;
	  font-family: "微软雅黑";
	 position: relative;
	 right: 25px;
	}
	.login p {
	 color: #666;
	  margin:2px 2px;
	}
	.login p i {
	  margin-left: .3rem;
	  font-style: normal;
	}
	.login p img {
	  width:20px;
	  height:20px;
	 position: relative;
	  left: 0px;
	  top: 0px;
	}
	.reigth img{
		 position: absolute;
		 left: 290px;
		 top: 15px;
	}
.topbar {
  position: relative;
  top:122px;
  display: flex;
  width: 100%;
}
.topbar .item {
  flex: 1;
  text-align: center;
}
.topbar .item span {
  color: #666;
}
.topbar .item img {
  width:35px;
  height:35px;
}
.div {
  background: whitesmoke;
  width: 100%;
  height:20px;
	margin-bottom:15px;
}
.content ul{
  border-bottom: 1px solid #ccc;
	/* margin-top: 140px; */
	position: relative;
	top: 140px;
/* 	right:100px; */
	width: 100%;
}
.content li {
	height:60px;
	width: 100%;
  line-height:50px;
  border-bottom: 1px solid #ccc;
	 
}
.content li .pic img {
  width:35px;
  height:35px;
	position: relative;
	top: 10px;
	right: 100px;
}
.content span{
	display: inline-block;
	 text-indent: 1em;
	 position: relative;
	 right: 100px;
}
 .my{
	display: inline-block;
    position: relative;
}
.jian{
	float: right;
}
 .foot{
	 border: none;
	 }
</style>
