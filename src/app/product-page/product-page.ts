import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {


  category : string | null =null;
  sort : string | null = null;

  constructor(private route : ActivatedRoute){
      this.route.queryParamMap.subscribe((params) => {
        this.category = params.get("category");
        this.sort = params.get("sort");
      })
  }

}
