import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SchoolTours from './pages/SchoolTours';
import UpcomingEvents from './pages/UpcomingEvents';
import PastEvents from './pages/PastEvents';
import FlowFestDetail from './pages/FlowFestDetail';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/schooltours', element: <SchoolTours /> },
      { path: '/upcoming-events', element: <UpcomingEvents /> },
      { path: '/past-events', element: <PastEvents /> },
      { path: '/past-events/:slug', element: <FlowFestDetail /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
