import React from 'react';
import Helloworld1 from './helloworld1/helloworld1';
import Helloworld2 from './helloworld2/helloworld2';
import Helloworld3 from './helloworld3/helloworld3';
import Helloworld4 from './helloworld4/helloworld4';
import Initial from './initial/initial';
import { Switch, Route} from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path={"/"} component={Initial}/>
        <Route exact path={"/helloworld1"} component={Helloworld1}/>
        <Route exact path={"/helloworld2"} component={Helloworld2}/>
        <Route exact path={"/helloworld3"} component={Helloworld3}/>
        <Route exact path={"/helloworld4"} component={Helloworld4}/>
    </Switch>
);
export default Main;
