import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './routes/auth/Login.tsx'
import Register from './routes/auth/Register.tsx'
import MainLayout from './components/layout/MainLayout.tsx'
import ExportManagement from './pages/ExportManagement.tsx'
import ReceiveGoods from './pages/ReceiveGoods.tsx'
import DistributionRequest from './pages/DistributionRequest.tsx'
import AgencyManagement from './pages/AgencyManagement.tsx'
import PaymentManagement from './pages/PaymentManagement.tsx'
import Reports from './pages/Reports.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/export-management" element={
          <MainLayout>
            <ExportManagement />
          </MainLayout>
        } />
        <Route path="/receive-goods" element={
          <MainLayout>
            <ReceiveGoods />
          </MainLayout>
        } />
        <Route path="/distribution-request" element={
          <MainLayout>
            <DistributionRequest />
          </MainLayout>
        } />
        <Route path="/agency-management" element={
          <MainLayout>
            <AgencyManagement />
          </MainLayout>
        } />
        <Route path="/payment-management" element={
          <MainLayout>
            <PaymentManagement />
          </MainLayout>
        } />
        <Route path="/reports" element={
          <MainLayout>
            <Reports />
          </MainLayout>
        } />
        <Route path="/" element={<Navigate to="/export-management" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
