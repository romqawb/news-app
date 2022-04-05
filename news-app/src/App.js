import './App.css';
import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';
import Article from './components/Article';
import { Skeleton, Grid, Container, TextField, Box, Button } from '@mui/material';
import { theme } from './styles/Theme.js'
import { ThemeProvider } from '@mui/material/styles';

function App(props) {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(JSON.parse(window.localStorage.getItem('news') || '[]'));
  const [query, updateQuery] = useState('');
  let content;

  const handleChange = (e) => {
    e.preventDefault();
    updateQuery(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    getNews(query);
  }

  const params = {
    headers: {
      'X-Api-Key': process.env.REACT_APP_API_KEY
    }
  }

  const getNews = async (queryParams) => {
    const url = `https://newsapi.org/v2/everything?q=${queryParams}&from=2022-04-04&sortBy=popularity&language=en`;
    let foundNews = [];
    await fetch(url, params)
      .then(data => data.json())
      .then(data => data.articles.map(article => foundNews.push(article)))
      .catch(error => error)
    setNews(foundNews);
    setLoading(false);
    updateQuery('');
    window.localStorage.setItem('news', JSON.stringify(foundNews));
  }

  if (loading) {
    const fakeNews = Array(9).fill(1);
    const fakeArticle = {
      author: <Skeleton height='200' animation='wave' />,
      title: <Skeleton height='200' animation='wave' />,
      description: <Skeleton variant="rectangular" width={'100%'} height={100} animation='wave' />,
      url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F80853755789865527%2F&psig=AOvVaw18XVm-En0IEPPaIrI55JTf&ust=1649261505580000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCICG0oSo_fYCFQAAAAAdAAAAABAJ',
      urlToImage: 'https://cdn.impression.co.uk/2021/03/loading1.gif'
    }
    content = (
      fakeNews.map(item => {
        return (
          <Grid key={uuid()} item lg={4} md={6} xs={12} >
            <Article article={fakeArticle} />
          </Grid>
        )
      })
    )
  } else {
    content = (
      news.map((article) => {
        return (
          <Grid key={uuid()} item lg={4} md={6} xs={12} >
            <Article article={article} />
          </Grid>)
      })
    )
  }

  useEffect(() => {
    setTimeout(() => {
      if (news.length > 0) {
        setLoading(false);
      } else {
        getNews('random')
      }
    }, 2000)
  }, [loading, news])

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ p: 2 }}>
        <Box component='div' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: 3 }}>
          <TextField label='Search' variant='outlined' color='warning' sx={{ mx: 2 }} value={query} onChange={handleChange} />
          <Button variant='contained' color='warning' onClick={handleClick}>Get News</Button>
        </Box>
        <Grid container spacing='24' sx={{ my: 2 }}>
          {content}
        </Grid>
      </Container>
    </ThemeProvider >
  );
}

export default App;
