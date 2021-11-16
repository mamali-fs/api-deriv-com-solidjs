import { Home } from "../Home";
import { screen, render } from 'solid-testing-library';


describe('Home Page: "/"', () => {
    it("Renders successfully", async () => {
        render(() => <Home />);
        // screen find by text
        const component = await screen.findByText("Deriv API");
        expect(component).toBeInTheDocument()
    })
})
