import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout';

import TweetsPage from 'pages/TweetsPage';
import HomePage from 'pages/HomePage/HomePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
