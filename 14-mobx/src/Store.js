import { observable, action, computed } from "mobx";

class Store {
  @observable productList = [{ name: "Bread", price: 5 }, { name: "Milk", price: 10 }];

  @action addProduct(name, price) {
    this.productList.push({ name, price });
  }
  @computed get totalPrice() {
    return this.productList.reduce((n,p)=>{
        return n+p.price
    },0)
  }
}


const appStore = new Store();

// window.appStore = appStore;
export default appStore;