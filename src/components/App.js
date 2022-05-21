import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../routers/ProtectedRoute';
import { Suspense } from 'react';
import { Dashboard } from '../views/Dashboard';

//const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'));
const RegisterPage = React.lazy(() => import('../views/register/RegisterPage'));
const JobProfile = React.lazy(() => import('../views/jobProfile/JobProfile'));
const Postulate = React.lazy(() => import('../views/postulate/Postulate'));


function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<h1>Index</h1>} />
        <Route path='/login' element={<h1>Login</h1>} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/jobProfile' element={<JobProfile />} />
        <Route path='/postulate' element={<Postulate />} />

        <Route exact path='/dashboard' element={<ProtectedRoute />}>
          <Route
            exact
            path='/dashboard'
            name='Dashboard'
            element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>

  );
}

export default App;
