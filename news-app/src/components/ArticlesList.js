import React from 'react';
import Article from './Article';
import { Grid, Skeleton } from '@mui/material';

const fakeArticle = {
    author: <Skeleton height={50} width={'100%'} animation='wave' />,
    title: <Skeleton height={50} animation='wave' />,
    description: <Skeleton height={150} animation='wave' />,
    url: '',
    urlToImage: 'https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif',
    fake: true
}


const ArticleList = (props) => {
    const { news, loading, articlesToShow } = props;
    let content = news.slice(0, articlesToShow).map(article => {
        return <Article article={!loading ? article : fakeArticle} />
    })
    return (
        <Grid container spacing={5}>
            {content}
        </Grid>
    )
}

export default ArticleList;