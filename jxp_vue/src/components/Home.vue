<template>
<!--轮播图和-->
<div class="jxp_container">
  <!--头部-->
  <mt-header fixed title="食安"  font="white"></mt-header>
  <!--轮播图-->
  <mt-swipe :auto="2500">
    <mt-swipe-item v-for="item of list" :key="item.id">
      <img :src="item.img_url"> 
    </mt-swipe-item>
  </mt-swipe>
  <!--九宫格-->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Foodtime">
              <img src="../img/bake.png" />
              <div class="mui-media-body">餐桌时光</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Foodtime">
          <img src="../img/zhms.png" />
          <div class="mui-media-body">玩转烘焙</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Foodtime">
          <img src="../img/exercise.png" />
          <div class="mui-media-body">美食课堂</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Recommended">
          <img src="../img/menu4.png" />
          <div class="mui-media-body">网上购餐</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Recommended">
          <img src="../img/menu5.png" />
          <div class="mui-media-body">寻找周边</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Recommended">
          <img src="../img/menu6.png" />
          <div class="mui-media-body">心情记录</div>
        </router-link>
      </li>
  </ul>
  <!--状态切换-->
  <div class="togglee">
    <div class="togglee_check">
      <a href="javascript:;" class="togglee_left">最新</a>
      <a href="javascript:;" class="togglee_right">最热</a>
    </div> 
  </div>
  <!--这里是美食展示-->
  <div class="show-list">
    <div class="GoodList" v-for="item of goodlist" :key="item.fid">
      <router-link to="/User"><img class="bake" :src="item.fimg"></router-link> 
      <div class="GoodList_right">
        <router-link class="user-name" to="javascript:;">{{item.funame}}</router-link><br> 
        <span class="user-time">{{item.ftime}} 来自</span>
        <span class="user-time1">餐桌时光</span> 
        <p>{{item.fgood}}</p>
        <img class="box-nine-a" :src="item.fimg" alt="">
        <img class="box-nine-a" :src="item.fimg" alt="">
        <img class="box-nine-a" :src="item.fimg" alt="">
        <img class="box-nine-a" :src="item.fimg" alt="">
        <img class="box-nine-a" :src="item.fimg" alt="">
        <img class="box-nine-a" :src="item.fimg" alt="">
        <img class="box-nine-a" :src="item.fimg" alt="">
        <img class="box-nine-a" :src="item.fimg" alt="">
        <img class="box-nine-a" :src="item.fimg" alt="">
      </div>
    
    </div>
    <!--底部栏导航栏-->
    	<nav class="mui-bar mui-bar-tab" fixed>
			<router-link class="mui-tab-item mui-active" to="/Recommended">
				<span class="mui-icon mui-icon-map"></span>
				<span class="mui-tab-label">推荐</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Login">
				<span class="mui-icon mui-icon-extra mui-icon-extra-find">
                         <span class="mui-badge">0</span>
                </span>
				<span class="mui-tab-label">发现</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Recommended">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cate">
                </span>
				<span class="mui-tab-label">食话</span>
			</router-link>
			<div class="mui-tab-item" @click.prevent="login()"  >
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">
        我的</span>
			</div>
		</nav>
  </div>

  <div class="bto"></div>
</div>

</template>
<script> 

  export default{
    data(){
      return {
        list:{},
        goodlist:{},
      }
    },
    created() {
      //当组件对象创建成功后即可发送ajax请求
      this.getImages();
      this.Goodslist();
    },
    methods:{
      login(){
        if(!sessionStorage.getItem("name")){
          this.$router.push("/Myadmin");
        }else{
          this.$router.push("/Logout");
        }
      },
      getImages(){
        //完成一个功能，获取服务器轮播图片
        //0：获取路径
        var url = "http://127.0.0.1:3000/getImages";
        //1：发送axios请求
        this.axios.get(url).then(result=>{
        //2：返回数据响应值
          this.list = result.data;
        }) 
      },
      //美食展示
      Goodslist(){
        //完成一个功能，获取服务器轮播图片
        //0：获取路径
        var url = "http://127.0.0.1:3000/getGoods";
        //1：发送axios请求
        this.axios.get(url).then(result=>{

          console.log(result.data.result);
        //2：返回数据响应值
          this.goodlist = result.data.result;
        }) 
      },
    }
  }
</script>
<style>
/*这是头部条的样式*/
.mint-header{
  background-color:#fff;
  color:black;
  font-size:18px;
  font-family:"华文彩云";
 
}
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
.jxp_container{
  height:100%;
}
/*轮播图样式*/
.jxp_container .mint-swipe{
  height:200px;
}
 .jxp_container .mint-swipe img{
    height:100%;
    width:100%;
  }
  ul.mui-grid-9{
    height:100%;
    width:100%;
   }
/*九宫格样式*/
.jxp_container .mui-grid-9 img{
  width:60px;
  height:60px;
}
li.mui-table-view-cell{
  width:33%;
}
/*此处原本的样式移植到了app.vue的跟组件  以便于重用*/
/*状态条切换的样式*/
.togglee{
  width:153px;
  height:32px;
  background-color:pink;
  margin: 15px auto;
  text-align:center;
  border-radius:6px;
  overflow:hidden;
  border:1px solid #ff4c35;
}
.togglee_check{
  width:100%;
  text-align:center;
}
 .togglee a{
    line-height:35px;
 }
  .togglee a{
    line-height:35px;
 }
  .togglee .togglee_left{
    width:76px;
    height:32px;
    background-color:#ff4c35;
    display:inline-block;
    border-right: 1px solid #ff4c35;
    font-size:12px;
    color:#fff;
    float: left;
  }
   .togglee .togglee_right{
    width:75px;
    height:32px;
    background-color:white;
    display:inline-block;
    font-size:12px;
    color:#ff4c35;
  } 
/*美食展示的样式*/
.show-list{
  overflow:hidden;
  width:100%;
  height:100%;
}
 .GoodList{
  position:relative;
 }
 .user-name{
   font-size:12px;
   color:red;
 }
  .user-time{
    display:inline-block;
    color: #999;
    font-size: 12px;
    line-height: 12px;
  }
  .user-time1{
    color: #1995f5;
    font-size: 12px;
    line-height: 12px;
    display: inline-block;
  }
  .GoodList .bake {
    position:absolute;
    top:20px;
    left:5px;
    width:40px;
    height:40px;
  }
   .GoodList_right{
     padding-left:50px;
     padding-top:20px;
     padding-right:10px;
     box-sizing:border-box;     
   }
    .box-nine-a{
      display:inline-block;
      box-sizing:border-box;
      width:32%;
    }
   
</style>