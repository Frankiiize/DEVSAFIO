import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../routers/ProtectedRoute';
import { Suspense } from 'react';

const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'));
const SuspenseScreen = React.lazy(() => import('../components/loaders/SuspenseScreen'));
const RegisterPage = React.lazy(() => import('../views/register/RegisterPage'));
const IndexPage = React.lazy(() => import('../views/Index/IndexPage'));
const JobProfile = React.lazy(() => import('../views/jobProfile/JobProfile'));
const Login = React.lazy(() => import('../views/Login/Login'));
const Dashboard = React.lazy(() => import('../views/Dashboard'));

function App() {
  return (
    <Suspense fallback={<SuspenseScreen /> }>
      <Routes>
        <Route path="/" element={<DefaultLayout/>} >
          <Route index element={<IndexPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/jobProfile' element={<JobProfile />} />
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

  );
}

export default App;
