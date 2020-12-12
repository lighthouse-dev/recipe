import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1)
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  })
);

const AddRecipe = () => {
  const classes = useStyles();

  return (
    <>
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.margin}
      >
        Large
      </Button>
    </>
  );
};

export default AddRecipe;
