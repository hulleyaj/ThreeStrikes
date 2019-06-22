class Models {
    initialState;

    reset() {
        Object.keys(this.initialState).map( key => {
            this[key] = this.initialState[key];
        });
    }
}

export default Models;