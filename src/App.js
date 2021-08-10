import { Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetupsPage';
import FavoritesPage from './pages/FavoritesPage';
import NewMeetupPage from './pages/NewMeetupPage';

function App() {
  return (
   <div>
     <Route path='/'>
       <AllMeetupsPage />
     </Route>
     <Route path='/new-meetup'>
       <NewMeetupPage />
     </Route>
     <Route path='/favorites'>
       <FavoritesPage />
     </Route>
   </div>
  );
}

export default App;
