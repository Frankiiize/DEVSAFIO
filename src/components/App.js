import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../routers/ProtectedRoute';
import { Suspense } from 'react';
import { ProviderAuth } from '../context/authContext'

const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'));
const SuspenseScreen = React.lazy(() => import('../components/loaders/SuspenseScreen'));
const RegisterPage = React.lazy(() => import('../views/register/RegisterPage'));
const IndexPage = React.lazy(() => import('../views/Index/IndexPage'));
const JobProfile = React.lazy(() => import('../views/jobProfile/JobProfile'));
const Postulate = React.lazy(() => import('../views/postulate/Postulate'));
const Login = React.lazy(() => import('../views/Login/Login'));
const Dashboard = React.lazy(() => import('../views/Dashboard'));

function App() {
  return (
    <ProviderAuth>
      <Suspense fallback={<SuspenseScreen />}>
        <Routes>
          <Route path="/" element={<DefaultLayout />} >
            <Route index element={<IndexPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/jobProfile' element={<JobProfile />} />
            <Route path='/postulate' element={<Postulate />} />
            <Route path='/login' element={<Login />} />
            <Route exact path='/dashboard' element={<ProtectedRoute />}>
              <Route
                index
                name='Dashboard'
                element={<Dashboard />} />
            </Route>
          </Route>

        </Routes>
      </Suspense>
    </ProviderAuth>

  );
}

export default App;
