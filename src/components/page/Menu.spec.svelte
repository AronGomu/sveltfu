import { render } from '@testing-library/svelte';
import Button from '../src/Button.svelte';

test('should render', () => {
	const results = render(Button, { props: { label: 'a button' } });

	expect(() => results.getByLabelText('a button')).not.toThrow();
});