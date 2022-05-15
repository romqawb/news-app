import React from 'react';
import { Paper, Typography } from '@mui/material'

const Error = (props) => {
    const { error } = props;
    return (
        <Paper elevation={10} sx={{
            width: {
                xs: '80%', md: '40%'
            }, height: '100px', m: '0 auto', p: 5, backgroundColor: 'rgb(61, 63, 65)', justifyContent: 'center', alignItems: 'center', display: 'flex'
        }}>
            <Typography sx={{ color: 'white' }} variant='h5'>
                {error}
            </Typography>
        </Paper >
    )
}

export default Error;