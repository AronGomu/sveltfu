
import Game from './Game.svelte';
import {findAllByText, findByText, render, screen} from '@testing-library/svelte';
import '@testing-library/jest-dom';

// Game Component

beforeEach(() => {
  render(Game);
});

it('exist', () => {
	expect(Game).toBeTruthy();
})