import './App.css'
import HomePage from './components/HomePage'
import AuthPage from './components/AuthPage'
import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import ProfilePage from './components/ProfilePage'


export default function App() {
  return <>
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/:username' element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  </>
}