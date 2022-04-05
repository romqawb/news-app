import { Card, CardContent, CardMedia, CardActions, Button, Typography } from '@mui/material';

const Article = (props) => {
    const { article } = props;
    const { author, title, description, url, urlToImage } = article;
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
                <Typography sx={{ mt: 1, textAlign: 'center' }} variant='subtitle2' component='div'>
                    By: {author === null ? 'N/A' : author}
                </Typography>
            </CardContent>
            <CardActions component='div' sx={{ p: 2, justifyContent: 'center' }}>
                <Button sx={{ p: 1, width: '30%' }} href='#' size="small" variant='contained' color='error'>Save</Button>
                <Button sx={{ p: 1, width: '30%' }} href={url} target='_blank' size="small" variant='contained'>Read More</Button>
            </CardActions>
        </Card>
    )
}

export default Article;