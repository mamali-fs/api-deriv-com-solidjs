import { render, screen } from 'solid-testing-library';
import { Notfound } from '../Notfound';

describe('Notfound page: [404]', () => {
    it('Should be in the document', async () => {
        render(() => <Notfound />)

        const component = await screen.findByTestId('notfound-page');

        expect(component).toBeInTheDocument();
    })
})