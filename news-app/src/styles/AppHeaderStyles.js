import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    logo: {
        height: '50px',
    },
    filter: {
        width: '75%',
    },
    settings: {
        '&:hover svg': {
            color: 'black'
        }
    },
    filterName: {
        color: 'azure'
    },
    selected: {
        display: 'none'
    }
})

export default useStyles;