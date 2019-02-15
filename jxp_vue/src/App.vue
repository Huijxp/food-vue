<template>
  <div id="app">
    <!--img src="./assets/logo.png"-->
    <!--顶部导航栏-->
    <!--mt-header fixed title="食安"  font="white"></mt-header>
    <!--中间占位符-->
    <router-view/>
    <!--底部栏导航栏-->
    	<!--nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/Home">
				<span class="mui-icon mui-icon-map"></span>
				<span class="mui-tab-label">推荐</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Login">
				<span class="mui-icon mui-icon-extra mui-icon-extra-find">
                         <span class="mui-badge">0</span>
                </span>
				<span class="mui-tab-label">发现</span>
			</router-link>
			<router-link class="mui-tab-item" to="/ShopList">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cate">
                </span>
				<span class="mui-tab-label">食话</span>
			</router-link>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">
        我的</span>
			</a>
		</nav-->
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 40px;*/
}
.mint-header{
  background-color:#fff;
  color:black;
  font-size:18px;
  font-family:"华文彩云";  
}

/*可以复用的切换样式*/

</style>
