import React, { useState } from 'react';
import { Backdrop, Paper, Typography, FormControl, Chip, FormGroup, RadioGroup, Radio, FormControlLabel, Box, Button, Checkbox } from '@mui/material'

const Filter = (props) => {
    const { open, setOpen, setSearchParams } = props;
    const [sortBy, setSortBy] = useState('publishedAt');
    const [searchIn, setSearchIn] = useState('everything');
    const [filterReset, setFilterReset] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLanguage, setSelectedLanguage] = useState('all');
    const allCategories = ['all', 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
    const langs = {
        all: 'All',
        en: 'English',
        fr: 'French',
        es: 'Spanish',
        de: 'German',
        ru: 'Russian'
    }

    const buildQuery = () => {
        const baseUrl = 'https://newsapi.org/v2';
        let lookIn = '/everything?';
        let sort = '';
        let language = '';
        let category = '';
        let query = '';

        if (searchIn !== 'everything') {
            lookIn = '/top-headlines?';
            if (selectedCategory !== 'all') {
                category = `category=${selectedCategory}`;
            }
        } else {
            category = '';
        }

        if (sortBy !== 'publishedAt') {
            category === '' ? sort = `sortBy=${sortBy}` : sort = `&sortBy=${sortBy}`;
        }

        if (selectedLanguage !== 'all') {
            sortBy === '' ? language = `language=${selectedLanguage}` : language = `&language=${selectedLanguage}`;
        }

        if (sort === '' && language === '' && category === '') {
            query = 'q='
        } else {
            query = '&q='
        }

        return `${baseUrl}${lookIn}${category}${sort}${language}${query}`;
    }


    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    const handleSearchIn = (e) => {
        setSearchIn(e.target.value);
    }

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    }

    const closeFilter = () => {
        setOpen(false);
    }

    const handleFilterAreaClick = (e) => {
        e.stopPropagation();
    }

    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
    }

    const handleFilterReset = (e) => {
        setFilterReset(!filterReset);
    }

    const handleFilterChange = (e) => {
        if (filterReset) {
            setSortBy('publishedAt');
            setSelectedCategory('all');
            setSelectedLanguage('all');
            setSearchIn('everything');
            setFilterReset(!filterReset);
            setSearchParams('https://newsapi.org/v2/everything?q=');
        } else {
            console.log(buildQuery());
            setSearchParams(buildQuery());
        }
        setOpen(false);
    }

    const categories = allCategories.map((category, index) => {
        return <FormControlLabel key={index} sx={{ m: 0.5 }} control={<Radio disabled={searchIn === 'everything'} checked={selectedCategory === category} value={category} onChange={handleCategoryChange} label={category} color='secondary' />} label={category} />

    })

    const languages = Object.keys(langs).map((lang, index) => {
        return <FormControlLabel key={index} sx={{ m: 0.5 }} control={<Radio checked={selectedLanguage === lang} onChange={handleLanguageChange} value={lang} label={langs[lang]} color='secondary' />} label={langs[lang]} />
    })

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={closeFilter}
        >
            <Paper sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.95)', maxWidth: 'sm' }} onClick={handleFilterAreaClick} >
                <Typography sx={{ textAlign: 'center', mb: 1, textTransform: 'uppercase' }} variant='h5'>Filter Preferences</Typography>
                <FormControl sx={{ width: '100%' }}>
                    <Chip sx={{ width: '25%', m: '0 auto' }} label='Search In'></Chip>
                    <RadioGroup
                        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', m: 2 }}
                        name='searchIn'
                        value={searchIn}
                        onChange={handleSearchIn}>
                        <FormControlLabel checked={searchIn === 'everything'} sx={{ m: 0.5 }} value='everything' control={<Radio color='secondary' />} label='Everywhere' />
                        <FormControlLabel sx={{ m: 0.5 }} value='top-headlines' control={<Radio color='secondary' checked={searchIn === 'top-headlines'} />} label='Top Headlines' />
                    </RadioGroup>
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <Chip sx={{ width: '25%', m: '0 auto' }} label='Categories' />
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', m: 2 }}>
                        {categories}
                    </FormGroup>
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <Chip sx={{ width: '25%', m: '0 auto' }} label='Sort By'></Chip>
                    <RadioGroup
                        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', m: 2 }}
                        name='sortBy'
                        value={sortBy}
                        onChange={handleSortByChange}>
                        <FormControlLabel sx={{ m: 0.5 }} value='publishedAt' control={<Radio color='secondary' checked={sortBy === 'publishedAt'} />} label='Newest first' />
                        <FormControlLabel sx={{ m: 0.5 }} value='popularity' control={<Radio color='secondary' checked={sortBy === 'popularity'} />} label='Popularity' />
                        <FormControlLabel sx={{ m: 0.5 }} value='relevancy' control={<Radio color='secondary' checked={sortBy === 'relevancy'} />} label='Relevancy' />
                    </RadioGroup>
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <Chip sx={{ width: '25%', m: '0 auto' }} label='Languages'></Chip>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', m: 2 }}>
                        {languages}
                    </FormGroup>
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <Chip sx={{ width: '25%', m: '0 auto' }} label='Reset'></Chip>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', m: 2 }}>
                        <FormControlLabel sx={{ m: 0.5 }} control={<Checkbox checked={filterReset} onChange={handleFilterReset} label={'Reset filter'} color='secondary' />} label={'Reset filters'} />
                    </FormGroup>
                </FormControl>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{ width: '20%', mx: 0.5 }} variant='outlined' color='secondary' onClick={closeFilter}>Close</Button>
                    <Button sx={{ width: '20%', mx: 0.5 }} variant='contained' color='secondary' onClick={handleFilterChange}>Apply</Button>
                </Box>
            </Paper>
        </Backdrop>
    )
}

export default Filter;