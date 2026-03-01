import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Инновационная камера 48 Мп. Прочный корпус из алюминия и цветного стекла. Разъем USB-C для зарядки.',
      price: 419864,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13 2022',
      description: 'Невероятно тонкий дизайн. Чип M2 нового поколения. До 18 часов работы от аккумулятора без подзарядки.',
      price: 799800,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/64509328457758.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-serebristyi-105933794/'
    },
    {
      id: 3,
      name: 'Наушники Apple AirPods 4 Active Noise Cancellation белый',
      description: 'Улучшенное активное шумоподавление. Пространственный звук. До 6 часов работы в режиме прослушивания.',
      price: 84960,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/he6/87309386219550.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p20/108964628.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-active-noise-cancellation-belyi-124333921/?c=750000000'
    },
    {
      id: 4,
      name: 'Смартфон Samsung Galaxy S24 Ultra',
      description: 'Встречайте эру Galaxy AI. Камера 200 Мп для невероятной детализации. Встроенное электронное перо S Pen.',
      price: 520000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-116043556/'
    },
    {
      id: 5,
      name: 'Dyson Airwrap HS05 Long с дорожным чехлом и расческами стайлер розовый, золотой',
      description: 'Совершенный стайлер с помощью которого вы одновременно бережно сушите и укладываете волосы — салонная укладка без перегрева и лишних движений.',
      price: 182518,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h6e/86037605646366.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h92/h6e/86037605646366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd9/p57/2476716.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf6/p57/2476717.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-airwrap-hs05-long-s-dorozhnym-chehlom-i-rascheskami-stailer-rozovyi-zolotoi-119489111/?c=750000000'
    },
    {
      id: 6,
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм черный-черный',
      description: 'Размер корпуса - 40 мм Время работы в активном режиме-До 18 часов Датчики-Gps С функцией автоматического определения падений.',
      price: 122644,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p18/7079036.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p00/p18/7079036.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1c/p18/7079037.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p18/7079039.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-chernyi-chernyi-129672957/?c=750000000'
    },
    {
      id: 7,
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      description: 'Испытайте мощь нового поколения игр в более компактном дизайне. 1 ТБ памяти SSD для мгновенной загрузки.',
      price: 304990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 8,
      name: 'Умная колонка Яндекс Станция Лайт YNDX-00025 фиолетовый',
      description: 'Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками.',
      price: 55000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haa/h8e/64362957799454.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h05/64362960617502.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-yndx-00025-fioletovyi-101870266/?c=750000000'
    },
    {
      id: 9,
      name: 'Гитара акустическая Yamaha F310 коричневый, черный, желтый',
      description: 'YAMAHA F310 воплощает приверженность качеству дизайна и звучания и объединяет эти достоинства в единое целое по непревзойденно доступной цене.',
      price: 69490,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h94/h62/63762445795358.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h94/h62/63762445795358.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he7/h09/63762446450718.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/h56/63762447106078.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/gitara-akusticheskaja-yamaha-f310-korichnevyi-chernyi-zheltyi-14100411/?c=750000000'
    },
    {
      id: 10,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description: 'Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения.',
      price: 207922,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000'
    }
  ]);

  changeImage(product: Product, newImg: string) {
    product.image = newImg;
  }

  shareTelegram(product: Product) {
    console.log('Кнопка нажата для:', product.name);
    const url = encodeURIComponent(product.link);
    const text = encodeURIComponent(`Посмотри этот товар: ${product.name}`);
    const telegramShareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(telegramShareUrl, '_blank');
  }
}