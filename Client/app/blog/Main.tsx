import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Post from './Post';
import { BlogPost } from './blog.types'

interface MainProps {
  posts: BlogPost[];
  title: string;
}

export default function Main(props: MainProps) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
      '& .markdown': {
        py: 3,
      }
    }}
    data-testid="posts"
    >
      <Typography variant="h6" gutterBottom data-testid="title">
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Post post={post} key={post.id}>
        </Post>
      ))}
    </Grid>
  );
}