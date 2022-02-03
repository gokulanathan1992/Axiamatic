import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import products from '../data/products';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Popper from '@material-ui/core/Popper';
import ProductCards from './ProductCards';
import ProductList from './ProductList';


const useStyles = makeStyles((theme) => ({
    cards: {
        padding: '2.5%',
        width: '45%', 
    },

    nxtBtn: { width: '100%' },

    searchBar: {
        '& .MuiFormControl-root': {
            backgroundColor: '#edf2f6',
            borderRadius: 5,
            padding: `${theme.spacing(1)}px 2.5%`,
        },
        '& .MuiInput-root': { fontSize: 12 },
        '& .MuiInput-underline:after': { border: 'none' },
        '& .MuiInput-underline:before': { border: 'none' },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { border: 'none' },
        '& .MuiSvgIcon-root': {
            color: '#959a9d',
            fontSize: 15,
        },
        padding: `${theme.spacing(1)}px 0`,
        width: '95%',
    },

    popper: {
        '& .MuiAutocomplete-listbox': { padding: 0 },
        '& .MuiAutocomplete-option': {
            margin: `${theme.spacing(1)}px 0`,
            padding: 0,
        },
        '& .MuiAutocomplete-option:hover': {
            '& .MuiTypography-caption': { color: '#fff' },
            '& .MuiSvgIcon-root': { display: 'flex' },
            backgroundColor: '#4b70ff',
            borderRadius: 5,
            cursor: 'pointer',
            margin: `${theme.spacing(1)}px 0`,
            padding: 0,
        },
        '& .MuiAutocomplete-paper': {
            boxShadow: 'none',
            margin: '0 6px',
        },
        backgroundColor: '#fff',
        border: '2px solid #f5f7f9',
        borderRadius: 5,
        boxShadow: '0 0 5px 0 #f5f7f9',
        top: `${theme.spacing(3)}px !important`,
    },

    pspFlex: { [theme.breakpoints.down('xs')]: { flexDirection: 'column-reverse' } },

    steps: {
        '& .MuiButton-root': {
            margin: `${theme.spacing(1)}px 0`,
            textTransform: 'capitalize',
        },
        '& .MuiTypography-body2': { margin: `${theme.spacing(1)}px 0` },
        '& .MuiTypography-h6': {
            fontWeight: 'bold',
            margin: `${theme.spacing(1)}px 0`,
        },
        padding: '2.5%',
        width: '45%',
    },
}));

export default function Psp () {
    const classes = useStyles();
    const [selectedProducts, setSelectedProducts] = useState([]);

    const removeProduct = (name) => {
        const products = selectedProducts.filter(product => product.name !== name);

        setSelectedProducts(products);
    };

    // This function should send the data to backend
    const storeToDb = () => {
        console.log(selectedProducts);
    };

    return (
        <Container>
            <Box className={classes.pspFlex} display='flex' flexWrap='wrap' justifyContent='space-around' alignItems='center'>
                <Box className={classes.cards} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <ProductCards selectedProducts={selectedProducts} removeProduct={removeProduct} />
                </Box>

                <Box className={classes.steps}>
                    <Button size='small' variant='contained' color='primary'>
                        1 of 3
                    </Button>
                    
                    <Typography className={classes.title} variant='h6'>
                        Let's add your internal tools
                    </Typography>

                    <Typography variant='body2'>
                        Search to quickly add products your team uses today. You'll be able to add as many as you need later but for now let's add four.
                    </Typography>

                    <Autocomplete
                        multiple
                        filterSelectedOptions
                        id='autoId'
                        className={classes.searchBar}
                        disabled={selectedProducts.length === 4}
                        options={products}
                        getOptionLabel={(option) => option.name}
                        value={selectedProducts}
                        onChange={(e, newVal) => setSelectedProducts(newVal)}
                        PopperComponent={(props) => <Popper {...props} className={classes.popper} />}
                        renderOption={option => <ProductList item={option} />}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder='Search for any software...'
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon size='small' />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />

                    <Button className={classes.nxtBtn} onClick={storeToDb} disabled={selectedProducts.length<4} variant="contained" color="primary">
                      next
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}