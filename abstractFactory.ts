abstract class ProduitB {
  getMethodeB(): string {
    return "je suis B";
  }
}

abstract class ProduitA {
  getMethodeA(): string {
    return "je suis A";
  }
}
class ProduitA1 extends ProduitA {
  getMethodeA(): string {
    return "je suis le produit A1 de la Factory A";
  }
}

class ProduitA2 extends ProduitA {
  getMethodeA(): string {
    return "je suis le produit A2 de la Factory A";
  }
}

class ProduitB1 extends ProduitB {
  getMethodeB(): string {
    return "je suis le produit B1 de la Factory B";
  }
}
class ProduitB2 extends ProduitB {
  getMethodeB(): string {
    return "je suis le produit B2 de la Factory B";
  }
}

interface IproduitFactory {
  getProduitA(): ProduitA;
  getProduitB(): ProduitB;
}

class ProduitFactory1 implements IproduitFactory {
  getProduitA(): ProduitA {
    return new ProduitA1();
  }
  getProduitB(): ProduitB {
    return new ProduitB1();
  }
}

class ProduitFactory2 implements IproduitFactory {
  getProduitA(): ProduitA {
    return new ProduitA2();
  }
  getProduitB(): ProduitB {
    return new ProduitB2();
  }
}

console.log("Je suis le baeu de la Mare Rouana");
