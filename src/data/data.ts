import waffleThumbnail from '../assets/images/image-waffle-thumbnail.jpg';
import waffleMobile from '../assets/images/image-waffle-mobile.jpg';
import waffleTablet from '../assets/images/image-waffle-tablet.jpg';
import waffleDesktop from '../assets/images/image-waffle-desktop.jpg';

import cremeBruleeThumbnail from '../assets/images/image-creme-brulee-thumbnail.jpg';
import cremeBruleeMobile from '../assets/images/image-creme-brulee-mobile.jpg';
import cremeBruleeTablet from '../assets/images/image-creme-brulee-tablet.jpg';
import cremeBruleeDesktop from '../assets/images/image-creme-brulee-desktop.jpg';

import macaronThumbnail from '../assets/images/image-macaron-thumbnail.jpg';
import macaronMobile from '../assets/images/image-macaron-mobile.jpg';
import macaronTablet from '../assets/images/image-macaron-tablet.jpg';
import macaronDesktop from '../assets/images/image-macaron-desktop.jpg';

import tiramisuThumbnail from '../assets/images/image-tiramisu-thumbnail.jpg';
import tiramisuMobile from '../assets/images/image-tiramisu-mobile.jpg';
import tiramisuTablet from '../assets/images/image-tiramisu-tablet.jpg';
import tiramisuDesktop from '../assets/images/image-tiramisu-desktop.jpg';

import baklavaThumbnail from '../assets/images/image-baklava-thumbnail.jpg';
import baklavaMobile from '../assets/images/image-baklava-mobile.jpg';
import baklavaTablet from '../assets/images/image-baklava-tablet.jpg';
import baklavaDesktop from '../assets/images/image-baklava-desktop.jpg';

import meringueThumbnail from '../assets/images/image-meringue-thumbnail.jpg';
import meringueMobile from '../assets/images/image-meringue-mobile.jpg';
import meringueTablet from '../assets/images/image-meringue-tablet.jpg';
import meringueDesktop from '../assets/images/image-meringue-desktop.jpg';

import cakeThumbnail from '../assets/images/image-cake-thumbnail.jpg';
import cakeMobile from '../assets/images/image-cake-mobile.jpg';
import cakeTablet from '../assets/images/image-cake-tablet.jpg';
import cakeDesktop from '../assets/images/image-cake-desktop.jpg';

import brownieThumbnail from '../assets/images/image-brownie-thumbnail.jpg';
import brownieMobile from '../assets/images/image-brownie-mobile.jpg';
import brownieTablet from '../assets/images/image-brownie-tablet.jpg';
import brownieDesktop from '../assets/images/image-brownie-desktop.jpg';

import pannaCottaThumbnail from '../assets/images/image-panna-cotta-thumbnail.jpg';
import pannaCottaMobile from '../assets/images/image-panna-cotta-mobile.jpg';
import pannaCottaTablet from '../assets/images/image-panna-cotta-tablet.jpg';
import pannaCottaDesktop from '../assets/images/image-panna-cotta-desktop.jpg';

interface Dessert {
  name: string;
  price: number;
  category: string;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const dessertsData: Dessert[] = [
  {
    name: "Waffle with Berries",
    price: 6.5,
    category: "Waffle",
    image: {
      thumbnail: waffleThumbnail,
      mobile: waffleMobile,
      tablet: waffleTablet,
      desktop: waffleDesktop,
    },
  },
  {
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    category: "Crème Brûlée",
    image: {
      thumbnail: cremeBruleeThumbnail,
      mobile: cremeBruleeMobile,
      tablet: cremeBruleeTablet,
      desktop: cremeBruleeDesktop,
    },
  },
  {
    name: "Macaron Mix of Five",
    price: 8.0,
    category: "Macaron",
    image: {
      thumbnail: macaronThumbnail,
      mobile: macaronMobile,
      tablet: macaronTablet,
      desktop: macaronDesktop,
    },
  },
  {
    name: "Classic Tiramisu",
    price: 5.5,
    category: "Tiramisu",
    image: {
      thumbnail: tiramisuThumbnail,
      mobile: tiramisuMobile,
      tablet: tiramisuTablet,
      desktop: tiramisuDesktop,
    },
  },
  {
    name: "Pistachio Baklava",
    price: 4.0,
    category: "Baklava",
    image: {
      thumbnail: baklavaThumbnail,
      mobile: baklavaMobile,
      tablet: baklavaTablet,
      desktop: baklavaDesktop,
    },
  },
  {
    name: "Lemon Meringue Pie",
    price: 5.0,
    category: "Pie",
    image: {
      thumbnail: meringueThumbnail,
      mobile: meringueMobile,
      tablet: meringueTablet,
      desktop: meringueDesktop,
    },
  },
  {
    name: "Red Velvet Cake",
    price: 4.5,
    category: "Cake",
    image: {
      thumbnail: cakeThumbnail,
      mobile: cakeMobile,
      tablet: cakeTablet,
      desktop: cakeDesktop,
    },
  },
  {
    name: "Salted Caramel Brownie",
    price: 4.5,
    category: "Brownie",
    image: {
      thumbnail: brownieThumbnail,
      mobile: brownieMobile,
      tablet: brownieTablet,
      desktop: brownieDesktop,
    },
  },
  {
    name: "Vanilla Panna Cotta",
    price: 6.5,
    category: "Panna Cotta",
    image: {
      thumbnail: pannaCottaThumbnail,
      mobile: pannaCottaMobile,
      tablet: pannaCottaTablet,
      desktop: pannaCottaDesktop,
    },
  },
];

export default dessertsData;