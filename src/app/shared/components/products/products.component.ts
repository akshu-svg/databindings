import { Component, OnInit } from "@angular/core";




@Component({
    selector : "app-products",
    templateUrl : "./products.component.html",
    styleUrls : ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
    isDisabled : boolean = true;
    productAddStatus : string = `No Product is Added yet !`
    constructor(){
        console.log(`Product Constructor is called !!!`);
    }
    ngOnInit(): void {
        setTimeout(() => {
            // FORM IS VALID
            this.isDisabled = false;
        },4000)
    }

    getProductStatus(){
        console.log(`Product is added !!!`);
        this.productAddStatus = `The Product is added !!!`
        
    }
}