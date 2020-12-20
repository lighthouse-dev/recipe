import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import TopBar from './components/TopBar';
import Login from './pages/Login';
import RecipeList from './pages/RecipeList';
import AddRecipe from './pages/AddRecipe';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      padding: theme.spacing(1)
    }
  })
);

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Router>
        {/* <Link to="/add">add</Link> */}

        <Switch>
          <Route exact path="/" component={Login}></Route>
          <>
            <TopBar />
            <div className={classes.main}>
              <Route exact path="/list" component={RecipeList}></Route>
              <Route path="/add" component={AddRecipe}></Route>
            </div>
          </>
        </Switch>
      </Router>
    </>
  );
};

export default App;
