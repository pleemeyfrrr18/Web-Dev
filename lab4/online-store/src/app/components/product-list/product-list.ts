import { Component, signal, computed} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 16 256GB',
      description: 'Latest Apple smartphone with A16 chip. Excellent camera and battery life.',
      price: 780000,
      rating: 4.8,
      image: 'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp',
      images: [
        'https://technolove.ru/upload/iblock/f1e/pabnf4xdzps3s5bfqcucj6p74yl63fv6.jpg',
        'https://alo.md/media/media/apple-iphone-17-pro-max-cosmic-orange-frontback-xczwtqm.webp',
        'https://static.shop.kz/upload/resize_cache/iblock/406/laiynv539owfaamgmtzokapo3s1qaiky/450_450_1/192074d1.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },

    {
      id: 2,
      name: 'Apple iPad A16 11',
      description: 'The 2025 11-inch iPad (A16) is a, versatile and powerful entry-level tablet.',
      price: 210000,
      rating: 4.2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWU8n1doooRKLOaTqrVqpqUOY8nuSBZtf-g&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWU8n1doooRKLOaTqrVqpqUOY8nuSBZtf-g&s',
        'https://static.tildacdn.pro/tild3263-6561-4535-b866-383638383930/ipad-11_overview__xf.png',
        'https://prod-cdn.prod.asbis.io/s3size/el:t/rt:fill/w:512/plain/s3://cms/product/f4/fa/f4fa1ec28bab27222c3661f341e1c359/250423160041192789.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-256-gb-sinii-138199565/?c=750000000'
    },

    {
      id: 3,
      name: 'Apple MacBook Air 13 2025',
      description: 'Latest Apple smartphone with A16 chip. Excellent camera and battery life.',
      price: 450000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
        'data:image/jpeg;base64,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',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvuz5PPG818jac8AIgr3GXyetp8zsXQaYnA&s'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000'
    },

    {
      id: 4,
      name: ' ASUS TUF Gaming F16',
      description: 'ASUS TUF Gaming F16 is a 16-inch military-grade durable gaming laptop featuring up to a 14th Gen Intel Core i7/i9 processor',
      price: 479000,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/p57/52352626.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa8/p57/52352626.jpg?format=gallery-medium',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjZmjjHHeDZHDmNEH35O2IheXD3_eeZYNhw&s',
        'https://dlcdnwebimgs.asus.com/files/media/1635a8a8-fdd1-4db9-a4b0-75f86c9c5873/v1/img/durability/tuf-f16.png'
      ],
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f16-16-16-gb-ssd-512-gb-bez-os-fx607vj-rl049-90nr0mz6-m002p0-142322855/?c=750000000'
    },

    {
      id: 5,
      name: 'Apple Watch SE 2024',
      description: 'The Apple Watch SE is a budget-friendly smartwatch featuring a 40mm or 44mm aluminum case.',
      price: 120000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'
    },

    {
      id: 6,
      name: 'Наушники Air pro 2',
      description: 'The Apple AirPods Pro 2 are premium, wireless in-ear headphones featuring the H2 chip for enhanced audio.',
      price: 2149,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he4/h13/85730021834782.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/ha2/85730021900318.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=750000000'
    },

    {
      id: 7,
      name: 'Наушники Apple USB-C',
      description: 'Apple’s USB-C is a universal, reversible connector standard used for charging, high-speed data transfer.',
      price: 2149,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pc8/41468726.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa1/pc8/41468726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf5/pc8/41468729.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/pcb/41468731.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-usb-c-myqy3zm-a-belyi-139440255/?c=750000000'
    },

    {
      id: 8,
      name: 'Kotex прокладки Ultra Night Duo 14 шт',
      description: 'Ультратонкие ночные гигиенические прокладки для обильных выделений, обеспечивающие защиту до 100%.',
      price: 1521,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p78/pf0/25958573.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p78/pf0/25958573.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p94/pf0/25958574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb0/pf0/25958575.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kotex-prokladki-ultra-night-duo-14-sht-100931591/?c=750000000'
    },

    {
      id: 9,
      name: 'Худи принтованный черный',
      description: 'Худи принтованный — стильный и комфортный выбор для активных мужчин, которые ценят удобство и современный дизайн.',
      price: 2500,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf0/p76/94324693.bin?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf0/p76/94324693.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p05/pc2/94324703.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6a/pe0/83070888.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hudi-printovannyi-86611022-chernyi-xl-113774155/?c=750000000&hasVariants=true'
    },

    {
      id: 10,
      name: 'Комплект нижнего белья черный',
      description: 'Комплект нижнего белья — это идеальный выбор для создания соблазительного образа и подчеркивания женственности.',
      price: 2198,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/h5a/85159077871646.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h31/h5a/85159077871646.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/h38/85159077937182.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/komplekt-nizhnego-bel-ja-157787135-chernyi-m-116598550/?c=750000000'
    },

  ];
}
