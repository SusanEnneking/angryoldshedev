import { render, screen } from "@testing-library/react";
import FeaturedPost from '../app/blog/FeaturedPost';
import '@testing-library/jest-dom';

const post = {
    id:1,
    bodyId:1,
    autogenerated:false,
    topic:"Culture Topic",
    title:"A culture Blog",
    questionPosedToOpenAi:"Well written culture question.",
    createdOn:"2023-12-23T00:00:00Z",
    createdBy:"init",
    active:true,
    category:"Culture",
    imageUrl:"https://source.unsplash.com/random?wallpapers",
    imageText:"Thank you unsplash!",
    body:"This is what I have to say about culture."
}

//test block
test("FeaturedPost renders correctly", () => {

    // render the component on virtual dom
    render(<FeaturedPost key={post.title} post={post} />);
    //select the elements you want to interact with
    const title = screen.getByTestId("title");
    const subTitle = screen.queryByTestId("subtitle");
    const body = screen.queryByTestId("body");
    //assert the expected result
    expect(title).toBeInTheDocument;
    expect(subTitle).toBeInTheDocument;
    expect(body).toBeInTheDocument;
    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.body)).toBeInTheDocument();
})

