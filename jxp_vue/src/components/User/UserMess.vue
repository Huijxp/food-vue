<template>
  <!--整体盒子首-->
  <div class="jxp_user">
    <!--用户信息上半部分首-->
    <div class="user_top">
      <router-link to="/">
        <img class="user_top_return" src="http://127.0.0.1:3000/foodimg/back_con_88@3x.png" alt="">
      </router-link>
      <a class="userTitle">
        <img class="titleImg" src="http://127.0.0.1:3000/foodimg/tit.jpg" alt="">
        <img class="titleImgVip" src="http://127.0.0.1:3000/foodimg/home_V.png">
      </a>
      <div class="username">Xiao小C</div>
      <div class="userintr">正在通往美食达人的路上...</div>
      <div class="usercheck">
        <!--attention关注度 direct私信-->
        <div class="attention" @click="atten()">关注</div>
        <div class="direct" @click="sensMess()">发私信</div>
      </div>
    </div>
    <!--用户信息上半部分尾-->
    <!--用户关注度粉丝条首-->
    <div class="fans">
      <a class="fans_focus" href="javascript:;">
        <strong class="fans_strong">
          <span>19</span>
          关注
        </strong>
      </a>
      <a class="fansnum" href="javascript:;">
        <strong class="fans_strong">
          <span>8810</span>
          粉丝
        </strong>
      </a>
      <!-- recipenum 菜谱数量 -->
      <a class="recipenum" href="javascript:;">
        <strong class="fans_strong1">
          <span>172</span>
          菜谱
        </strong>
      </a>
    </div>
    <!--用户关注度粉丝条尾-->
    <!--用户作品导航条首-->
    <div class="user_works">
      <a href="javascript:;">
        <strong class="works_strong">
          171菜谱
        </strong>
      </a>
      <a href="javascript:;">
        <strong class="works_strong">
          15作品
        </strong>
      </a>
      <!-- recipenum 菜谱数量 -->
      <a href="javascript:;">
        <strong class="works_strong">
          414食话
        </strong>
      </a>
    </div>
    <!--用户作品导航条尾-->
    <!--用户作品列表日期条首-->
    <div class="workList">
      <!--用于遍历嵌套的一层外壳首-->
      <div class="workList1" v-for="item of userworksList" :key="item.userid">
        <div class="Data">{{item.worksdata}}</div>
        <!--list_shell 列表外壳-->
        <div class="list_shell">
          <router-link class="work_list" to="/">
            <img class="work_list_back" :src="item.worksimg" alt="">
            <h3 class="back_name">{{item.worksname}}</h3>
            <div class="start_goods"></div>
            <span class="list-time">
              <img class="list-time-img" :src="item.workclockimg" alt="">
              <span>{{item.workstime}}</span>
            </span>
            <span class="list-smell">
              <img class="list-smell-img" :src="item.worksmellimg" alt="">
              <span>{{item.workstime}}</span>
            </span>
          </router-link>
        </div>
      </div>
      <!--用于遍历嵌套的一层外壳尾-->
    </div>
    <!--用户作品列表日期条尾-->
  </div> 
  <!--整体盒子尾-->
</template>
<script>
import {Toast} from 'mint-ui'
  export default{
    data(){
      return{
        userworksList:{},
      }
    },
    created() {
      this.userworks();
    },
    methods:{
      atten(){
        Toast("关注成功");
      },
      sensMess(){
        if(!sessionStorage.getItem("name")){
          this.$router.push("/Myadmin");
        }else{
          this.$router.push("/Comment");
        }
      },
      //便利用户啊作品的方法
      userworks(){
        //设置路径
        var url = "http://127.0.0.1:3000/userworks";
        //发送请求
        this.axios.get(url).then(result=>{
          //得到返回结果值，赋值给userworks
          console.log(result.data);
          this.userworksList = result.data;
        })
      },
    },
    mounted() {
      
    },
  }
</script>
<style>
    /*全局样式清除*/
    *{
      margin:0;
      padding:0;
      border:0;
    }
    /*整体盒子样式代码*/
    div.jxp_user{
      width:100%;
      height:100%;
      top:0;
      left:0;
    }
    /*用户信息上半部分样式代码*/
    div.user_top{
      width:100%;
      height:220px;
      background:url("http://127.0.0.1:3000/foodimg/other_bgOnline@3x.png") center /100% 100% no-repeat;
      position:relative;
      left:0;
      top:0;
    }
    div.user_top>a:nth-child(1)>img{
      display:block;
      width:54px;
      height:44px;
      transform:rotateZ(0deg);
      position:fixed;
      left:6px;
      top:0;
    }
    img.user_top_return{
      width:100%;
    }
    a.userTitle{
      display:block;
      width:100%;
      text-align:center;
    }
    a.userTitle .titleImg{
      width:70px;
      height:70px;
      border-radius:50%;
      margin-top:30px;
    }
    a.userTitle .titleImgVip{
      width:16px;
      height:16px;
      position:absolute;
      right:155px;
      top:80px;
    }
    img.titleImgVip{
      width:100%;
    }
    img.titleImg{
      width:100%;
      height:100%;
    }
    div.username{
      width:100%;
      font-size:16px;
      color:#fff;
      text-align:center;
      margin:5px auto;
    }
    div.userintr{
      width:100%;
      font-size:12px;
      color:#fff;
      text-align:center;
      margin:5px auto;
    }
    div.usercheck{
      width:100%;
      overflow:hidden;
      text-align:center;
    }
    div.attention,div.direct{
      display:inline-block;
      background:rgba(255,255,255,0.1);
      border:1px solid rgba(255,255,255,0.6);
      height:22px;
      line-height:22px;
      border-radius:25px;
      font-size:14px;
      margin:4px 4px;
      width:66px;
      box-sizing:border-box;
      color:#fff;
    }
    /*用户关注度粉丝条样式代码*/
    div.fans{
      width:100%;
      height:50px;
      background:#fff;
      text-align:center;
      line-height:50px;
    }
    div.fans>a{
      display:inline-block;
      width:32%;
    }
    strong.fans_strong{
      display:block;
      font-size:13px;
      color:#ccc;
      width:100%;
      height:24px;
      line-height:24px;
      border-right:1px solid #ccc;
    }
    strong.fans_strong>span{
      color:#ff5151;
    }
    strong.fans_strong1{
      display:block;
      font-size:13px;
      color:#ccc;
      width:100%;
      height:24px;
      line-height:24px;
    }
    strong.fans_strong1>span{
      color:#ff5151;
    }
    /*用户作品导航条样式*/
    div.user_works{
      width:100%;
      height:50px;
      background:#fff;
      text-align:center;
      line-height:50px;
      margin-top:10px;
    }
    div.user_works>a{
      display:inline-block;
      width:32%;
      vertical-align:top;
      font-size:13px;
      color:#999;
    }
    strong.works_strong{
      height: 40px;
      margin: 2px 10px 0px;
      display: block;
      line-height: 40px;
    }
    /*用户作品列表日期条代码*/
    div.workList{
      width:100%;
      height:500px;
    }
    div.Data{
      height:34px;
      line-height:15px;
      width:100%;
      padding-left:16px;
      padding-top:10px;
      color: #999;
      background: #e8e8e8;
      font-size:13px;
    }
    /*用户作品列表日期样式条*/
    div.list_shell{
      width:100%;
      position:relative;
    }
    a.work_list{
      display:block;
      width:100%;
      height:122px;
      padding:16px;
      box-sizing:border-box;
    }
    a.work_list>img{
      width:90px;
      height:90px;
    }
    a.work_list .work_list_back{
      position:absolute;
    }
    h3.back_name{
      text-overflow:ellipsis;
      height:20px;
      line-height:20px;
      white-space:wrap;
      font-size:17px;
      position:absolute;
      left:115px;
      top:16px; 
      font-size:16px;
      color:#000;
    }
    div.start_goods{
      background:url("http://127.0.0.1:3000/foodimg/stars_ss.png") no-repeat;
      height:24px;
      background-position:98px -95px;
      background-size:102px 144px;
      margin-top:25px;
    }
    span.list-time{
      display:block;
    }
    span.list-time>img{
      width:15px;
      height:15px;
    }
    span.list-time .list-time-img{
      display:block;
      position:absolute;
      left:115px;
      margin-top:5px;
    }
    span.list-time>span{
      display:block;
      position:absolute;
      left:135px;
      margin-top:3px;
      font-size:14px;
      color:#999;
    }
    span.list-smell{
      display:block;
    }
    span.list-smell>img{
      width:15px;
      height:15px;
    }
    span.list-smell .list-smell-img{
      display:block;
      position:absolute;
      left:115px;
      margin-top:26px;
    }
    span.list-smell>span{
      display:block;
      position:absolute;
      left:135px;
      margin-top:25px;
      font-size:14px;
      color:#999;
    }
    /*用户遍历嵌套的一层外壳的样式*/
    div.workList1{
      width:100%;
    }
</style>