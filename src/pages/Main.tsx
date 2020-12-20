import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RecipeList from './RecipeList';
import AddRecipe from '../pages/AddRecipe';
import Login from './Login';

const Main = () => {
  return (
    <div style={{ padding: '20px 30px' }}>
      <Router>
        {/* <Link to="/add">add</Link> */}

        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/list" component={RecipeList}></Route>
          <Route path="/add" component={AddRecipe}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
