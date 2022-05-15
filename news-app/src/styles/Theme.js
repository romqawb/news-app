import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    backgroundColor: 'rgba(63,66,68,0.6)',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        backgroundColor: 'rgba(63,66,68,.95)',
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '50px',
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(63,66,68,0.9)',
                    borderRadius: 10
                },
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    border: '2px solid rgb(80,85,90)',
                    borderRadius: '50px',
                    padding: '8px',
                    transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    width: '200px',
                    'input': {
                        paddingLeft: '10px',
                        '&::placeholder': {
                            color: 'white',
                        }
                    },
                    '&:hover': {
                        borderColor: 'transparent',
                        color: 'rgba(0,0,0,0.8)',
                        backgroundColor: 'rgba(255,255,255,0.6)',
                        width: '260px',
                        'input': {
                            '&::placeholder': {
                                color: 'rgba(0,0,0,0.8)',
                            }
                        }
                    },
                }
            }
        },
        MuiFormGroup: {
            styleOverrides: {
                root: {
                    display: 'inline-block',
                }
            }
        },

        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: 'black',
                    fontWeight: '500',
                    '&.Mui-focused': {
                        color: 'black'
                    }
                }
            }
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(221,221,221)',
                    color: 'rgb(51,51,51)',
                    borderRadius: '25px',
                    paddingLeft: '5px',
                    '.Mui-disabled': {
                        cursor: 'not-allowed',
                    },
                    '&:hover': {
                        cursor: 'pointer',
                        backgroundColor: 'rgba(145,53,180,0.9)',
                        color: 'white'
                    },
                },
                label: {
                    fontSize: '0.8125rem',
                    padding: '5px 7.5px 5px 2.5px',
                    borderRadius: '25px',
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                    fontWeight: '500',
                    backgroundColor: 'rgb(190,190,190)',
                    margin: '1rem',
                    border: '2px solid rgb(150,150,150)',
                    color: 'white',
                }
            }
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    padding: '0'
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: '0',
                },

            }
        }
    }
})