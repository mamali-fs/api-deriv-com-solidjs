import { Home } from "../Home";
import { screen, render } from 'solid-testing-library';


describe('Home Page: "/"', () => {
    it("Renders successfully", async () => {
        render(() => <Home />);
        const component = await screen.findByTestId('home-page');
        expect(component).toBeInTheDocument()
    })
})
