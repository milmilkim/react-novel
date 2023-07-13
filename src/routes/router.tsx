import { createBrowserRouter } from 'react-router-dom';
import Index from '@/pages/Index';
import Chapter1 from '@/contents/chapter1';
import { route } from '@/@types/route';
import Chapter2 from '@/contents/chapter2';
import Chapter3 from '@/contents/chapter3';
import Chapter4 from '@/contents/chapter4';
import Chapter5 from '@/contents/Chapter5';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: route.Chapter1,
    element: <Chapter1 />,
  },
  {
    path: route.Chapter2,
    element: <Chapter2 />,
  },
  {
    path: route.Chapter3,
    element: <Chapter3 />,
  },
  {
    path: route.Chapter4,
    element: <Chapter4 />,
  },
  {
    path: route.Chapter5,
    element: <Chapter5 />,
  },
]);

export default router;
