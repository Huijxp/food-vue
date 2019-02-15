const express = require("express");
var app=express();
app.use(express.static("public"));
const pool=require("./pool");
app.listen(3000,()=>{
  console.log("服务器启动成功了。")
});

//express mysql 参数 request,response
//跨域访问的配置
//1:加载模块cors
const cors=require("cors");
//2：配置cors
app.use(cors({
  origin:["http://127.0.0.1:8080",
          "http://localhost:8080"],//允许列表
  credentials:true //是否验证
}));
//3.记载第三方模块 express-session
const session = require("express-session");
//4:对模块配置
app.use(session({
  secret:"128位随机字符串", //安全令牌
  resave:false, //请求保存
  saveUninitialized:true, //初始化
  cookie:{ //sessionid保存时
    maxAge:1000*60*60*24//时间1天 cookie
  }
}))

//功能一：首页轮播
app.get('/getImages',(req,res)=>{
  var rows=[
    {id:1,img_url:"http://127.0.0.1:3000/img/chufangreshi.png"},
    {id:2,img_url:"http://127.0.0.1:3000/img/chirou.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/huixiang.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/img/huixiang.jpg"},
    {id:5,img_url:"http://127.0.0.1:3000/img/huoguo.jpg"},
  ];
  res.send(rows);
})
//功能二：美食展示
app.get('/getGoods',(req,res)=>{
  var sql = "SELECT `fid`, `fname`, `funame`, `ftime`, `fimg`, `flaugh`, `fgood` FROM `foodlaugh`";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
    if(result){
      res.send({result});
    }else{
      res.send({code:-1,msg:"没有查找到"});
    }
  })
})
//功能三：美食展示的分页显示
app.get('/getGoodsLimit',(req,res)=>{
  //1:参数 pno是页码 pageSize是页面的大小
  var pno  = req.query.pno;
  var pageSize = req.query.pageSize;
  //1.2 默认值 默认显示第一页 每页6条记录
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 6;
  }
  //2:验证正则表达式
  var reg = /^[0-9]{1,}$/;
  if(!reg.test(pno)){
    res.send({code:-1,msg:"页码格式不正确"});
    return;
  }
  if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
  }
  //查询数据库总数
  var sql = "select count(fid) as c from foodlaugh";//查询一下数据库内多少条数据  设置别名 c
  var progress = 0; //sql执行进度
  obj = {code:1}
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    //result[0].c 是数据库中查询到的数据
    var pageCount = Math.ceil(result[0].c/pageSize);//一共几页，从第一页显示
    obj.pageCount = pageCount;
    progress +=50;
    if(progress == 100){
      res.send(obj);
    }
  });
  //查看当前页的内容
  var sql = "SELECT `fid`, `fname`, `funame`, `ftime`, `fimg`, `flaugh`, `fgood` FROM `foodlaugh` limit ?,?";

})
//功能四：登陆
app.get('/Login',(req,res)=>{
  var name = req.query.anme;
  var pwd = req.query.pwd;
  var namereg = /^[a-z0-9_]{3,12}$/i;
  var pwdreg = /^[a-z0-9]{3,12}$/i;
  /*验证输入的账号密码是否正确*/
  if(!namereg.test(name)){
    Toast("用户名不符合规范,3位以上");
  }
  if(!pwdreg.test(pwd)){
    Toast("密码不正确");
  }
  var sql = "select * from xz_login where name=? and pwd=md5(?)";
  console.log(pwd);
  pool.query(sql,[name,pwd],(err,result)=>{
    if(err)throw err;
    //var c = result[0].c;
    if(result!=null){
      res.send({code:1,msg:"登陆成功!"});
    }else{
      res.send({code:-1,msg:"用户名或密码错误！"});
    }
  })
})
//功能八：注册
app.get('/admin',(req,res)=>{
  var name = req.query.anme;
  var pwd = req.query.pwd;
  var namereg = /^[a-z0-9_]{3,12}$/i;
  var pwdreg = /^[a-z0-9]{3,12}$/i;
  /*验证输入的账号密码是否正确*/
  if(!namereg.test(name)){
    Toast("用户名不符合规范,3位以上");
  }
  if(!pwdreg.test(pwd)){
    Toast("密码格式不正确");
  }
  var sql = "INSERT INTO `xz_login`(`id`, `name`, `pwd`) VALUES (null,?,?)";
  pool.query(sql,[name,pwd],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:'注册成功'});
      return;
    }else{
      res.send({code:-1,msg:'注册失败'});
    }
  })
})
//功能五：用户作品列表的展示
app.get('/userworks',(req,res)=>{
  var sql = "SELECT `userid`, `worksdata`, `worksimg`, `worksname`, `workclockimg`, `worksmellimg`, `workstime`, `worksmell` FROM `user_works`";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    //console.log(result);
    if(result){
      res.send(result);
    }
  })
})
//功能六：推荐页轮播图所需图片
app.get('/getrecommended',(req,res)=>{
  var recommended=[
    {id:1,img_url:"http://127.0.0.1:3000/foodimg/c1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/foodimg/c2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/foodimg/c3.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/foodimg/c4.jpg"},
    {id:5,img_url:"http://127.0.0.1:3000/foodimg/c2.jpg"},
  ];
  res.send(recommended);
})
//功能七：猜你喜欢美食列表展示
app.get('/guessList',(req,res)=>{
  var sql = "SELECT `guseeid`, `guessimg`, `guessname` FROM `guess_list`;";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    //console.log(result);
    if(result){
      res.send(result);
    }
  })
})