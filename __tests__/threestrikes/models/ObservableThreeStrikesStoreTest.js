import observableThreeStrikesStore, { STRIKE, EMPTY } from '../../../stores/ThreeStrikesStore/ObservableThreeStrikesStore';

beforeEach(() => {
    observableThreeStrikesStore.reset();
});

it('should have a bucket', () => {
    expect(observableThreeStrikesStore.bucket.length).toEqual(9);
}); 

it('should remove number puck from bucket', () => {
    observableThreeStrikesStore.popPuck(6);
    expect(observableThreeStrikesStore.bucket).toEqual(
        [1, 2, 5, 7, 8, STRIKE, STRIKE, STRIKE]
    );
});

it('should remove strike puck from bucket', () => {
    observableThreeStrikesStore.popPuck(STRIKE);
    expect(observableThreeStrikesStore.bucket).toEqual(
        [1, 2, 5, 6, 7, 8, STRIKE, STRIKE]
    );
});

it('should calculate isStruckOut', () => {
    observableThreeStrikesStore.popPuck(STRIKE);
    expect(observableThreeStrikesStore.isStruckOut).toEqual(false);
    observableThreeStrikesStore.popPuck(STRIKE);
    expect(observableThreeStrikesStore.isStruckOut).toEqual(false);
    observableThreeStrikesStore.popPuck(STRIKE);
    expect(observableThreeStrikesStore.isStruckOut).toEqual(true);
});

it('should get puck from bucket', () => {
    observableThreeStrikesStore.pullPuckFromBucket();
    expect(observableThreeStrikesStore.bucket.indexOf(observableThreeStrikesStore.pulledPuck)).not.toEqual(-1);
});

it('should remove puck from bucket on correct guess', () => {
    observableThreeStrikesStore.pulledPuck = 2;
    observableThreeStrikesStore.takeGuess(0)
    expect(observableThreeStrikesStore.bucket.indexOf(2)).toEqual(-1);
    expect(observableThreeStrikesStore.pulledPuck).toEqual(EMPTY)
});

it('should put back puck in bucket on incorrect guess', () => {
    observableThreeStrikesStore.pulledPuck = 2;
    observableThreeStrikesStore.takeGuess(1)
    expect(observableThreeStrikesStore.bucket.indexOf(2)).not.toEqual(-1);
    expect(observableThreeStrikesStore.pulledPuck).toEqual(EMPTY)
});

it('should initialize correctGuesses to the length of the price', () => {
    expect(observableThreeStrikesStore.correctGuesses).toEqual([EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]);
});

it('should add to correct guesses if made correct guess', () => {
    observableThreeStrikesStore.pulledPuck = 8;
    observableThreeStrikesStore.takeGuess(1)
    expect(observableThreeStrikesStore.correctGuesses).toEqual([EMPTY, 8, EMPTY, EMPTY, EMPTY, EMPTY]);
});

it('should not add to correct guesses if made incorrect guess', () => {
    observableThreeStrikesStore.pulledPuck = 8;
    observableThreeStrikesStore.takeGuess(5)
    expect(observableThreeStrikesStore.correctGuesses).toEqual([EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]);
});

it('should not break on take guess with invalid index', () => {
    observableThreeStrikesStore.pulledPuck = 8;
    observableThreeStrikesStore.takeGuess(-1)
    expect(observableThreeStrikesStore.correctGuesses).toEqual([EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]);

    observableThreeStrikesStore.pulledPuck = 8;
    observableThreeStrikesStore.takeGuess(7)
    expect(observableThreeStrikesStore.correctGuesses).toEqual([EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]);
});
