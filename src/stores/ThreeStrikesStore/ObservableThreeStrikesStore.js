import {
  observable, computed, runInAction, action
} from 'mobx';
import threeStrikesService from '../../services/ThreeStrikesService';
import ThreeStrikesItem from './models/ThreeStrikesItem';

export const STRIKE = 'X';

class ObservableThreeStrikesStore {
  @observable correctGuesses = [];

  @observable itemList = [];

  @observable selectedItem = null;

  @observable puckBasket = [];

  @observable currentPuck = null;

  priceDigits = [];

  @computed get isStruckOut() {
    return this.puckBasket.indexOf(STRIKE) === -1;
  }

  @computed get strikesPulledCount() {
    return (3 - this.puckBasket.filter(puck => puck === STRIKE).length);
  }

  @action popCurrentPuck = () => this.puckBasket.splice(this.puckBasket.indexOf(this.currentPuck), 1);

  @action pullPuckFromPuckBasket = () => { this.currentPuck = this.puckBasket[Math.floor(Math.random() * this.puckBasket.length)]; }

  @action takeGuess = index => {
    if (index >= 0 && index < this.priceDigits.length && this.priceDigits[index] === this.currentPuck) {
      this.popCurrentPuck();
      this.correctGuesses[index] = this.currentPuck;
    }
    this.currentPuck = null;
  }

  @action setItem = item => {
    this.selectedItem = item;
    this.priceDigits = item.price.toString().split('');
    this.puckBasket = [STRIKE, STRIKE, STRIKE, ...this.priceDigits];
    this.correctGuesses = [...Array(this.priceDigits.length)].map(() => null);
  }

  getItemsAsync = async itemName => {
    if (this.itemList.length > 0) return;

    try {
      const params = {
        item: itemName
      };
      const urlParams = new URLSearchParams(Object.entries(params));
      const data = await threeStrikesService.get(itemName ? urlParams : '');
      runInAction(() => {
        // make a new tab for run in action and do thread.sleeps to show its transactions
        data.map(item => this.itemList.push(new ThreeStrikesItem(item)));
      });
    } catch (error) {
      console.log('error = ', error);
      runInAction(() => {
        // do something with error
        // this.setItem(this.initialState.item);
      });
    }
  }
}

const observableThreeStrikesStore = new ObservableThreeStrikesStore();
export default observableThreeStrikesStore;
