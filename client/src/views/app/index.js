import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';
import { ProtectedRoute,   } from '../../helpers/authHelper';
import Register from '../user/register';

 
const AssetManager = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './AssetManager/AssetManager')
);
 
const BrandKit = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './BrandKit/BrandKit')
);
 
const MyProject = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './MyProject/MyProject')
);
 
const Setting = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './Setting/Setting')
);




// public route
 

const App = ({ match }) => {
  return (
    <AppLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/gogo`} />
            <ProtectedRoute
              path={`${match.url}/asset-manager`}
              component={AssetManager}
              roles={['Admin','Seller','Client']}
            />
            {/* <Route
              path={`${match.url}/asset-manager`}
              render={(props) => <AssetManager {...props} />}
            />  */}
            <Route
              path={`${match.url}/brand-kit`}
              render={(props) => <BrandKit {...props} />}
            /> 
            <Route
              path={`${match.url}/my-project`}
              render={(props) => <MyProject {...props} />}
            />
            <Route
              path={`${match.url}/setting`}
              render={(props) => <Setting {...props} />}
            /> 
            {/* <Redirect to="/error" /> */}
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
