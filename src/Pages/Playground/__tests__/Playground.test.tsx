import { screen, render } from 'solid-testing-library';
import { Playground } from '../Playground';

describe('Playground page', () => {
    it('Should be in the document', async () => {
        render(() => <Playground />)
        const rendered = await screen.findByTestId('playground-page')
        expect(rendered).toBeInTheDocument();
    });
})