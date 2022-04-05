import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '50px'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255,255,255,.7)',
                    border: '2px solid rgb(80,85,90)',
                    borderRadius: 10
                },
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    input: {
                        color: 'rgb(150,150,150)',
                    },
                    label: {
                        color: 'rgb(185,185,185)',
                        textAlign: 'center'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fieldset: {
                        borderRadius: '50px',
                        border: '2px solid rgb(80,85,90)',
                        '&:hover': {
                            border: '2px solid rgb(80,85,90)',
                        }
                    }
                }
            }
        }
    }
})