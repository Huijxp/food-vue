<template>
  <div class="user-login">
    <!--头部导航条首-->
    <div class="head-nav">
      <div class="head_nav_left">
        <router-link to="/">
          <img src="http://127.0.0.1:3000/foodimg/forward.png" alt="">
          <span>返回</span>
        </router-link>
      </div>
      <div class="head_nav_main">
        <h3>美食安</h3>
      </div>
      <div class="head_nav_right">
        <router-link to="/Myadmin">
          <h4>登录</h4>
        </router-link>
      </div>
    </div>
    <!--头部导航条尾-->
    <!--中间切换条首-->
    <div class="main_check">
      <a class="main_check_left" @click="phone_check()" href="javascript:;" :style="phoneColor">手机注册</a>
      <a class="main_check_right" @click="post_check()" href="javascript:;" :style="postColor">邮箱注册</a>
    </div>
    <!--中间切换条尾-->
    <!--注册登录模块切换首-->
    <div class="admin_check" :style="adminStyle">
      <input class="input_phone" type="number" placeholder="手机号">
      <a class="getcode" href="javascript:;">获取验证码</a>
      <input class="input_pwd" type="password" placeholder="密码">
      <input class="input_num" type="number" placeholder="验证码">
    </div>
    <div class="post_check" :style="postStyle">
      <input class="post_you" type="number" placeholder="邮箱">
      <input class="post_pwd" type="password" placeholder="密码">
    </div>
    <!--注册登录模块切换尾-->
    <!--注册按钮首-->
    <button class="admin_btn">注册</button>
    <!--注册按钮尾-->
    <!--登陆标志首-->
    <div class="login_mark">
      <a class="qq_mark" href="javascript:;">
        <img src="http://127.0.0.1:3000/img1/qq.jpg" alt="">
        QQ登陆
      </a>
      <a class="wb_mark" href="javascript:;">
        <img src="http://127.0.0.1:3000/img1/wb.jpg" alt="">        
        微博登陆
      </a>
    </div>
    <!--登陆标志尾-->
  </div>
</template>
<script>
  export default{
    data(){
      return{
       isCheck:true,
       adminStyle:{display:"block"},
       postStyle:{display:"none"},
       phoneColor:{backgroundColor:"#ff5151",color:"#fff"},
       postColor:{backgroundColor:"#fff",color:"#fff5151"}
      }
    },
    created() {
    },
    mounted() {//这里可写js方法
    },
    methods:{
      phone_check(){
        if(this.isCheck == false){
          this.adminStyle = {display:"block"}
          this.postStyle = {display:"none"}
          this.isCheck = true;
          this.postColor= {background:"#fff",color:"#ff5151"}
          this.phoneColor = {background:"#ff5151",color:"#fff"}
        }
      },
      post_check(){
        if(this.isCheck == true){
          this.adminStyle = {display:"none"}
          this.postStyle = {display:"block"}
          this.phoneColor = {background:"#fff",color:"#ff5151"}
          this.postColor = {background:"#ff5151",color:"#fff"}
          this.isCheck = false;
        }
      },

    }
  }
</script>
<style>
    /*全局样式边框清除*/
    *{
      margin:0;
      padding:0;
      border:0;
      }  
    /*最大模块 user-login*/
    div.user-login{
      width:100%;
      height:100%;
      overflow:hidden;
      }
    /*头部固定导航条--应用弹性*/
    div.head-nav{
      display:flex;
      justify-content:space-around;
      height:50px;
      width:100%;
      background:white;
      padding-top:10px;
      }
    div.head-nav>.head_nav_left{
      float:left;
      line-height:20px;
      }
    div.head-nav>.head_nav_left>a>img{
      margin-top:7px;
      height:20px;
      width:18px;
      transform:rotateZ(180deg);
      }
    div.head-nav>.head_nav_left>a>span{
      position:absolute;
      left:65px;
      top:18px;
      color:black;
      }
    div.head_nav_main{
      font-size:8px;
      color:black;
      }
    div.head_nav_right>a>h4{
      font-size:18px;
      color:black;
      position:relative;
      top:3px;
      }
    /*中间切换条样式*/
    div.main_check{
      width:90%;
      margin:16px auto;
      overflow:hidden;
      border-radius:2px;
      border:1px solid #ff5151;
      }
    div.main_check>a.main_check_left{
      display:block;
      width:50%;
      float:left;
      text-align:center;
      border-right:1px solid #ff5151;
      height:28px;
      line-height:28px;
      background:#ff5151;
      color:white;
      font-size:14px;
      }
    div.main_check>a.main_check_right{
      display:block;
      float:right;
      width:50%;
      text-align:center;
      height:28px;
      line-height:28px;
      background:white;
      color:#ff5151;
      font-size:14px;
      }
    div.admin_check{
      margin-top:32px;
      width:100%;
      position:relative;
      display:none;
      }
    /*注册登录模块切换的样式代码*/
    input.input_phone,input.input_pwd,input.input_num{
      display:inline-block;
      font-size:14px;
      margin:0;
      padding:10px 16px;
      height:44px;
      }
    a.getcode{
      height:30px;
      position:absolute;
      top:10px;
      right:16px;
      background:#ff5151;
      color:white;
      border-radius:2px;
      line-height:22px;
      font-size:14px;
      padding:3px;
      }
    .admin_btn{
      width:90%;
      margin:16px auto;
      display:block;
      height:44px;
      background:#ff5151;
      font-size:18px;
      color:white;
      }
    div.post_check{
      margin-top:32px;
      width:100%;
      position:relative;
      }
    input.post_you,input.post_pwd{
      display:inline-block;
      font-size:14px;
      margin:0;
      padding:10px 16px;
      height:44px;
      }
    /*登陆标志样式代码*/
    div.login_mark{
      margin-top:32px;
      position:relative;
      overflow: hidden;
      text-align: center;
      }
    a.qq_mark{
      display: inline-block;
      vertical-align: top;
      width: 56px;
      text-align: center;
      padding-top: 20px;
      line-height: 46px;
      color: #000;
      font-size: 14px;
      }
    a.qq_mark>img{
      display: block;
      height: 56px;
      width: 56px;
      border-radius: 50%;
      }
    a.wb_mark{
      display: inline-block;
      vertical-align: top;
      width: 56px;
      text-align: center;
      padding-top: 20px;
      line-height: 46px;
      color: #000;
      font-size: 14px;
      margin-left: 60px;
      }
    a.wb_mark>img{
      display: block;
      height: 56px;
      width: 56px;
      border-radius: 50%;
      }
</style>