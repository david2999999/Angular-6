export class Product {
  constructor(public id?: number,
              public name?: string,
              public category?: string,
              public price?: number) { }
}

// The Product class defines properties for a product identifier, the name of the product, its category, and
// the price. The properties are defined as optional constructor arguments, which is a useful approach if you
// are creating objects using an HTML form,
