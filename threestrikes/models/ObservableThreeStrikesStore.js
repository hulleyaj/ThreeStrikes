import { observable, computed } from "mobx";
import Models from '../../helpers/models/Models';
import ThreeStrikesService from '../services/ThreeStrikesService';

const price = [2, 8, 5, 7, 1, 6];
export const STRIKE = -100;
export const EMPTY = -1;

class ThreeStrikesItem {
    @observable Id;
    @observable Item;
    @observable Price;

    constructor(item) {
        this.Id = item.Id;
        this.Item = item.Item;
        this.Price = item.Price;
    }
}

class ObservableThreeStrikesStore extends Models {
    initialState = {
        bucket: [1, 2, 5, 6, 7, 8, STRIKE, STRIKE, STRIKE],
        correctGuesses: price.map(() => EMPTY),
        pulledPuck: EMPTY
    };

    @observable bucket = null;
    @observable correctGuesses = null;
    @observable pulledPuck = null;

    threeStrikesService;

    constructor(){
        super();
        this.reset();
        this.threeStrikesService = new ThreeStrikesService();
    }

    @computed get isStruckOut() {
        return this.bucket.indexOf(STRIKE) === -1;
    }

    popPuck = puck => this.bucket.splice(this.bucket.indexOf(puck), 1);

    pullPuckFromBucket = () => this.pulledPuck = this.bucket[Math.floor(Math.random() * this.bucket.length)];

    takeGuess = index => {
        if(index >= 0 && index < price.length && price[index] === this.pulledPuck) {
            this.popPuck(this.pulledPuck);
            this.correctGuesses[index] = this.pulledPuck;
        }
        this.pulledPuck = EMPTY;
    }

    getItemsAsync = async item => {
        try {
            var params = {
                item
            };
            const urlParams = new URLSearchParams(Object.entries(params));
            const data = await this.threeStrikesService.get(item ? urlParams : '');
            // runInAction(() => {
            //     this.countryData = data;
            // });
            console.log('woahhh data = ', data);
        } catch (error) {
            console.log('error = ', error);
            // runInAction(() => {
            //     this.status = "error";
            // });
        }
    }
}

const observableThreeStrikesStore = new ObservableThreeStrikesStore();
export default observableThreeStrikesStore;
