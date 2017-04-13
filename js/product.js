﻿//----------------------------------------------------------------
// product class
function product(sku, producttypeid, productname, description, price, stock, cal, carot, vitc, folate, potassium, fiber) {
    this.sku = sku; // product code (SKU = stock keeping unit)
	this.producttypeid = producttypeid;
    this.productname = productname;
    this.description = description;
    this.price = price;
	this.stock = stock;
    this.cal = cal;
    this.nutrients = {
        "Carotenoid": carot,
        "Vitamin C": vitc,
        "Folates": folate,
        "Potassium": potassium,
        "Fiber": fiber
    };
}
