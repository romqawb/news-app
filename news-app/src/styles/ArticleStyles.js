import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    card: {
        position: 'relative',
        top: '0px',
        transition: 'top 0.1s ease-in-out',
        '&:hover': {
            top: '2px',
            transition: 'top 0.1s ease-in-out',
            backgroundColor: 'rgba(63,66,68,1)'
        }
    },
    title: {
        color: 'rgba(255,255,255,0.8)'
    },
    description: {
        color: 'rgba(255,255,255,0.9)'
    }
})

export default useStyles;