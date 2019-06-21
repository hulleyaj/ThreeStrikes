import { observable } from "mobx";

class ObservableCounterStore {
    @observable count = 0;

    constructor(count = 0) {
        this.count = count
    }

    addCount() {
        this.count++;
    }

    subtractCount() {
        this.count--;
    }
}

const observableCounterStore = new ObservableCounterStore()
export default observableCounterStore