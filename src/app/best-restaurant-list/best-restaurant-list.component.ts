import { Component, OnInit } from '@angular/core';
import { restaurant } from '@app/Models/restaurant';

@Component({
  selector: 'app-best-restaurant-list',
  templateUrl: './best-restaurant-list.component.html',
  styleUrls: ['./best-restaurant-list.component.css']
})
export class BestRestaurantListComponent implements OnInit {
  restaurants: restaurant [] = [
    {
      id: 1,
      imageUrl: "https://www.arezzonotizie.it/~media/horizontal-hi/24461843518110/mc-donald-2.jpg",
      name: "McDonald's"
    },
    {
      id: 2,
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg",
      name: "KFC"
    },
    {
      id: 3,
      imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/17/3b/9a/d2/burger-king.jpg",
      name: "Burger King"
    },
    {
      id: 4,
      imageUrl: "https://www.oktalite.com/fileadmin/referenzen/food/carrefour-madrid-spanien/food-carrefour-madrid-obst-lobu-oktalite-10-teaser.jpg",
      name: "Carrefour"
    },
    {
      id: 5,
      imageUrl: "https://retailinstitute.it/wp-content/uploads/2020/07/pizza-hut-e1593685882896.jpg",
      name: "Pizza Hut"
    },
    {
      id: 6,
      imageUrl: "https://www.innaturale.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/05/pizza-pepponi-non-con-peporoni.jpg.webp",
      name: "Papa John's"
    },
    {
      id: 7,
      imageUrl: "https://media.timeout.com/images/105757031/image.jpg",
      name: "Subway"
    },
    {
      id: 8,
      imageUrl: "https://tacobell.es/wp-content/uploads/2017/05/BODEGON_WEB_560X410_3TACOS_30ABRIL.jpg",
      name: "Taco Bell"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
