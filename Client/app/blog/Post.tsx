import * as React from 'react';
import Link from '@mui/material/Link';
import { Card, Divider, Typography} from '@mui/material';
import { BlogPost } from './blog.types';

// using this because Jest needs it
const { format } = require("date-fns");

interface PostProps {
    post: BlogPost;
  }

export default function Post(props: PostProps ) {
  const { post } = props;
  return(
    <Card>
        <Typography variant="h4" data-testid="post-title">{post?.title}</Typography>
        <Typography variant="caption" data-testid="caption">{format(new Date(post.createdOn), 'MMMM dd yyyy, h:mm:ss a')} By {post?.createdBy}</Typography>
        <Typography variant="h5">Question Posed to Open AI</Typography>
        <Typography variant="body1" data-testid="question">{post?.questionPosedToOpenAi}</Typography>
        <Typography variant="h5">Open AI's Answer</Typography>
        <Typography variant="body1" data-testid="answer">{post?.body}</Typography>  
        <Divider variant="inset"></Divider>   
    </Card>

  )
}