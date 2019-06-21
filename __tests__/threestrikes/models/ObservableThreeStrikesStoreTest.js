import observableThreeStrikesStore, { strike } from '../../../threestrikes/models/ObservableThreeStrikesStore';

let store;
beforeEach(() => {
    //ALLEN I NEED A CONSTRUCTOR MOST LIKELY TO RESET THE STATE
    store = observableThreeStrikesStore;
});

it('should have a bucket', () => {
    expect(store.bucket.length).toEqual(9);
}); 

it('should remove number puck from bucket', () => {
    store.popPuck(6);
    expect(store.bucket).toEqual(
        [1, 2, 5, 7, 8, strike, strike, strike]
    );
});

it('should remove strike puck from bucket', () => {
    store.popPuck(strike);
    expect(store.bucket).toEqual(
        [1, 2, 5, 6, 7, 8, strike, strike]
    );
});

it('should not be struck out', () => {
    expect(store.isStruckOut).toEqual(false);
});

it('should be struck out', () => {

});
