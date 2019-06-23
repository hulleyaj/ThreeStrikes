import { observable, computed } from "mobx";
import Models from '../../helpers/models/Models';

const price = [2, 8, 5, 7, 1, 6];
export const STRIKE = -100;
export const EMPTY = -1;

class ObservableThreeStrikesStore extends Models {
    initialState = {
        bucket: [1, 2, 5, 6, 7, 8, STRIKE, STRIKE, STRIKE],
        correctGuesses: price.map(() => EMPTY),
        pulledPuck: EMPTY
    };

    @observable bucket = null;
    @observable correctGuesses = null;
    @observable pulledPuck = null;

    constructor(){
        super();
        this.reset();
    }

    @computed get isStruckOut() {
        return this.bucket.indexOf(STRIKE) === -1;
    }

    popPuck = puck => this.bucket.splice(this.bucket.indexOf(puck), 1);

    pullPuckFromBucket = () => this.pulledPuck = this.bucket[Math.floor(Math.random() * this.bucket.length)];

    takeGuess(index) {
        if(index >= 0 && index < price.length && price[index] === this.pulledPuck) {
            this.popPuck(this.pulledPuck);
            this.correctGuesses[index] = this.pulledPuck;
        }
        this.pulledPuck = EMPTY;
    }
}

const observableThreeStrikesStore = new ObservableThreeStrikesStore();
export default observableThreeStrikesStore;
