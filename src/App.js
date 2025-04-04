import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import { UserAuthContextProvider } from './context/userAuthContext';
import { DrawerContextProvider } from './context/drawerContext';

import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import Chat from './pages/Chat/Chat';
import PrivacyPolicy from './pages/Privacy-Policy/PrivacyPolicy';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route
            path='/chat'
            element={
              <ProtectedRoute>
                <DrawerContextProvider>
                  <Chat />
                </DrawerContextProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path='/privacy-policy'
            element={
              <PrivacyPolicy />
            }
          />
          {/* <Route path='*' element={<PageNotFound />} /> */}
        </Routes>
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;