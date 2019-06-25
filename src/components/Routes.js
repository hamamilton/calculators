import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import Sensitivity from './pages/SensitivityPage';
import NotFoundPage from './pages/NotFoundPage';
import AdjustmentCosts from './pages/AdjustmentCosts';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/sensitivity' component={Sensitivity} />
        <Route path='/404' component={NotFoundPage} />
        <Route path='/adjustmentcosts' component={AdjustmentCosts} />
      </Switch>
    );
  }
}

export default Routes;
