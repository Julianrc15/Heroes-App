import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { PrivateRoute } from './PrivateRoute';

import { LoginScreen } from '../login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <Router>
        
        <Routes>

            <Route path="/login" element={<LoginScreen/>}/>

            <Route path="/*" element={
              <PrivateRoute>
                <DashboardRoutes/>
              </PrivateRoute>
            }
            // <Route path="/*" element={<DashboardRoutes/>}            
            />
         
        </Routes>
    </Router>
  )
}
