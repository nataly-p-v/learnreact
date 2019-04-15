import React from 'react';
import Movies from './movies/movies';
import { Switch, Route} from 'react-router-dom';
import Initial from "./initial/initial";
import ResultPage from "./resultPage/resultPage";


const Main = () => (
    <Switch>
        <Route exact path={"/movies"} component={Movies} />
        <Route path="/movie/:movieId" component={Movies}/>
        <Route exact path={"/"} component={Initial}/>
        <Route exact path={"/result"} component={ResultPage}/>
    </Switch>
);
export default Main;
