import { render, screen } from "@testing-library/react";
import Footer from '../app/blog/Footer';
import '@testing-library/jest-dom';

//test block
test("Footer renders correctly", () => {
    const testTitle = "Test Title";
    const testDescription = "Test Description";
    // render the component on virtual dom
    render(<Footer title={testTitle} description={testDescription} />);
    //select the elements you want to interact with
    const title = screen.getByTestId("title");
    const description = screen.queryByTestId("description");
    expect(testTitle).toBeInTheDocument;
    expect(testDescription).toBeInTheDocument;

})

