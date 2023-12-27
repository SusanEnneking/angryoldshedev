import { render, screen } from "@testing-library/react";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Sidebar from '../app/blog/Sidebar';
import '@testing-library/jest-dom';

const archives = [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ]
  const social = [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Facebook', icon: FacebookIcon },
    { name: 'LinkedIn', icon: LinkedInIcon },
  ]

//test block
test("Sidebar renders correctly", () => {
    const sidebarTitle = "Sidebar Title";
    const description = "Sidebar Description";
    // render the component on virtual dom
    render(<Sidebar                
        title={sidebarTitle}
        description={description}
        archives={archives}
        social={social}/>);
   //select the elements you want to interact with
    const title = screen.getByTestId("sidebar-title");
    const archiveTitle = screen.queryByTestId("archive-description");

    //assert the expected result
    expect(title).toBeInTheDocument;
    expect(archiveTitle).toBeInTheDocument;
    expect(screen.getByText(sidebarTitle)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(social[0].name)).toBeInTheDocument();
})
