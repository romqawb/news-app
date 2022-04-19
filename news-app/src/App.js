import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import AppHeader from './components/AppHeader';
import Article from './components/Article';
import { Skeleton, Grid, Container, Typography } from '@mui/material';
import { theme } from './styles/Theme.js'
import { ThemeProvider } from '@mui/material/styles';



function App() {
  const [news, setNews] = useState(JSON.parse(window.localStorage.getItem('news') || '[]'));
  const [keyword, setKeyword] = useState(JSON.parse(window.localStorage.getItem('keyword') || JSON.stringify('random')));
  const [query, updateQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  let content;
  const params = {
    headers: {
      'X-Api-Key': process.env.REACT_APP_API_KEY
    }
  }

  const getNews = async (queryParams) => {
    const url = `https://newsapi.org/v2/everything?q=${queryParams}&language=en`;
    console.log(url);
    let foundNews = [];
    await fetch(url, params)
      .then(data => data.json())
      .then(data => data.articles.map(article => foundNews.push(article)))
      .catch(error => error)
    setNews(foundNews);
    setKeyword(queryParams);
    setLoading(false);
    updateQuery('');
    window.localStorage.setItem('news', JSON.stringify(foundNews));
    window.localStorage.setItem('keyword', JSON.stringify(queryParams));
  }

  if (loading) {
    const fakeNews = Array(4).fill('');
    const fakeArticle = {
      author: <Skeleton height={50} width={'100%'} animation='wave' />,
      title: <Skeleton height={50} animation='wave' />,
      description: <Skeleton height={150} animation='wave' />,
      url: '',
      urlToImage: 'https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif',
      fake: true
    }
    content = (
      fakeNews.map(item => {
        return (
          <Grid key={uuid()} item lg={4} md={6} sm={12} >
            <Article article={fakeArticle} />
          </Grid>
        )
      })
    )
  } else {
    content = (
      news.map((article) => {
        return (
          <Grid key={uuid()} item lg={4} md={6} sm={12}>
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
      <Container sx={{ p: 3 }}>
        <AppHeader
          updateQuery={updateQuery}
          getNews={getNews}
          query={query}
          setCategories={setCategories}
        />
        <Typography variant='h3' sx={{ my: 2, p: 1, textAlign: 'center' }}>
          {`All news found for keyword '${keyword}'`}
        </Typography>
        <Grid container spacing={5}>
          {content}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
