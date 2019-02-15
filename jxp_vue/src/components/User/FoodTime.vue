<template>
<div class="container">
  <!--外包防止泄露-->
  <div class="headr-con">
    <!--这里是头部条-->
    <div class="headr">
      <router-link class="food-time" to="/">餐桌时光</router-link>
      <!--状态切换-->
      <div class="toggle">
        <div>
          <a href="javascript:;" class="toggle_left">最新</a>
          <a href="javascript:;" class="toggle_right">最热</a>
        </div> 
      </div>
    </div><!--这里是头部条尾巴-->
    <!--中间部分防止泄露-->
    <div class="main-con">
      <!--这是中间头部的内容-->
      <!--知识来源https://blog.csdn.net/tan1071923745/article/details/81162667  内联样式-->
      <div class="title"><!--绑定样式 :style="titleHeight"-->
        <div class="top">
          <img class="top-img1" src="http://127.0.0.1:3000/foodimg/zhms.png" alt="">
          <img class="top-img2" src="http://127.0.0.1:3000/foodimg/forward.png" alt=""><!-- :style="rotateZ"-->
          <div class="desc"><!-- @click="clickdown()"-->
            <h2 class="top-desc-name">餐桌时光</h2>
            <p class="top-desc-num">900820个食话</p>
          </div>
          <div class="p">
            <p class="p-laugh">爱你就是和你吃很多顿饭</p>
          </div>         
        </div>
      </div>
      <!--这是头部的列表内容-->
      <div class="content-list"><!-- :style="content"-->
        <div class="list_sort" v-for="item of goodlist" :key="item.nid">
          <router-link class="list_sort_a" to="/User"><img :src="item.fimg" alt="">
          </router-link>
          <div class="sort_right">
            <router-link class="sort_right_a" to="javascript:;">
              <span class="span_content">{{item.funame}}</span><br>
              <em class="em_content">{{item.ftime}}发布</em>
            </router-link>
            <a class="span_content2" href="javascript:;">
              <span>哈哈哈，真好吃</span>
            </a>
         
          </div>
          <div class="zan">
            <img src="http://127.0.0.1:3000/img1/comment24@3x.png" alt=""><span>0</span>
            <img src="http://127.0.0.1:3000/img1/heart24@3x.png" alt=""><span>0</span>
          </div>
        </div>
     
     </div>
    
    </div>
 <!--mt-button size="large" type="primary" @click="getMore()">加载更多</mt-button-->
  </div> <!--外包防止泄露尾巴-->
  <!--这是底部代码-->
  <div class="footr-con">
    <a class="foot" href="javascript:;">
      <img class="foot-img" src="http://127.0.0.1:3000/foodimg/tabbar_03@3x.png" alt="">
      <span class="foot-span"><a @click="getMore()" class="foot-span" href="javascript:;">加载更多</a></span>
    </a>
  </div>
</div><!--container尾部--> 
</template>
<script>
  export default{
    data(){
      return{
        downup:false,
        titleHeight:{height:"80px"},
        rotateZ:{transform:"rotateZ(270deg)"},   
        content:{transition:"all 1s linear"},
        goodlist:{},
        list:[],     //返回数据
        pageIndex:0, //当前页码
        pageSize:7,  //页大小
        pageCount:1  //总页数
      }
    },
    created() {
      this.Goodslist();
    },
    methods:{
       //点击加载更多
       getMore(){
         //加载下一页
         //1:pageIndex自增
         this.pageIndex++;
         var pno = this.pageIndex;
         var ps = this.pageSize;
         //2:发送ajax请求
         var url = "http://127.0.0.1:3000/getGoods?pno="+pno+"&pageSize="+ps;
         //url +="/getGoods";
         //url +="?pno="+pno+"&pageSize="+ps;
         //3:返回数据保存 list
         this.axios.get(url).then(result=>{
             //覆盖
             //this.list = result.data.data;
             //追加
             var rows = this.goodlist.concat(result.data.result);
             this.goodlist = rows;
             this.pageCount = result.data.pageCount;
         });
         ///404 url  nan 参数
         //4:保存总页数
         //5:在模板中创建循环显示list中数据

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
      clickdown(){      
        //console.log(this.titleHeight);
        if(this.downup == false){
          this.titleHeight={height:"140px"};
          this.rotateZ={transform:"rotateZ(90deg)"};  
          this.downup= true;
        }else{
          this.titleHeight={height:"80px"};
          this.rotateZ={transform:"rotateZ(270deg)"};  
          this.downup= false;
        }

      }
    },
    mounted() {
      var $title = $(".title");
      var $desc = $(".desc");
      var $top =  $(".top");
      //var $topImg2 = $(".top-img2");
      $($title,$desc).on('click',function(){
        console.log("我是当前title的现高度"+$title.outerHeight());//获取本身的高度包括padding  但不包括margin  如需要outerHeight(true) 即可
        if($title.outerHeight() == 80){/*http://www.runoob.com/jquery/html-outerheight.html*/
          $title.animate({"height":"140px"},300);
          $(".title .top .top-img2").css({"transform":"rotateZ(270deg)","-webkit-transform:":" rotateZ(270deg)"})
        }else{
          $title.animate({"height":"80px"},300)
          $(".title .top .top-img2").css({"transform":"rotateZ(90deg)","-webkit-transform":" rotateZ(90deg)"})
        }
      })
    },
}
</script>
<style>

/*防止头部内容泄露*/
div.container{
  background: #fdfdfd;
}
div.headr-con{
  width:100%;
  height:100%;
  top:0;
  left:0;
/*background: #fdfdfd;*/
}
/*防止中间部分内容泄露*/
div.main-con{
  width:100%;
  position:relative;
}

   .toggle .toggle_right{
    width:65px;
    height:30px;
    line-height:30px;
    background-color:white;
    display:inline-block;
    font-size:12px;
    color:#ff4c35;
  }
  /*这里是下拉框模块*/
  div.title{
    width:100%;
    height:80px;
    padding:10px 5%;
    box-sizing:border-box;
    position:relative;
    overflow:hidden;
  }
   div.top{
     height:60px;
     width:100%;
     position:relative;
   }
   /*top 里的两张图*/
    div.top img.top-img1{
      display:block;
      width:60px;
      height:60px;
      position:absolute;
      top:0;
      left:0;
      z-index:2;
    }
      img.top-img2{
        display:block;
        width:12px;
        height:20px;
        position:absolute;
        right:5%;
        top:20px;
        transform:rotateZ(90deg);
        transition:all ease 0.2s;
     }
      div.desc{
        padding: 2px 0 0 70px;
        position:relative;
      }
        h2.top-desc-name{
          font-size: 16px;
          color: #333;
          line-height: 24px;
        }
         span.foot-span{
           display:inline-block;
           font-size: 14px;
           color: #999;
           line-height: 20px;
         }
/*尾部*/
a.foot{
  display:block;
  position:fixed;
  height:44px;
  width:100%;
  bottom:0;
  background:rgba(255,81,81,0.7);
  line-height:30px;
  text-align:center;
  line-height:44px;
}
  a.foot>img{
    width:30px;
    height:30px;
  }
   img.foot-img{
     display:inline-block;
     position:relative;
     top:20%;
   }
  span.foot-span>a.foot-span{
    display:inline-block;
    color: #fdfdfd;
    font-size: 16px;
    line-height: 44px;
    text-align:center;
  }

/*头部条*/
div.headr{
  width:100%;
  height:50px;
  border-bottom:1px solid #ddd;
}
/*餐桌时光样式*/
a.food-time{
  display:block;
  height:50px;
  line-height:50px;
  width:100px;
  text-align:center;
  float:left;
  color:pink;
}
/*状态条切换的样式*/
.toggle{
  width:133px;
  height:28px;
  float:left;
  line-height:28px;
  margin: 10px 0px 0px 20px;
  background-color:pink;
  text-align:center;
  border-radius:6px;
  overflow:hidden;
  border:1px solid #ff4c35;
}
  .toggle .toggle_left{
    width:66px;
    height:30px;
    line-height:30px;
    background-color:#ff4c35;
    display:inline-block;
    border-right: 1px solid #ff4c35;
    font-size:12px;
    color:#fff;
    float: left;
  }
/*这是下拉框的内容*/
div.p{
  width:100%;
  margin-top:10px;
  height:50px;
}
  p.p-laugh{
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 10px 15px;
    box-sizing: border-box;
    background: #eee;
    font-size: 14px;
    line-height: 22px;
    color: #666;

  }
/*这是中间头部列表的样式*/
    div.content-list{
      /*height:550px;*/
      height: 100%;
      width:100%;
      padding-bottom:50px;
    }
    div.list_sort{
      width: 100%;
      margin: 0 auto;
      position: relative;
      padding: 15px 5%;
      box-sizing: border-box;
      margin:15px 0;
    }
    .list_sort_a{;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      position: absolute;
      top: 15px;
      left: 5%;
      display: block;
    }
    .list_sort_a>img{
      display:block;
      width:100%;
    }
    div.sort_right{
      display: inline-block;
      vertical-align: top;
      width: 100%;
      padding-left: 35px;
      box-sizing: border-box;
      position:relative;
    }
    a.sort_right_a{
      display:block;
      position:absolute;
      top:-10px;
      left:50px;
    }
    .span_content{
      font-size:14px;
      color:#ff5151;
    }
    .em_content{
      font-size:14px;
      color:#ddd;
    }
    .span_content2 span{
      display:block;
      position:absolute;
      font-size:16px;
      left:140px;
      top:13px;
    }
    .zan{
      position:absolute;
      left:300px;
      top:28px;
      height:60px;
    }
    .zan img{
      width:10px;
      height:10px;
    }
    .zan span{
      padding-left:5px;
      color:#ccc;
      font-size:14px;
    }
    
</style>
