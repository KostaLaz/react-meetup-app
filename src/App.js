import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetupsPage';
import FavoritesPage from './pages/FavoritesPage';
import NewMeetupPage from './pages/NewMeetupPage';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <Layout>
      <Switch>
      <Route path='/' exact>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup' >
        <NewMeetupPage />
      </Route>
      <Route path='/favorites' >
        <FavoritesPage />
      </Route>
      </Switch>
    </Layout>
   
  );
}

export default App;
