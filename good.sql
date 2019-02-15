-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-01-30 13:37:31
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `good`
--

-- --------------------------------------------------------

--
-- 表的结构 `foodlaugh`
--

CREATE TABLE `foodlaugh` (
  `fid` int(11) NOT NULL,
  `fname` varchar(30) DEFAULT NULL,
  `funame` varchar(30) DEFAULT NULL,
  `ftime` varchar(20) DEFAULT NULL,
  `fimg` varchar(40) DEFAULT NULL,
  `flaugh` int(11) DEFAULT NULL,
  `fgood` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `foodlaugh`
--

INSERT INTO `foodlaugh` (`fid`, `fname`, `funame`, `ftime`, `fimg`, `flaugh`, `fgood`) VALUES
(1, '蛋糕', '莉莉', '9:28', 'http://127.0.0.1:3000/img/huixiang.jpg', 23, 15),
(2, '米', '霉霉', '9:01', 'http://127.0.0.1:3000/img/huixiang.jpg', 23, 15),
(3, '醋', '采采', '9:03', 'http://127.0.0.1:3000/img/huixiang.jpg', 23, 15),
(4, '酒精', '豆豆', '9:04', 'http://127.0.0.1:3000/img/huixiang.jpg', 23, 15),
(5, '鸡蛋', '花花', '9:05', 'http://127.0.0.1:3000/img/huixiang.jpg', 23, 15),
(6, '奶茶', '多多', '9:06', 'http://127.0.0.1:3000/img/huixiang.jpg', 23, 15),
(7, '火腿', '安安', '9:07', 'http://127.0.0.1:3000/img/huixiang.jpg', 23, 15),
(8, '面包', '雯雯', '9:08', 'http://127.0.0.1:3000/img/huixiang.jpg', 23, 15);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `foodlaugh`
--
ALTER TABLE `foodlaugh`
  ADD PRIMARY KEY (`fid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `foodlaugh`
--
ALTER TABLE `foodlaugh`
  MODIFY `fid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
