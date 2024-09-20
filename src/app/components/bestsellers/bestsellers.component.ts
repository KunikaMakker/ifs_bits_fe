import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss'],
})
export class BestsellersComponent implements OnInit {
  constructor() {}

  @Input() heading: string = '';
  @Input() subHeading: string = '';
  @Input() data: any[] = [];
  @Input() cart: any;

  bestsellers: any[] = [];
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    stagePadding: 80,
    margin: 15,
    autoWidth: true,
    startPosition: 0,
    pullDrag: true,
    dots: false,
    navSpeed: 200,
    items: 5,
    lazyLoad: false,
    navText: [
      '<img src="../../../assets/icons/carousel_arrow-l.svg" class="carousel-prev-btn" />',
      '<img src="../../../assets/icons/carousel_arrow-r.svg" class="carousel-next-btn" />',
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };

  // cartItems: any = {};

  ngOnInit(): void {
    this.bestsellers = this.data;
  }

  addToCartHandler(event: any, id: string) {
    if (Object.keys(this.cart.items).length == 0) {
      this.cart.items[id] = 1;
      let element = document.getElementById(id);
      element?.classList.remove('add-to-cart');
      element?.classList.add('add-to-cart-extended');
    } else {
      if (Object.keys(this.cart.items).includes(id)) {
        if (this.cart.items[id] === 0) {
          let element = document.getElementById(id);
          element?.classList.remove('add-to-cart');
          element?.classList.add('add-to-cart-extended');
        }
        this.cart.items[id] = this.cart.items[id] + 1;
      } else {
        this.cart.items[id] = 1;
        let element = document.getElementById(id);
        element?.classList.remove('add-to-cart');
        element?.classList.add('add-to-cart-extended');
      }
    }

    let selectedItem = this.data.find((itm) => itm.id == id);
    if (selectedItem) {
      this.cart.checkoutData.amount =
        Number(this.cart.checkoutData.amount) +
        (selectedItem.discountedPrice
          ? Number(selectedItem.discountedPrice)
          : Number(selectedItem.actualPrice));
      this.cart.checkoutData.quantity++;
    }
  }

  removeFromCartHandler(event: any, id: string) {
    this.cart.items[id] = this.cart.items[id] - 1;

    if (this.cart.items[id] === 0) {
      let element = document.getElementById(id);
      element?.classList.remove('add-to-cart-extended');
      element?.classList.add('add-to-cart');
    }

    let selectedItem = this.data.find((itm) => itm.id == id);
    if (selectedItem) {
      this.cart.checkoutData.amount =
        Number(this.cart.checkoutData.amount) -
        (selectedItem.discountedPrice
          ? Number(selectedItem.discountedPrice)
          : Number(selectedItem.actualPrice));
      this.cart.checkoutData.quantity--;
    }
  }
}
