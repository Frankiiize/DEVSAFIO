import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../routers/ProtectedRoute';
import { Suspense } from 'react';
import DefaultLayout from '../layout/DefaultLayout';

//const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'));
const RegisterPage = React.lazy(() => import('../views/register/RegisterPage'));
const IndexPage = React.lazy(() => import('../views/Index/IndexPage'));
const JobProfile = React.lazy(() => import('../views/jobProfile/JobProfile'));
const Login = React.lazy(() => import('../views/Login/Login'));
const Dashboard = React.lazy(() => import('../views/Dashboard'));

function App() {
  return (
    <Suspense fallback={ <div className="flex items-center justify-center min-h-screen bg-primary">
    <div className="spinner-border animate-spin inline-block w-24 h-24 border-4 rounded-full text-white" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>}>
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
