
import Menu from './Menu.svelte';
import {findAllByText, findByText, render, screen} from '@testing-library/svelte';
import '@testing-library/jest-dom';

it('exist', () => {
	render(Menu);
	expect(Menu).toBeTruthy();
})

it('has all menu button', () => {
	render(Menu);
	const newGameButton = screen.getByText('New Game');
	expect(newGameButton).toBeInTheDocument();

	const continueButton = screen.getByText('Continue');
	expect(continueButton).toBeInTheDocument();

	const optionsButton = screen.getByText('Options');
	expect(optionsButton).toBeInTheDocument();
})