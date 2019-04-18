import React from 'react';
import Movies from './movies/movies';
import { Switch, Route} from 'react-router-dom';
import Initial from "./initial/initial";
import ResultPage from "./resultPage/resultPage";
import My404Component from "./My404Component/My404Component";


const Main = () => (
    <Switch>
        <Route exact path={"/movies"} component={Movies} />
        <Route path="/movie/:movieId" component={Movies}/>
        <Route exact path={"/"} component={Initial}/>
        <Route exact path={"/result"} component={ResultPage}/>
        <Route path='*' exact={true} component={My404Component} />
    </Switch>
);
export default Main;
