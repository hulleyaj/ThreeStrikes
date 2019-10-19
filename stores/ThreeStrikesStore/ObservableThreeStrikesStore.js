import {
  observable, computed, runInAction, action
} from 'mobx';
import threeStrikesService from '../../services/ThreeStrikesService';
import ThreeStrikesItem from './models/ThreeStrikesItem';

export const STRIKE = -100;
export const EMPTY = -1;

class ObservableThreeStrikesStore {
  @observable correctGuesses = [];

  @observable pulledPuck = EMPTY;

  @observable itemList = [];

  @observable selectedItem = null;

  @observable bucket = [];

  priceDigits = [];

  @computed get isStruckOut() {
    return this.bucket.indexOf(STRIKE) === -1;
  }

  @computed get strikesPulledCount() {
    return (3 - this.bucket.filter(puck => puck === STRIKE).length);
  }

  @action popPulledPuck = () => this.bucket.splice(this.bucket.indexOf(this.pulledPuck), 1);

  @action pullPuckFromBucket = () => { this.pulledPuck = this.bucket[Math.floor(Math.random() * this.bucket.length)]; }

  @action takeGuess = index => {
    if (index >= 0 && index < this.priceDigits.length && this.priceDigits[index] === this.pulledPuck) {
      this.popPulledPuck();
      this.correctGuesses[index] = this.pulledPuck;
    }
    this.pulledPuck = EMPTY;
  }

  @action setItem = item => {
    this.selectedItem = item;
    this.priceDigits = (item.price.toString()).split('').map(digit => +digit);
    this.bucket = [STRIKE, STRIKE, STRIKE, ...this.priceDigits];
    this.correctGuesses = [...Array(this.priceDigits.length)].map(() => EMPTY);
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
