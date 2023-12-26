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
        <Typography variant="h4">{post?.title}</Typography>
        <Typography variant="caption">{format(post?.createdOn, 'MMMM do yyyy, h:mm:ss a')} By {post?.createdBy}</Typography>
        <Typography variant="h5">Question Posed to Open AI</Typography>
        <Typography variant="body1">{post?.questionPosedToOpenAi}</Typography>
        <Typography variant="h5">Open AI's Answer</Typography>
        <Typography variant="body1">{post?.body}</Typography>  
        <Divider variant="inset"></Divider>   
    </Card>

  )
}