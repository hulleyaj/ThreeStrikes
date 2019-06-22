import observableThreeStrikesStore, { strike } from '../../../threestrikes/models/ObservableThreeStrikesStore';

beforeEach(() => {
    observableThreeStrikesStore.reset();
});

it('should have a bucket', () => {
    expect(observableThreeStrikesStore.bucket.length).toEqual(9);
}); 

it('should remove number puck from bucket', () => {
    observableThreeStrikesStore.popPuck(6);
    expect(observableThreeStrikesStore.bucket).toEqual(
        [1, 2, 5, 7, 8, strike, strike, strike]
    );
});

it('should remove strike puck from bucket', () => {
    observableThreeStrikesStore.popPuck(strike);
    expect(observableThreeStrikesStore.bucket).toEqual(
        [1, 2, 5, 6, 7, 8, strike, strike]
    );
});

it('should calculate isStruckOut', () => {
    observableThreeStrikesStore.popPuck(strike);
    expect(observableThreeStrikesStore.isStruckOut).toEqual(false);
    observableThreeStrikesStore.popPuck(strike);
    expect(observableThreeStrikesStore.isStruckOut).toEqual(false);
    observableThreeStrikesStore.popPuck(strike);
    expect(observableThreeStrikesStore.isStruckOut).toEqual(true);
});

it('should get puck from bucket', () => {
    const puck = observableThreeStrikesStore.getPuckFromBucket();
    expect(observableThreeStrikesStore.bucket.indexOf(puck) !== -1).toEqual(true);
});

it('should remove puck from bucket on correct guess', () => {
    const puck = 2;
    observableThreeStrikesStore.takeGuess(puck, 0)
    expect(observableThreeStrikesStore.bucket.indexOf(puck) === -1).toEqual(true);
});

it('should put back puck in bucket on incorrect guess', () => {
    const puck = 2;
    observableThreeStrikesStore.takeGuess(puck, 1)
    expect(observableThreeStrikesStore.bucket.indexOf(puck) === -1).toEqual(false);
});

it('should initialize correctGuesses to the lenth of the price', () => {
    expect(observableThreeStrikesStore.correctGuesses).toEqual([-1, -1, -1, -1, -1, -1]);
});

it('should add to correct guesses if made correct guess', () => {
    const puck = 8;
    observableThreeStrikesStore.takeGuess(puck, 1)
    expect(observableThreeStrikesStore.correctGuesses).toEqual([-1, 8, -1, -1, -1, -1]);
});

it('should not add to correct guesses if made incorrect guess', () => {
    const puck = 8;
    observableThreeStrikesStore.takeGuess(puck, 5)
    expect(observableThreeStrikesStore.correctGuesses).toEqual([-1, -1, -1, -1, -1, -1]);
});

it('should not break on take guess with invalid index', () => {
    const puck = 8;
    observableThreeStrikesStore.takeGuess(puck, -1)
    expect(observableThreeStrikesStore.correctGuesses).toEqual([-1, -1, -1, -1, -1, -1]);
    observableThreeStrikesStore.takeGuess(puck, 7)
    expect(observableThreeStrikesStore.correctGuesses).toEqual([-1, -1, -1, -1, -1, -1]);
});
