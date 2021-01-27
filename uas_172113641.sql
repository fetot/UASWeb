-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 27 Jan 2021 pada 09.29
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uas_172113641`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_film`
--

CREATE TABLE `tbl_film` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `released` year(4) NOT NULL,
  `studio` varchar(50) NOT NULL,
  `wwgross` int(11) NOT NULL,
  `domgross` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_film`
--

INSERT INTO `tbl_film` (`id`, `title`, `released`, `studio`, `wwgross`, `domgross`) VALUES
(1, 'Frozen', 2013, 'Disney', 1072402000, 398402000),
(2, 'Toy Story 3', 2010, 'Disney Pixar', 1063171911, 415004880),
(3, 'Frozen 2', 2019, 'Disney', 1450026933, 477373578);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tbl_film`
--
ALTER TABLE `tbl_film`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tbl_film`
--
ALTER TABLE `tbl_film`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
