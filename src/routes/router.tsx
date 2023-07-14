import { createBrowserRouter } from 'react-router-dom';
import Index from '@/pages/Index';
import { route } from '@/@types/route';
import Contents from '@/pages/Contents';
import Credit from '@/pages/Credit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: `${route.Contents}/:id?`,
    element: <Contents />,
  },
  {
    path: route.Credit,
    element: <Credit />,
  },
]);

export default router;
