import React from 'react';
import ResultPage from './resultPage/resultPage';
import Initial from './initial/initial';
import { Switch, Route} from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path={"/"} component={Initial}/>
        <Route exact path={"/result"} component={ResultPage}/>
    </Switch>
);
export default Main;
