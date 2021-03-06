import ErrorMessage from 'components/errorMessage';
import FavoritePage from 'containers/favorite-page';
import HomePage from 'containers/home-page';
import NotFoundPage from 'containers/not-found-page';
import PeoplePage from 'containers/people-page';
import PersonPage from 'containers/person-page';
import SearchPage from 'containers/search-page';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/people',
    exact: true,
    component: PeoplePage,
  },
  {
    path: '/people/:id',
    exact: true,
    component: PersonPage,
  },
  {
    path: '/favorites',
    exact: true,
    component: FavoritePage,
  },
  {
    path: '/search',
    exact: true,
    component: SearchPage,
  },
  {
    path: '/fail',
    exact: true,
    component: ErrorMessage,
  },
  {
    path: '/not-found',
    exact: true,
    component: NotFoundPage,
  },
  {
    path: '*',
    exact: false,
    component: NotFoundPage,
  },
];

export default routesConfig;
