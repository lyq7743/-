<template>
  <div class="Home">
    首页
    123456789
    <div class="swiper-container swiper-container1">
				<div class="swiper-wrapper">
					<div class="swiper-slide"><a href="#"><img src="../../../static/img/image/1514942733736454981.jpg" /></a></div>
					<div class="swiper-slide"><a href="#"><img src="../../../static/img/image/1523585741952464337.jpg" /></a></div>
					<div class="swiper-slide"><a href="#"><img src="../../../static/img/image/1542253529357636928.jpg" /></a></div>
					<div class="swiper-slide"><a href="#"><img src="../../../static/img/image/1541491969189977682.jpg" /></a></div>
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination"></div>

			</div>

  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .Home{
        .swiper-slide{
            img{
              width: 100%;
            }
        }
    }
</style>
