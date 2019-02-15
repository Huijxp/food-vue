--创建用户作品展示表
create table user_works(
  userid int primary key auto_increment, --用户id
  worksdata varchar(50),  --作品日期
  worksimg varchar(255),  --作品图片
  worksname varchar(50),  --作品名称
  workclockimg varchar(50), --作品中的时钟图片
  worksmellimg varchar(50),--作品中的奶瓶图片
  workstime varchar(50),  --作品步骤/时间
  worksmell varchar(50) --作品风味
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
insert into user_works values(null,'2019-1-30','http://127.0.0.1:3000/foodimg/bake.jpg','粉粉猪挤挤面包','http://127.0.0.1:3000/foodimg/timeimg.png','http://127.0.0.1:3000/foodimg/smellimg.png','14步 /< 60分钟','奶香味1/烤');

create table guess_list(#--猜你喜欢表，推荐页
  guseeid int primary key auto_increment,#--id
  guessimg varchar(255),#--图片
  guessname varchar(35)#--名称 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
insert into guess_list values(null,'http://127.0.0.1:3000/foodimg/fa1.jpg','双味卷肠粉');
insert into guess_list values(null,'http://127.0.0.1:3000/foodimg/f2.jpg','小猪佩奇馒头');
insert into guess_list values(null,'http://127.0.0.1:3000/foodimg/f3.jpg','玫瑰花蒸糕');
insert into guess_list values(null,'http://127.0.0.1:3000/foodimg/f4.jpg','玫瑰花蒸卷');
insert into guess_list values(null,'http://127.0.0.1:3000/foodimg/f5.jpg','包子');
insert into guess_list values(null,'http://127.0.0.1:3000/foodimg/f6.jpg','炖白菜');
insert into guess_list values(null,'http://127.0.0.1:3000/foodimg/f7.jpg','松仁玉米');
insert into guess_list values(null,'http://127.0.0.1:3000/foodimg/f8.jpg','叉烧肉');
insert into guess_list values(null,'http://127.0.0.1:3000/foodimg/f9.jpg','姜糖糕');
insert into guess_list values(null,'http://127.0.0.1:3000/foodimg/f10.jpg','清炒红薯叶');

