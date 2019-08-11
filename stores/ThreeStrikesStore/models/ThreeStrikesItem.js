class ThreeStrikesItem {
  id = 0;

  item = ''

  price = 0;

  constructor(item) {
    this.id = item.id;
    this.item = item.item;
    this.price = item.price;
  }
}

export default ThreeStrikesItem;
