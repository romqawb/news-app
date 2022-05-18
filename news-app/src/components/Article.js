import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, Typography, Grid, Skeleton } from '@mui/material';
import { v4 as uuid } from 'uuid';
import useStyles from '../styles/ArticleStyles';

const shortenedText = (text, requiredCharLength) => {
    let stringText = text.toString();
    let strippedText = stringText.replace(/<[^>]+>/g, '');
    if (strippedText.length > requiredCharLength) {
        return strippedText.substring(0, requiredCharLength) + '...'
    }
    return strippedText;
}

const Article = (props) => {
    const classes = useStyles();
    const { article, fake } = props;
    const { author, title, description, url, urlToImage } = article;
    return (
        <Grid key={uuid()} item lg={4} md={6} sm={12}>
            <Card className={classes.card}>
                <CardMedia
                    sx={{ m: '2%', width: '96%', borderRadius: 2 }}
                    component='img'
                    height='175'
                    image={!fake ? urlToImage || 'https://app.rallybright.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'
                        : 'https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif'}
                    alt='article picture'
                />
                <CardContent sx={{ py: 0 }}>
                    {!fake ?
                        <Typography className={classes.title} variant='h6' component='div'>
                            {title === null ? 'N/A' : shortenedText(title, 50)}
                        </Typography> : <Skeleton height={50} animation='wave' />}
                    {!fake ?
                        <Typography className={classes.description} variant='body2' color='info'>
                            {description === null ? 'N/A' : shortenedText(description, 160)}
                        </Typography> : <Skeleton height={150} animation='wave' />}
                    {!fake ? <Typography className={classes.author} sx={{ mt: 2 }} variant='subtitle2' component='div'>
                        By: {author === null ? 'N/A' : shortenedText(author, 30)}
                    </Typography> : <Skeleton height={50} width={'100%'} animation='wave' />}
                </CardContent>
                {!fake && <CardActions component='div' sx={{ p: 2, justifyContent: 'center' }}>
                    <Button sx={{ p: 1, width: '50%' }} href={url} target='_blank' size="small" variant='contained' color='info'>Read More</Button>
                </CardActions>}
            </Card>
        </Grid>
    )
}

export default Article;