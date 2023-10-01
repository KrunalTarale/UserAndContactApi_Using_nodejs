-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2023 at 05:50 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contact_task`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `srno` int(30) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `address` varchar(200) NOT NULL,
  `contactno` varchar(100) NOT NULL,
  `zip` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `createdby` varchar(30) NOT NULL,
  `created` varchar(20) NOT NULL,
  `updated` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`srno`, `fullname`, `address`, `contactno`, `zip`, `email`, `createdby`, `created`, `updated`) VALUES
(2, 'Krunal Tarale', 'pulgaon', '34242424', '234242', 'krunaltarale555@gmail.com', '5', '01/10/2023', '01/10/2023'),
(3, 'Prajwal  Tarale', 'adf', '3040234', '3423', 'prajwwal@gmail.com', '5', '01/10/2023', '01/10/2023');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `srno` int(10) NOT NULL,
  `name` varchar(80) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(40) NOT NULL,
  `created` varchar(30) NOT NULL,
  `updated` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`srno`, `name`, `username`, `password`, `email`, `phone`, `created`, `updated`) VALUES
(5, 'Krunal Tarale', 'krunaltarale', 'asdf', 'krunaltarale555@gmail.com', '03032903032', '30/09/2023', '30/09/2023'),
(6, 'Prajwal Tarale', 'prajwal', 'adsf', 'prajwal@gmail.com', '32432432', '30/09/2023', '30/09/2023'),
(7, 'kruan asf', 'undefined', 'undefined', 'alkdf@gmail.com', 'undefined', '01/10/2023', '01/10/2023'),
(8, 'asdf asf', 'undefined', 'undefined', 'krunaltarale555@gmail.com', 'undefined', '01/10/2023', '01/10/2023'),
(9, 'krunal tarale', 'undefined', 'undefined', 'tatar@gmail.com', 'undefined', '01/10/2023', '01/10/2023');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`srno`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`srno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `srno` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `srno` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
