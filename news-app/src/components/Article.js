import React, { memo } from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, Typography, Grid } from '@mui/material';
import { v4 as uuid } from 'uuid';
import useStyles from '../styles/ArticleStyles';

const shortenedText = (text, requiredCharLength) => {
    if (text.length > requiredCharLength) {
        return text.substring(0, requiredCharLength) + '...'
    }
    return text;
}

const Article = (props) => {
    const classes = useStyles();
    const { article } = props;
    const { author, title, description, url, urlToImage, fake } = article;
    return (
        <Grid key={uuid()} item lg={4} md={6} sm={12}>
            <Card className={classes.card} sx={{ height: 450, display: 'flex', flexDirection: 'column', }}>
                <CardMedia
                    sx={{ m: '2%', width: '96%', borderRadius: 2 }}
                    component='img'
                    height='175'
                    image={urlToImage}
                    alt='article picture'
                />
                <CardContent sx={{ py: 0 }}>
                    <Typography className={classes.title} sx={{ textAlign: 'center', height: '65px' }} variant='h6' component='div'>
                        {title === null ? 'N/A' : shortenedText(title, 50)}
                    </Typography>
                    <Typography className={classes.description} sx={{ wordWrap: 'break-word', textAlign: 'center', height: '70px' }} variant='body2' color='info'>
                        {description === null ? 'N/A' : shortenedText(description, 160)}
                    </Typography>
                    {!fake ? <Typography sx={{ mt: 1, textAlign: 'center' }} variant='subtitle2' component='div'>
                        By: {author === null ? 'N/A' : shortenedText(author, 30)}
                    </Typography> : null}
                </CardContent>
                {!fake ? <CardActions component='div' sx={{ p: 2, justifyContent: 'center' }}>
                    <Button sx={{ p: 1, width: '30%' }} href='#' size="small" variant='contained' color='secondary'>Save</Button>
                    <Button sx={{ p: 1, width: '30%' }} href={url} target='_blank' size="small" variant='contained' color='info'>Read More</Button>
                </CardActions> : null}
            </Card>
        </Grid >
    )
}

export default memo(Article);