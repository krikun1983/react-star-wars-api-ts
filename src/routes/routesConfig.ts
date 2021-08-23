import HomePage from 'containers/home-page';
import NotFoundPage from 'containers/not-found-page';
import PeoplePage from 'containers/people-page';
import PersonPage from 'containers/person-page';

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
