import { observable, computed } from "mobx";
import Models from '../../helpers/models/Models';

const price = [2, 8, 5, 7, 1, 6];
export const strike = -1;

class ObservableThreeStrikesStore extends Models {
    initialState = {
        bucket: [1, 2, 5, 6, 7, 8, strike, strike, strike],
        correctGuesses: price.map(() => -1)
        //I NEED A CURRENT PUCK PIECE OF STATE, TAKE GUESS WRONG CLEARS THIS VALUE, RENDER BUCKET OFF OF THIS
    };

    @observable bucket;
    @observable correctGuesses;

    constructor(){
        super();
        this.reset();
    }

    @computed get isStruckOut() {
        return this.bucket.indexOf(strike) === -1;
    }

    popPuck = puck => this.bucket.splice(this.bucket.indexOf(puck), 1);

    getPuckFromBucket = () => this.bucket[Math.floor(Math.random() * this.bucket.length)];

    takeGuess(puck, index) {
        if(index >= 0 && index < price.length && price[index] === puck) {
            this.popPuck(2);
            this.correctGuesses[index] = puck;
        }
    }
}

const observableThreeStrikesStore = new ObservableThreeStrikesStore();
export default observableThreeStrikesStore;
