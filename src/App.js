import 'antd/dist/antd.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from './lib/routing/GlobalRoutes';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './lib/functions/ErrorFallBack';
import RootLayout from './ui/layouts/RootLayout';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Switch>
          <RootLayout>
            {ROUTES.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </RootLayout>
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
