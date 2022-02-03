import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    checkIcon: {
        color: '#fff',
        display: 'none',
        fontSize: 12,
    },

    icons: {
        height: 20,
        width: 20,
    },

    listItem: {
        '& .MuiTypography-caption': { paddingLeft: 10 },
        padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
        width: '100%',
    },
}));

const ProductList = ({ item }) => {
    const classes = useStyles();

    return (
        <Box className={classes.listItem} display='flex' alignItems='center' justifyContent='space-between'>
            <Box display='flex' alignItems='center' justifyContent='flex-start'>
                <Avatar className={classes.icons} src={item.icon} />

                <Typography variant="caption">
                    {item.name}
                </Typography>
            </Box>

            <CheckIcon className={classes.checkIcon} fontSize='small' />
        </Box>
    )
};

export default ProductList;
