import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../routers/ProtectedRoute';
import { Suspense } from 'react';
import { Dashboard } from '../views/Dashboard';



const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'));
const RegisterPage = React.lazy(() => import('../views/register/RegisterPage'));
const IndexPage = React.lazy(() => import('../views/Index/IndexPage'));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<IndexPage/>} />
        <Route path='/login' element={<h1>Login</h1>} />
        <Route path='/register' element={<RegisterPage />} />
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
