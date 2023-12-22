import * as React from 'react';
import Link from '@mui/material/Link';
import { Card, Divider, Typography} from '@mui/material';
import { BlogPost } from './blog.types';
import { format } from 'date-fns';


export default function Post(props: any) {
  const blogPost = props.children;
  return(
    <Card>
        <Typography variant="h4">{blogPost.Title}</Typography>
        <Typography variant="caption">{format(blogPost.CreatedOn, 'MMMM do yyyy, h:mm:ss a')} By {blogPost.CreatedBy}</Typography>
        <Typography variant="h5">Question Posed to Open AI</Typography>
        <Typography variant="body1">{blogPost.QuestionPosedToOpenAi}</Typography>
        <Typography variant="h5">Open AI's Answer</Typography>
        <Typography variant="body1">{blogPost.Body}</Typography>  
        <Divider variant="inset"></Divider>   
    </Card>

  )
}