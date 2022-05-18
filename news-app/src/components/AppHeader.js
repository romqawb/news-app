import React, { useState } from 'react';
import { AppBar, Toolbar, Box, InputBase, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import Filter from './Filter';
import useStyles from '../styles/AppHeaderStyles';

const AppHeader = (props) => {
    const { getNews, setCategories, searchParams, setSearchParams } = props;
    const [query, updateQuery] = useState('');
    const [open, setOpen] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const classes = useStyles();

    const handleChange = (e) => {
        e.target.value.length > 0 ? setSearchActive(true) : setSearchActive(false)
        updateQuery(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (query !== '') {
            getNews(query, searchParams);
            setSearchActive(false);
            updateQuery('');
        }
    }

    const handleFilterClick = () => {
        setOpen(!open)
    }

    return (
        <AppBar id="back-to-top-anchor" position='static' sx={{ py: 3 }}>
            <Toolbar sx={{ justifyContent: { xs: 'space-between' } }}>
                <Box noWrap sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <img src='/NewsAppLogo.png' alt='logo' className={classes.logo} />
                </Box>
                <Box component='div'>
                    <form onSubmit={handleClick}>
                        <InputBase sx={{ width: { xs: '265px', md: '200px' } }} placeholder='Search' variant='outlined' value={query} onChange={handleChange} />
                        <Button className={classes.settings} disabled={!searchActive} sx={{ mx: 1 }} variant='contained' color='warning' onClick={handleClick}>
                            <SearchIcon sx={{ fontSize: '1.25rem' }} />
                        </Button>
                        <Button className={classes.settings} onClick={handleFilterClick} variant='contained' color='secondary'>
                            <SettingsIcon sx={{ fontSize: '1.25rem' }} />
                        </Button>
                    </form>
                </Box>
            </Toolbar>
            <Filter setOpen={setOpen} open={open} setCategories={setCategories} updateQuery={updateQuery} query={query} setSearchParams={setSearchParams} />
        </AppBar>)
}

export default AppHeader;