import observableThreeStrikesStore, { STRIKE, EMPTY } from '../../../stores/ThreeStrikesStore/ObservableThreeStrikesStore';

beforeEach(() => {
  observableThreeStrikesStore.reset();
});

it('should have a puckBasket', () => {
  expect(observableThreeStrikesStore.puckBasket.length).toEqual(9);
});

it('should remove number puck from puckBasket', () => {
  observableThreeStrikesStore.popPuck(6);
  expect(observableThreeStrikesStore.puckBasket).toEqual(
    [1, 2, 5, 7, 8, STRIKE, STRIKE, STRIKE]
  );
});

it('should remove strike puck from puckBasket', () => {
  observableThreeStrikesStore.popPuck(STRIKE);
  expect(observableThreeStrikesStore.puckBasket).toEqual(
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

it('should get puck from puckBasket', () => {
  observableThreeStrikesStore.pullPuckFromPuckBasket();
  expect(observableThreeStrikesStore.puckBasket.indexOf(observableThreeStrikesStore.currentPuck)).not.toEqual(-1);
});

it('should remove puck from puckBasket on correct guess', () => {
  observableThreeStrikesStore.currentPuck = 2;
  observableThreeStrikesStore.takeGuess(0);
  expect(observableThreeStrikesStore.puckBasket.indexOf(2)).toEqual(-1);
  expect(observableThreeStrikesStore.currentPuck).toEqual(EMPTY);
});

it('should put back puck in puckBasket on incorrect guess', () => {
  observableThreeStrikesStore.currentPuck = 2;
  observableThreeStrikesStore.takeGuess(1);
  expect(observableThreeStrikesStore.puckBasket.indexOf(2)).not.toEqual(-1);
  expect(observableThreeStrikesStore.currentPuck).toEqual(EMPTY);
});

it('should initialize correctGuesses to the length of the price', () => {
  expect(observableThreeStrikesStore.correctGuesses).toEqual([EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]);
});

it('should add to correct guesses if made correct guess', () => {
  observableThreeStrikesStore.currentPuck = 8;
  observableThreeStrikesStore.takeGuess(1);
  expect(observableThreeStrikesStore.correctGuesses).toEqual([EMPTY, 8, EMPTY, EMPTY, EMPTY, EMPTY]);
});

it('should not add to correct guesses if made incorrect guess', () => {
  observableThreeStrikesStore.currentPuck = 8;
  observableThreeStrikesStore.takeGuess(5);
  expect(observableThreeStrikesStore.correctGuesses).toEqual([EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]);
});

it('should not break on take guess with invalid index', () => {
  observableThreeStrikesStore.currentPuck = 8;
  observableThreeStrikesStore.takeGuess(-1);
  expect(observableThreeStrikesStore.correctGuesses).toEqual([EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]);

  observableThreeStrikesStore.currentPuck = 8;
  observableThreeStrikesStore.takeGuess(7);
  expect(observableThreeStrikesStore.correctGuesses).toEqual([EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]);
});
