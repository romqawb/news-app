import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, Typography } from '@mui/material';

const Article = (props) => {
    const { article } = props;
    const { author, title, description, url, urlToImage, fake } = article;
    return (
        <Card sx={{ minHeight: 500, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia
                sx={{ m: '2%', width: '96%', borderRadius: 2 }}
                component='img'
                height='175'
                image={urlToImage}
                alt='article picture'
            />
            <CardContent>
                <Typography sx={{ textAlign: 'center' }} variant='h6' gutterBottom component='div'>
                    {title}
                </Typography>
                <Typography sx={{ wordWrap: 'break-word', textAlign: 'center' }} variant='body2' color='info'>
                    {description}
                </Typography>
                {!fake ? <Typography sx={{ mt: 1, textAlign: 'center' }} variant='subtitle2' component='div'>
                    By: {author === null ? 'N/A' : author}
                </Typography> : null}
            </CardContent>
            {!fake ? <CardActions component='div' sx={{ p: 2, justifyContent: 'center' }}>
                <Button sx={{ p: 1, width: '30%' }} href='#' size="small" variant='contained' color='info'>Save</Button>
                <Button sx={{ p: 1, width: '30%' }} href={url} target='_blank' size="small" variant='contained' color='warning'>Read More</Button>
            </CardActions> : null}
        </Card>
    )
}

export default Article;