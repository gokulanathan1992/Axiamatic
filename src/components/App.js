import Button from '@material-ui/core/Button';
import Psp from './Psp';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  header: {
    '& .MuiButton-root': {
      color: '#afbdd6',
      textDecoration: 'underline',
      textTransform: 'capitalize',
    },
    '& .MuiTypography-h5': { fontWeight: 'bold' },
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#000',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <header className={classes.header}>
        <Typography variant='h5'>axiamatic</Typography>
        <Button>Exit Setup</Button>
      </header>
      
      <Psp />
    </div>
  );
}
