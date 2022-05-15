import React, { useState, useEffect } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import Error from './components/Error';
import ArticleList from './components/ArticlesList';
import { Container, Typography, Button, Box } from '@mui/material';
import { theme } from './styles/Theme.js'
import { ThemeProvider } from '@mui/material/styles';

function App() {
  const [news, setNews] = useState(JSON.parse(window.localStorage.getItem('news') || '[]'));
  const [keyword, setKeyword] = useState(JSON.parse(window.localStorage.getItem('keyword') || JSON.stringify('random')));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articlesToShow, setArticlesToShow] = useState(18);
  const [searchParams, setSearchParams] = useState('https://newsapi.org/v2/everything?q=');
  const params = {
    headers: {
      'X-Api-Key': process.env.REACT_APP_API_KEY
    }
  }

  const getNews = async (query, filterParams) => {
    try {
      setLoading(true);
      const url = `${filterParams}${query}&pageSize=50`;
      const res = await fetch(url, params);
      const data = await res.json();
      if (data.status === 'ok' && data.totalResults === 0) {
        setError(`Nothing was found for ${query}. Try amending the search... `);
      } else if (data.status === 'ok') {
        setNews(data.articles);
        setKeyword(query);
        setError(null);
        setArticlesToShow(18);
        window.localStorage.setItem('news', JSON.stringify(data.articles));
        window.localStorage.setItem('keyword', JSON.stringify(query));
      } else {
        setError('something went wrong');
      }
    } catch (err) {
      setError(err);
    }
  }

  const loadMore = () => setArticlesToShow(prevState => prevState + 6);

  useEffect(() => {
    setTimeout(() => {
      if (news.length > 0) {
        setLoading(false);
      } else if (!error) {
        getNews('random', 'https://newsapi.org/v2/everything?q=')
      }
    }, 1500)
  }, [news])

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ p: 3 }}>
        <AppHeader
          getNews={getNews}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <Typography variant='h4' sx={{ my: 2, p: 1, textAlign: 'center' }}>
          {error ? <Error error={error} /> : `All news found for keyword '${keyword}'`}
        </Typography>
        {!error &&
          <ArticleList
            news={news}
            loading={loading}
            articlesToShow={articlesToShow}
          />}
        <Box
          sx={{ display: 'flex', justifyContent: 'center', m: 3 }}>
          <Button disabled={news.length <= articlesToShow ? true : false} sx={{ width: '200px' }} size='small' variant='contained' color='secondary' onClick={loadMore}>Load more</Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
