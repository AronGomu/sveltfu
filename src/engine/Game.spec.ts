import { Game } from './Game';
import '@testing-library/jest-dom';

var g;

beforeEach(() => {
  g = new Game();
});

it('exists', () => {
	expect(g).toBeTruthy();
})


// ADD CARDS TO DECK FUNCTION

it('adds an existing card to an empty deck', () => {
  expect(g.addToDeck('test-001', 1)).toBeTruthy();
  expect(g.deck.length).toBe(1);
  expect(g.deck[0].id).toBe('test-001');
});

it('fails to add a non existing card to the deck', () => {
  expect(g.addToDeck('test-non-existing')).toBeFalsy();
  expect(g.deck.length).toBe(0);
});

it('adds several cards to an empty deck', () => {
  g.addToDeck('test-001', 5);
  expect(g.deck.length).toBe(5);
});


// DRAW CARD FUNCTION

it('draws a card from a deck of 1 card (add it to the hand and return it)', () => {
  g.addToDeck('test-001', 1);
  let cardDrawn = g.draw(1);
  expect(g.hand[0].id).toBe('test-001');
  expect(g.hand[0]).toBe(cardDrawn[0]);
});

it('draws 2 different cards from a deck of 2 card', () => {
  g.addToDeck('test-001', 1);
  g.addToDeck('test-002', 1);
  let cardDrawn = g.draw(2);
  expect(g.hand.length).toBe(2);
  expect(cardDrawn[0].id).toBe('test-002');
  expect(cardDrawn[1].id).toBe('test-001');
});

it('draws 1 cards from a deck of 0 card', () => {
  let cardDrawn = g.draw(1);
  expect(g.hand.length).toBe(0);
  expect(cardDrawn.length).toBe(0);
});

it('draws 3 cards from a deck of 0 card', () => {
  g.addToDeck('test-001', 1);
  let cardDrawn = g.draw(3);
  expect(g.hand.length).toBe(0);
  expect(cardDrawn.length).toBe(0);
});


// PLAY CARD FUNCTION

it('plays the 1 card from the a hand of 1 card', () => {
  g.addToDeck('test-001', 1);
  g.draw(1);
  g.playCardFromHand(0);
  expect(g.hand.length).toBe(0);
  expect(g.stack.length).toBe(1);
  expect(g.stack[0].id).toBe('test-001');
});

it('plays the 1 card from the a hand of 2 card', () => {
  g.addToDeck('test-001', 1);
  g.addToDeck('test-002', 1);
  g.draw(2);
  g.playCardFromHand(1);
  expect(g.hand.length).toBe(1);
  expect(g.stack.length).toBe(1);
  expect(g.stack[0].id).toBe('test-001');
});

it('plays the 1 card from a hand of 0 card', () => {
  g.playCardFromHand(0);
  expect(g.hand.length).toBe(0);
  expect(g.stack.length).toBe(0);
});


it('simulates an entire simple game', () => {
  g.deck = g.addToDeck('test-001', 1);
});