import React from 'react';
import Article from './Article';
import ScrollBackToTop from './ScrollBackToTop';
import { Grid } from '@mui/material';
import { v4 as uuid } from 'uuid';



const ArticleList = (props) => {
    const { news, loading, articlesToShow } = props;
    const content = news.slice(0, articlesToShow).map(article => {
        return <Article key={uuid()} article={article} fake={loading} />
    })
    return (
        <>
            <Grid container spacing={5}>
                {content}
            </Grid>
            <ScrollBackToTop />
        </>
    )
}

export default ArticleList;