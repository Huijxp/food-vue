<template>
  <!--最外层容器首user-admin-->
  <div class="user-admin">
    <!--头部固定条首-->
    <div class="headr-nav">
      <h1 class="h1_content">登录美食安
        <router-link class="returnLogin" to="/">
          <img src="http://127.0.0.1:3000/foodimg/forward.png" alt="">
          <span>返回</span>
        </router-link>
        <router-link class="loginbtn" to="/Mylogin">注册</router-link>
      </h1>
    </div>  
    <!--头部固定调尾-->
    <!--输入框代码首-->
    <div class="inputcheck">
      <input class="input_phone1" v-model="name" type="text" placeholder="手机号/邮箱/用户名">
      <input class="input_pwd1" v-model="pwd" type="password" placeholder="密码">
    </div>
    <!--输入框代码尾-->
    <!--注册按钮首-->
    <button class="admin_btn" @click.prevent="userLogin()">登录</button>
    <!--注册按钮尾-->
    <!--忘记密码连接首-->
    <a class="forget_pwd" href="javascript:;">忘记密码？</a>
    <!--忘记代码连接尾-->
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
  <!--最外层容器尾-->
</template>
<script>
import {Toast} from 'mint-ui'
  export default{
    data(){
      return{
        name:"",
        pwd:"",
      }
    },
    created() {
      
    },
    methods:{
      userLogin(){
        var name = this.name;
        var pwd = this.pwd;
        var namereg = /^[a-z0-9_]{3,12}$/i;
        var pwdreg = /^[a-z0-9]{3,12}$/i;
        /*验证输入的账号密码是否正确*/
        if(!namereg.test(name)){
          Toast("用户名在3位以上,支持大小写");
          return;
        }
        if(!pwdreg.test(pwd)){
          Toast("密码不正确，请重新输入");
          return;
        }
        /*获取地址,发送axios请求*/
        var url="http://127.0.0.1:3000/Login";
            url+="?name="+name+"&pwd="+pwd;
        this.axios.get(url).then(result=>{
          if(result.data.code == 1){
            Toast("登陆成功");
            sessionStorage.setItem("name",name);
            this.$router.push("/");
          }else{
            Toast("用户或密码不正确");
          }
        })
      },
    }
  }
</script>
<style>
    /*全局样式的边框规整*/
    *{
      margin:0;
      padding:0;
      border:0;
      }
    /*这里是头部固定条目的样式代码*/
    div.user-admin{
      width:100%;
      height:100%;
      overflow:hidden;
      }
    div.headr-nav{
      width:100%;
      overflow:hidden;
      position:fixed;
      top:-5px;
      left:0;
      }
    h1.h1_content{
      background:#fff;
      font-size:22px;
      height:50px;
      text-align:center;
      line-height:50px;
      font-size:18px;
      }
    h1.h1_content>a.returnLogin{
      display:block;
      position:absolute;
      top:6px;
      left:0;
      height:50px;
      width:30%;
      }
    h1.h1_content>a.returnLogin>img{
      width:14px;
      height:22px;
      transform:rotateZ(180deg);
      position:absolute;
      top:13px;
      left:0;
      }
    h1.h1_content>a.returnLogin>span{
      color:black;
      font-size:18px;
      position:absolute;
      top:0;
      left:20px;
      font-size:16px;
      color:#ff5151;
      }
    a.loginbtn{
      display:black;
      position:absolute;
      right:15px;
      top:6px;
      font-size:16px;
      color:#ff5151;
      }
    /*输入框代码的样式*/
    div.inputcheck{
      margin-top:70px;
      width:100%;
      }
    input.input_phone1{
      display:inline-block;
      font-size:14px;
      padding:10px 16px;
      height:44px;
      margin:0;
      }
    input.input_pwd1{
      display:inline-block;
      font-size:14px;
      padding:10px 16px;
      height:44px;
      }
    /*登录按钮的样式代码*/
    div.admin_btn{
      width:90%;
      margin:16px auto;
      display:block;
      height:44px;
      background:#ff5151;
      font-size:18px;
      color:white;
     }
    /*忘记密码样式代码*/
    a.forget_pwd{
      display:block;
      color:#ccc;
      font-size:14px;
      width:100%;
      text-align:center;
      }
     /*登陆标志样式代码*/
    div.login_mark{
      margin-top:20px;
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
    .admin_btn {
    width: 90%;
    margin: 16px auto;
    display: block;
    height: 44px;
    background: #ff5151;
    font-size: 18px;
    color: white;
}
</style>