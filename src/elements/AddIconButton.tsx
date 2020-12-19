import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const AddIconButton = () => {
  const classes = useStyles();

  return (
    <Fab
      color="secondary"
      className={classes.absolute}
      onClick={() => {
        window.location.href = '/add';
      }}
    >
      <AddIcon />
    </Fab>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    absolute: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  })
);

export default AddIconButton;
