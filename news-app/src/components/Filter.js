import React, { useState } from 'react';
import { Backdrop, Paper, Typography, FormControl, Chip, FormGroup, RadioGroup, Radio, Checkbox, FormControlLabel, Box, Button } from '@mui/material'

const Filter = (props) => {
    const { open, setOpen } = props;
    const [searchIn, setSearchIn] = useState('everything');
    const [sortBy, setSortBy] = useState('publishedAt');
    const [filterReset, setFilterReset] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const allCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

    const handleCategoryChange = (e) => {
        !selectedCategories.includes(e.target.value) ?
            setSelectedCategories([...selectedCategories, e.target.value]) :
            setSelectedCategories(selectedCategories.filter(category => category !== e.target.value))
    }

    const handleLanguageChange = (e) => {
        !selectedLanguages.includes(e.target.value) ?
            setSelectedLanguages([...selectedLanguages, e.target.value]) :
            setSelectedLanguages(selectedLanguages.filter(language => language !== e.target.value))
    }

    const closeFilter = () => {
        setOpen(false);
    }

    const handleFilterAreaClick = (e) => {
        e.stopPropagation();
    }

    const handleSearchInChange = (e) => {
        setSearchIn(e.target.value);
    }

    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
    }

    const handleFilterReset = (e) => {
        setFilterReset(!filterReset);
    }

    const handleFilterChange = (e) => {
        if (filterReset) {
            setSearchIn('everything');
            setSortBy('publishedAt');
            setSelectedCategories([]);
            setSelectedLanguages([]);
            setFilterReset(!filterReset);
        }
        setOpen(false);
    }

    const categories = (
        allCategories.map((category, index) => {
            return (
                <FormControlLabel key={index} sx={{ m: 0.5 }} control={<Checkbox checked={selectedCategories.includes(category)} value={category} onChange={handleCategoryChange} label={category} color='secondary' />} label={category} />
            )
        })
    )

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={closeFilter}
        >
            <Paper sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.95)', maxWidth: 'sm' }} onClick={handleFilterAreaClick} >
                <Typography sx={{ textAlign: 'center', mb: 1, textTransform: 'uppercase' }} variant='h5'>Filter Preferences</Typography>
                <FormControl sx={{ width: '100%' }}>
                    <Chip sx={{ width: '25%', m: '0 auto' }} label='Categories' />
                    <FormGroup sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', m: 2 }}>
                        {categories}
                    </FormGroup>
                </FormControl>
                <FormControl sx={{ width: '100%' }}>
                    <Chip sx={{ width: '25%', m: '0 auto' }} label='Search In'></Chip>
                    <RadioGroup
                        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', m: 2 }}
                        name='searchIn'
                        value={searchIn}
                        onChange={handleSearchInChange}>
                        <FormControlLabel sx={{ m: 0.5 }} value='everything' control={<Radio variant='styledRadio' color='secondary' checked={searchIn === 'everything'} />} label='Everywhere' />
                        <FormControlLabel sx={{ m: 0.5 }} value='top-headlines' control={<Radio color='secondary' checked={searchIn === 'top-headlines'} />} label='Top Headlines' />
                    </RadioGroup>
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
                        <FormControlLabel sx={{ m: 0.5 }} control={<Checkbox checked={selectedLanguages.includes('en')} onChange={handleLanguageChange} value={'en'} label={'English'} color='secondary' />} label={'English'} />
                        <FormControlLabel sx={{ m: 0.5 }} control={<Checkbox checked={selectedLanguages.includes('fr')} onChange={handleLanguageChange} value={'fr'} label={'French'} color='secondary' />} label={'French'} />
                        <FormControlLabel sx={{ m: 0.5 }} control={<Checkbox checked={selectedLanguages.includes('es')} onChange={handleLanguageChange} value={'es'} label={'Spanish'} color='secondary' />} label={'Spanish'} />
                        <FormControlLabel sx={{ m: 0.5 }} control={<Checkbox checked={selectedLanguages.includes('de')} onChange={handleLanguageChange} value={'de'} label={'German'} color='secondary' />} label={'German'} />
                        <FormControlLabel sx={{ m: 0.5 }} control={<Checkbox checked={selectedLanguages.includes('ru')} onChange={handleLanguageChange} value={'ru'} label={'Russian'} color='secondary' />} label={'Russian'} />
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