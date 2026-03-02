import { Product, Category } from './models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Appliances' }
];

export const PRODUCTS: Product[] = [
  // Смартфоны (Category 1)
  {
    id: 1, name: 'Смартфон Apple iPhone 15 128Gb NanoSIM+eSIM черный',
    description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн.',
    price: 405613, rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/', likes: 0, categoryId: 1
  },
  {
    id: 11, name: 'Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ серый',
    description: 'Представляем вам Samsung Galaxy S24 Ultra 5G — смартфон, который сочетает в себе высокую производительность, премиальный дизайн и инновационные технологии.',
    price: 597997, rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-116043556/', likes: 0, categoryId: 1
  },
  {
    id: 12, name: 'Смартфон Xiaomi Redmi Note 13 Pro+ 5G NFC 16 ГБ/512 ГБ черный', 
    description: 'Xiaomi Redmi Note 13 Pro+ 5G NFC — это мощный смартфон с передовыми технологиями и стильным дизайном, созданный для тех, кто ценит высокую производительность и безупречное качество.',
    price: 184462, rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p5b/pdd/15562936.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3f/pdd/15562937.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/?c=750000000', likes: 0, categoryId: 1
  },
  {
    id: 13, name: 'Смартфон Poco X6 Pro 12 ГБ/512 ГБ черный',
    description: 'Poco X6 Pro 5G имеет привлекательный дизайн с задней панелью из пластика и пластиковой рамкой с металлическим блеском, который имитирует металл.',
    price: 228094, rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h45/84940376899614.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hbe/h45/84940376899614.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6b/h24/84940376932382.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p4a/pdf/19321083.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/poco-x6-pro-12-gb-512-gb-chernyi-115961596/?c=750000000', likes: 0, categoryId: 1
  },
  {
    id: 14, name: 'Смартфон Apple iPhone 13 128Gb NanoSIM+eSIM черный',
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
    price: 338988, rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-nanosim-esim-chernyi-102298404/?c=750000000', likes: 0, categoryId: 1
  },

  // Ноутбуки (Category 2)
  {
    id: 2, name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
    description: 'MacBook Air 2022 года можно назвать одним из крупнейших обновлений линейки за всю историю.',
    price: 799800, rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/64509328457758.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-serebristyi-105933794/', likes: 0, categoryId: 2
  },
  {
    id: 21, name: 'Ноутбук Lenovo IdeaPad 3 15.6" / 8 Гб / SSD 256 Гб / DOS / 15IGL05 / 81WQ00ERRK',
    description: 'Ноутбук IdeaPad 3 работает тише и с меньшим выделением тепла за счет использования оптимизированной механической системы распределения потоков воздуха и интеллектуальной вентиляции.',
    price: 172985, rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000', likes: 0, categoryId: 2
  },
  {
    id: 22, name: 'Ноутбук ASUS TUF Gaming FA507NUR-LP127E 15.6" / 32 Гб / SSD 1000 Гб / Win 11 Pro / 90NR0JP5-M007S0',
    description: 'ASUS TUF Gaming FA507NUR-LP127E — это мощный и надёжный ноутбук, созданный для работы, учебы и захватывающих игр.', 
    price: 824890, rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/pe1/49606145.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p44/pe1/49606145.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p7c/pe1/49606147.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pb5/pe1/49606149.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-fa507nur-lp127e-15-6-32-gb-ssd-1000-gb-win-11-pro-90nr0jp5-m007s0-141557286/?c=750000000', likes: 0, categoryId: 2
  },
  {
    id: 23, name: 'Ноутбук HP Pavilion 15-eh3007ci 15.6" / 16 Гб / SSD 1024 Гб / DOS / 7P438EA#UUQ',
    description: 'Мощный и стильный ноутбук с ярким экраном 15.6", 16 Гб оперативной памяти и огромным SSD на 1 Тб для быстрой работы в режиме многозадачности.',
    price: 449999, rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/hb6/82089377726494.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h4e/hb6/82089377726494.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h20/h6d/82089377988638.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h0b/h3f/82089378185246.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eh3007ci-15-6-16-gb-ssd-1024-gb-dos-7p438ea-uuq-111968153/?c=750000000', likes: 0, categoryId: 2
  },
  {
    id: 24, name: 'Ноутбук Lenovo IdeaPad 3 15.6" / 8 Гб / SSD 256 Гб / DOS / 15IGL05 / 81WQ00ERRK',
    description: 'Ноутбук IdeaPad 3 работает тише и с меньшим выделением тепла за счет использования оптимизированной механической системы распределения потоков воздуха и интеллектуальной вентиляции.', price: 250000, rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium'
    ],
    link: 'http://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000', likes: 0, categoryId: 2
  },

  // Наушники (Category 3)
  {
    id: 3, name: 'Наушники Apple AirPods 4 Active Noise Cancellation белый', 
    description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни.', 
    price: 84705, rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc8/he6/87309386219550.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p00/p20/108964628.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-4-active-noise-cancellation-belyi-124333921/', likes: 0, categoryId: 3
  },
  {
    id: 31, name: 'Наушники Marshall Major IV черный', 
    description: 'Bluetooth гарнитура MARSHALL Major IV благодаря своим особенностям подарит вам комфортное прослушивание музыки самых разных жанров.', 
    price: 23997, rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p0f/pc2/17680137.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p2b/pc2/17680138.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000', likes: 0, categoryId: 3
  },
  {
    id: 32, name: 'Наушники Sony WH-1000XM5 черный', description: 'WH-1000XM5 поддерживают форматы High-Resolution Audio и High-Resolution Audio Wireless благодаря LDAC – признанной технологии кодирования звука.', 
    price: 133633, rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000', likes: 0, categoryId: 3
  },
  {
    id: 33, name: 'Наушники Samsung Galaxy Buds 2 зеленый', 
    description: 'Усовершенствованная двухполосная акустика, активное шумоподавление и продуманный дизайн наушников для наслаждения от прослушивания любимой музыки и их комфортного использования в течение всего дня.', 
    price: 85989, rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hb0/64157509746718.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h1b/hb0/64157509746718.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h1b/h98/64157511843870.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h2d/hb6/64157514629150.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-2-zelenyi-102046357/?c=750000000', likes: 0, categoryId: 3
  },
  {
    id: 34, name: 'Наушники JBL Tune 510BT черный', 
    description: 'Наушники JBL Tune 510BT позволяют наслаждаться мощными басами благодаря технологии JBL Pure Bass без проводов.', 
    price: 11398, rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he5/he2/64030238048286.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=750000000', likes: 0, categoryId: 3
  },

  // Бытовая техника (Category 4)
  {
    id: 5, name: 'Dyson Airwrap HS05 Long с дорожным чехлом и расческами стайлер розовый, золотой', 
    description: 'Самая полная комплектация, включающая помимо стайлера и 6 насадок, бархатную сумку с магнитным замком и набор из массажной расчёски с гребешком.', 
    price: 286827, rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h6e/86037605646366.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h92/h6e/86037605646366.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pd9/p57/2476716.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pf6/p57/2476717.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/dyson-airwrap-hs05-long-s-dorozhnym-chehlom-i-rascheskami-stailer-rozovyi-zolotoi-119489111/?c=750000000', likes: 0, categoryId: 4
  },
  {
    id: 41, name: 'Робот-пылесос Xiaomi Robot Vacuum E10 белый', 
    description: 'Чистота без рук.', price: 85000, rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pcc/p17/10788381.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pcc/p17/10788381.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pf1/p13/10788395.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p96/p36/10788400.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-e10-belyi-109460324/?c=750000000', likes: 0, categoryId: 4
  },
  {
    id: 42, name: 'Микроволновая печь Samsung MS20A7013AB/BW черный', 
    description: 'Выберите встраиваемую микроволновую печь, которая идеально впишется в дизайн вашей кухни и удовлетворит ваш вкус.', 
    price: 124990, rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h38/64144353755166.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h38/64144353755166.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h1e/h44/64144357556254.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h72/hcb/64144364568606.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-ms20a7013ab-bw-chernyi-102056620/?c=750000000', likes: 0, categoryId: 4
  },
  {
    id: 43, name: 'Электрочайник Tefal Glass KI840830 черный, прозрачный', 
    description: 'Электрочайник Tefal Glass KI840830 — стильный и функциональный помощник на вашей кухне, который сочетает в себе высокую мощность и удобство использования.', 
    price: 23990, rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p1d/pd5/50785140.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p1d/pd5/50785140.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3a/pd5/50785141.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p56/pd5/50785142.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/elektrochainik-tefal-glass-ki840830-chernyi-prozrachnyi-117202973/?c=750000000', likes: 0, categoryId: 4
  },
  {
    id: 44, name: 'Блендер погружной Braun MQ 535 Sauce белый', 
    description: 'Блендер Braun MQ535 Sauce серо-белого цвета – мультиповар на вашей кухне. Он умеет измельчать грецкие орехи, делать рубленый фарш, овощные и фруктовые пюре для детского питания, соусы, майонезы, коктейли.', 
    price: 39990, rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h77/h30/63765476147230.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h77/h30/63765476147230.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hbb/h6f/63765477097502.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h59/ha1/63765477851166.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/blender-pogruzhnoi-braun-mq-535-sauce-belyi-3100034/?c=750000000', likes: 0, categoryId: 4
  }
];