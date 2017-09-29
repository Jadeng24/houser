import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
// import Wizard1 from './components/Wizard1';
// import Wizard2 from './components/Wizard2';
// import Wizard3 from './components/Wizard3';
// import Wizard4 from './components/Wizard4';
// import Wizard5 from './components/Wizard5';

export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/step1" component={Wizard1} />
        <Route path="/step2" component={Wizard2} />
        <Route path="/step3" component={Wizard3} />
        <Route path="/step4" component={Wizard4} />
        <Route path="/step5" component={Wizard5} /> */}
        </Switch>
)
