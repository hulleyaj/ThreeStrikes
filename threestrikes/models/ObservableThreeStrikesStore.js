import { observable, computed } from "mobx";

const price = [2, 8, 5, 7, 1, 6];
export const strike = -1;

class ObservableThreeStrikesStore {
    @observable bucket = [1, 2, 5, 6, 7, 8, strike, strike, strike];

    @computed get isStruckOut() {
        return this.bucket.find(strike) === null;
    }

    popPuck(value) {
        const index = this.bucket.indexOf(value);
        this.bucket.splice(index, 1);
    }


}

const observableThreeStrikesStore = new ObservableThreeStrikesStore();
export default observableThreeStrikesStore;
