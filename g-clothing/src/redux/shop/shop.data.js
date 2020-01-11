import hat1 from './images/hat1.jpeg';
import hat2 from './images/hat2.jpeg';
import hat3 from './images/hat3.jpeg';
import hat4 from './images/hat4.jpeg';
import sneakers1 from './images/sneakers1.jpeg';
import sneakers2 from './images/sneakers2.jpeg';
import sneakers3 from './images/sneakers3.jpeg';
import sneakers4 from './images/sneakers4.jpeg';
import jackets1 from './images/jackets1.jpeg';
import jackets2 from './images/jackets2.jpeg';
import jackets3 from './images/jackets3.jpeg';
import jackets4 from './images/jackets4.jpeg';
import womens1 from './images/womens1.jpg';
import womens2 from './images/womens2.jpg';
import womens3 from './images/womens3.jpg';
import womens4 from './images/womens4.jpg';
import womens5 from './images/womens5.jpg';
const SHOP_DATA = {
  hats:{
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl:hat1,
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: hat2,
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: hat3,
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: hat4,
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
      }
    ]
  },
  sneakers:{
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: sneakers1,
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: sneakers2,
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: sneakers3,
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: sneakers4,
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  jackets:{
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: jackets1,
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: jackets2,
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: jackets3,
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: jackets4,
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  womens:{
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: womens1,
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: womens2,
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: womens3,
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: womens5,
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: womens4,
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  mens:{
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
