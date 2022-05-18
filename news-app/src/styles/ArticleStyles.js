import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    card: {
        position: 'relative',
        border: '1px solid rgba(40,50,50,1)',
        top: '0px',
        transition: 'top 0.1s ease-in-out',
        height: 460,
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
            top: '1px',
            transition: 'top 0.1s ease-in-out',
            backgroundColor: 'rgba(63,66,68,1)'
        }
    },
    title: {
        textAlign: 'center',
        height: '65px',
        color: 'white'
    },
    description: {
        color: 'rgba(255,255,255,0.6)',
        wordWrap: 'break-word',
        textAlign: 'center',
        height: '75px',
    },
    image: {
        '&:hover': {
            opacity: '0.5'
        }
    },
    author: {
        textAlign: 'center',
        color: 'white',
    }
})

export default useStyles;