import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
    addIcon: {
        backgroundColor: '#f9fafc',
        border: '1px solid #f5f7f9',
        borderRadius: '10%',
        color: '#a9b8ce',
        margin: 'auto',
        padding: `${theme.spacing(1)}px`,
    },

    caption: {
        color: '#8b9299',
        paddingTop: '2.5%',
    },

    card: {
        [theme.breakpoints.down('xs')]: {
            height: '20vw',
            width: '20vw',
        },
        border: '2px solid #f5f7f9',
        borderRadius: '5%',
        boxShadow: '0 0 5px 0 #f5f7f9',
        margin: 10,
        height: '15vw',
        width: '15vw',
    },

    pdtIcons: {
        height: 40,
        width: 40,
    },

    pdtName: { fontWeight: 'bold' },

    removeBtn: {
        '& .MuiSvgIcon-root': {
            color: '#e55e62',
            fontSize: 12,
        },
        '&:hover': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
        },
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color:'#8b9299',
        fontSize: 10,
        height: 10,
        textTransform: 'capitalize',
    },
}));

const ProductCards = ({
    selectedProducts,
    removeProduct,
}) => {
    const classes = useStyles();

    const displayCard = (cardNumber) => {
        if (selectedProducts.length >= cardNumber) {
            const currentProduct = selectedProducts[cardNumber-1];

            return (
                <Grid className={classes.card} container>
                    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-evenly' width='100%'>
                        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                            <Avatar className={classes.pdtIcons} src={currentProduct?.icon} />

                            <Typography className={classes.pdtName} variant="caption">
                                {currentProduct?.name}
                            </Typography>
                        </Box>

                        <Button className={classes.removeBtn} variant="contained" color="primary" onClick={() => removeProduct(currentProduct?.name)}>
                            <ClearIcon /> {'Remove'}
                        </Button>
                    </Box>
                </Grid>
            );
        }

        return (
            <Grid className={classes.card} container>
                <Box display='flex' justifyContent='center' alignItems='center' width='100%'>
                    <AddIcon className={classes.addIcon} />
                </Box>
            </Grid>
        );
    };

    return (
        <Fragment>
            <Box display='flex' justifyContent='center' alignItems='center'>
                {displayCard(1)}
                {displayCard(2)}
            </Box>
            
            <Box display='flex' justifyContent='center' alignItems='center'>
                {displayCard(3)}
                {displayCard(4)}
            </Box>

            <Typography className={classes.caption} variant='caption'>
                {selectedProducts.length}
                {selectedProducts.length === 1
                    ? ' Product'
                    : ' Products'
                } added
            </Typography>
        </Fragment>
    );
};

export default ProductCards;
