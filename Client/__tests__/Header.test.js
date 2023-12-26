import { render, screen } from "@testing-library/react";
import Header from '../app/blog/Header';
import '@testing-library/jest-dom';

const mySections = [
    {
        title: "Alongsectionname", 
        url: "x.com"
    },
    {
        title: "B", 
        url: "y.com"
    }
];
const myTitle = "My Blog";

//test block
test("Header renders correctly", () => {

    // render the component on virtual dom
    render(<Header title={myTitle} sections={mySections} />);
    //select the elements you want to interact with
    const subscribe = screen.getByTestId("subscribe");
    const sections = screen.queryByTestId("sections");

    //assert the expected result
    expect(subscribe).toBeInTheDocument;
    expect(sections).toBeInTheDocument;
    expect(screen.getByText(mySections[0].title)).toBeInTheDocument();
    expect(screen.getByText(myTitle)).toBeInTheDocument();
})

