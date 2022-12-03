interface IPorduct {
  name: string;
}

class ProductA implements IPorduct {
  name = "";
}

class ProductA1 extends ProductA {
  constructor() {
    super();
    this.name = "Je suis le produit A1";
  }
}
class ProduitA22 extends ProductA {
  constructor() {
    super();
    this.name = "je suis le produit A2";
  }
}

class ProduitA3 extends ProductA {
  constructor() {
    super();
    this.name = "je suis le produit A3";
  }
}

class ProduitFactory {
  static createObject(someProperty: string) {
    if (someProperty === "a") {
      return new ProductA1();
    } else if (someProperty === "b") {
      return new ProduitA2();
    } else if (someProperty === "c") {
      return new ProduitA3();
    }
  }
}

//The client
const Product = ProduitFactory.createObject("b");
console.log(Product?.name);
