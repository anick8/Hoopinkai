import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Lazy load non-home routes for code splitting
const AboutUs = lazy(() => import('./pages/AboutUs'));
const SchoolTours = lazy(() => import('./pages/SchoolTours'));
const UpcomingEvents = lazy(() => import('./pages/UpcomingEvents'));
const PastEvents = lazy(() => import('./pages/PastEvents'));
const FlowFestDetail = lazy(() => import('./pages/FlowFestDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback component
function RouteLoading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        fontSize: '18px',
        color: '#6B5745',
      }}
    >
      Loading...
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/about-us',
        element: (
          <Suspense fallback={<RouteLoading />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: '/schooltours',
        element: (
          <Suspense fallback={<RouteLoading />}>
            <SchoolTours />
          </Suspense>
        ),
      },
      {
        path: '/upcoming-events',
        element: (
          <Suspense fallback={<RouteLoading />}>
            <UpcomingEvents />
          </Suspense>
        ),
      },
      {
        path: '/past-events',
        element: (
          <Suspense fallback={<RouteLoading />}>
            <PastEvents />
          </Suspense>
        ),
      },
      {
        path: '/past-events/:slug',
        element: (
          <Suspense fallback={<RouteLoading />}>
            <FlowFestDetail />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<RouteLoading />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
