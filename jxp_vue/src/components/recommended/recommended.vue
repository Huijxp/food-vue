<template>
  <!--Recommended推荐-->
  <!--这是整体盒子首-->
  <div class="Recommended">
    <!--推荐页面顶部搜索匡首-->
    <a class="top_search" href="javascript:;">
      <img class="searchImg" src="http://127.0.0.1:3000/foodimg/search.png" alt="">
      <a class="searchInput" href="javascript:;">
        <img class="fangdaImg" src="http://127.0.0.1:3000/foodimg/topsearchicon@3x.png" alt="">
        <span>搜索你感兴趣的</span>
      </a>
      <img class="emailImg" src="http://127.0.0.1:3000/foodimg/email.png" alt="">
    </a>
    <!--推荐页面顶部搜索匡尾-->
    <!--轮播图首-->
    <mt-swipe :auto="2500">
      <mt-swipe-item v-for="item of list" :key="item.id">
        <img :src="item.img_url"> 
      </mt-swipe-item>
    </mt-swipe>
    <!--轮播图尾-->
    <!--分类列表首-->
    <div class="sort_list">
      <router-link class="list1" to="/">
        <img src="http://127.0.0.1:3000/foodimg/quanbunew.png" alt="">
        <p>菜谱分类</p>
      </router-link>
      <router-link class="list2" to="/">
        <img src="http://127.0.0.1:3000/foodimg/shipincaipunew.png" alt="">
        <p>菜谱菜谱</p>
      </router-link>
      <router-link class="list3" to="/">
        <img src="http://127.0.0.1:3000/foodimg/kuaishoucainew.png" alt="">
        <p>早餐</p>
      </router-link>
      <router-link class="list4" to="/">
        <img src="http://127.0.0.1:3000/foodimg/fujinnew.png" alt="">
        <p>附近</p>
      </router-link>
    </div>
    <!--分类列表尾-->
    <!--今日推荐模块首-->
    <div class="coment-model">
      <h2 class="today_coment">今日推荐</h2>
      <div class="today_coment-img">
        <div class="today_coment-img1">
          <img src="http://127.0.0.1:3000/foodimg/c5.jpg" alt="">
        </div>
        <div class="today_coment-img1">
          <img src="http://127.0.0.1:3000/foodimg/c6.jpg" alt="">
        </div>
        <div class="today_coment-img1">
          <img src="http://127.0.0.1:3000/foodimg/c4.jpg" alt="">
        </div>
      </div>
    </div>
    <!--今日推荐模块尾-->
    <!--这里是猜你喜欢模块首-->
    <div class="guess-you-content">
      <div class="guess-you">
        <img class="guess-you-left" src="http://127.0.0.1:3000/foodimg/guess.png" alt="">
        <div class="guess-you-right">
          <h2>猜你喜欢</h2>
          <em>03:39为你更新</em>
        </div>
      </div>
    </div>
    <!--这里是猜你喜欢模块首-->
    <!--这里是猜你喜欢的美食列表首-->
    <div class="guessList">
      <router-link class="gusessList-img" v-for="item of gList" :key="item.guessid" to="/Foodtime">
        <img :src="item.guessimg" alt="">
        <strong class="gusessList-name">{{item.guessname}}</strong>
      </router-link>
      
    </div>
    <!--这里是猜你喜欢的美食列表尾-->
    <!--底部栏导航栏首-->
    <nav class="mui-bar mui-bar-tab" fixed>
      <router-link class="mui-tab-item mui-active" to="/Recommended">
        <span class="mui-icon mui-icon-map"></span>
        <span class="mui-tab-label">推荐</span>
      </router-link>
      <router-link class="mui-tab-item" to="/home">
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
      <router-link class="mui-tab-item" to="Mylogin">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">
        我的</span>
      </router-link>
		</nav>
    <!--底部栏导航栏尾-->
  </div>
  <!--这是整体盒子尾-->
</template>
<script>
  export default{
    data(){
      return{
        list:{},//轮播图列表
        gList:{},//猜我喜欢列表
      }
    },
    created() {
      this.recommended();
      this.getguessList();
    },
    methods:{
      recommended(){
        //完成一个功能，获取服务器轮播图片
        //0：获取路径
        var url = "http://127.0.0.1:3000/getrecommended";
        //1：发送axios请求
        this.axios.get(url).then(result=>{
        //2：返回数据响应值
          this.list = result.data;
        }) 
      },
      getguessList(){
        var url = "http://127.0.0.1:3000/guessList";
        this.axios.get(url).then(result=>{
          this.gList = result.data;
        })
      },
    },
    mounted() {
      
    },
  }
</script>
<style>
  /*这里是全局样式的归零代码*/
  *{
    margin:0;
    border:0;
    padding:0;
    }
  /*这里是整体盒子的样式代码*/
  div.Recommended{
    width:100%;
    }
  /*推荐页面顶部搜索匡样式代码*/
  a.top_search{
    width:100%;
    display:block;
    background:#fff;
    height:44px;
    position:fixed;
    left:0;top:0;
    text-align:center;
    z-index: 1;
    }
  a.top_search>.searchImg{
    position:absolute;
    left:0;
    top:0;
    width:52px;
    height:44px;
    }
  img.searchImg{
    display:block;
    width:100%;
    }
  a.top_search>.emailImg{
    position:absolute;
    right:0;
    top:0;
    width:52px;
    height:44px;
    }
  img.emailImg{
    display:block;
    width:100%;
    }
  a.searchInput{
    height: 32px;
    border-radius: 2px;
    background: #f5f5f5;
    line-height: 32px;
    margin: 0px 52px;
    color: #aaa;
    font-size: 14px;
    text-align: center;
    display: block;
    position: relative;
    top: 6px;
    }
  img.fangdaImg{
    display:block;
    position:absolute;
    width:14px;
    height:14px;
    left:70px;
    top:9px;
    }
  /*轮播图样式*/
  /*这是轮播图的样式*/
  .mt-swipe{
    width:100%;
    height:100%;
    }
  .mint-swipe{
    margin-top:40px;  
    }
  .bto{
    margin-top:100px;
    }
  /*总样式*/
  .Recommended{
    height:100%;
    }
  /*轮播图样式*/
  .Recommended .mint-swipe{
    height:200px;
    }
  .Recommended .mint-swipe img{
    height:100%;
    width:100%;
    }
  ul.mui-grid-9{
    height:100%;
    width:100%;
    }
  /*分类列表样式*/
  div.sort_list{
    margin-top:10px;
    position:relative;
    width:100%;
    height:123px;
    background:#fff;
    text-align:center;
    display:flex;
    align-items:center;
    vertical-align:center;
    }
  div.sort_list>a{
    display:block;
    width:23%;
    height:123px;
    margin:0 auto;
    }
  a.list1>img,a.list2>img,a.list3>img,a.list4>img{
    display:block;
    width:65px;
    height:65px;
    margin:20px 0 0 10px; 
    }
  /*今日推荐模块样式代码*/
  div.coment-model{
    width:100%;
    margin-top:14px;
    }
  div.coment-model>h2.today_coment{
    text-align:center;
    font-size:18px;
    line-height:34px;
    color:#333;
    }
  div.today_coment-img{
    width:95%;
    margin:10px auto;
    }
  div.today_coment-img1{
    width:100%;
    height:100%; 
    }
  div.today_coment-img1>img{
    width:100%;
    height:160px;
    border-radius: 5px;
    }
  /*这里是猜你喜欢模块样式*/
  div.guess-you-content{
    width:100%;
    }
  div.guess-you{
    height:30px;
    text-align:center;
    margin:24px 0 14px;
    }
  div.guess-you>img{
    display:inline-block;
    vertical-align: top;
    width:30px;
    height:30px;
    }
  img.guess-you-left{
    display:block;
    width:100%;
    height:100%;
    }
  div.guess-you-right{
    display:inline-block;
    text-align:left;
    vertical-align:center;
    height:30px;
    padding-left:4px;
    }
  div.guess-you-right>h2{
    font-size:14px;
    margin-top:-1px;
    }
  div.guess-you-right>em{
    font-size:10px;
    }
  /*这里是猜你喜欢的列表样式代吗*/
  div.guessList{
    width:95%;
    margin:0 auto;
    height:100%;
    margin-bottom:70px;
    }
  a.gusessList-img{
    width:49%;
    height:50px;
    margin: 0px 0 10px 0;
    position:relative;
    }
  a.gusessList-img>img{
    width:175px;
    height:172px;
    border-radius:5px;
    }
  strong.gusessList-name{
    height:32px;
    line-height:32px;
    font-size:14px;
    position:absolute;
    bottom:15px;
    left:0;
    text-align:center;
    color:#fff;
    text-shadow:0 1px 0 rgba(0,0,0,0.7);
    text-overflow:ellipsis;
    white-space:nowrap;
    display:block;
    width:100%;
    background:url("http://127.0.0.1:3000/foodimg/shadow.png");
    background-size:100% auto;
    }

</style>