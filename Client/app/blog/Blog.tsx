import * as React from 'react';
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import IntroductionPost from './IntroductionPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { BlogPost, Section } from './blog.types'
import useBlogPosts  from '../hooks/useBlogPosts'
import useSections from '../hooks/useSections'
const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    body:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    body:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

const posts = [];

const sidebar = {
  title: 'About',
  description:
    'Angry Old She Dev is a site used to experiment with some things its developer has not tried yet.',
  archives: [
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
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Facebook', icon: FacebookIcon },
    { name: 'LinkedIn', icon: LinkedInIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  const { blogPosts, intro } = useBlogPosts();
  const sections = useSections();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      { blogPosts && sections && intro && (
        <Container maxWidth="lg">
          <Header title="Angry Old She Dev" sections={sections} data-testid="header" />
          <main>
            <IntroductionPost post={intro as BlogPost} data-testid="introduction" />
            <Grid container spacing={4} data-testid="featured">
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main title="From the firehose" posts={blogPosts} data-testid="firehose"/>
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
                data-testid="sidebar"
              />
            </Grid>
          </main>
        </Container>
      )}
      <Footer data-testid="footer"
        title="So happy you dropped by!"
        description="Even angry old girls gotta be thankful!  Thank you for visiting!"
      />
    </ThemeProvider>
  );
}