import { Docs } from '../Docs';
import { screen, render } from 'solid-testing-library';

describe('Docs Page: "/"', () => {
  it('Renders successfully', async () => {
    render(() => <Docs />);
    const component = await screen.findByTestId('documentation-page');
    expect(component).toBeInTheDocument();
  });
});
