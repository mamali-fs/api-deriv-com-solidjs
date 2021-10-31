import { screen, render } from 'solid-testing-library';
import { CodeBlock } from '../CodeBlock';

describe("<CodeBlock />", () => {
    it('Renders properly', () => {
        render(() => <CodeBlock>console.log</CodeBlock>)

        const component = screen.queryByText('console.log');

        expect(component).toBeInTheDocument()
    })
})