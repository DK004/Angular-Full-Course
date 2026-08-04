import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  id !:string;
  constructor(private route: ActivatedRoute){
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id") || "";
    })
  }

}
