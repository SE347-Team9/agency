import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './routes/auth/Login.tsx'
import Register from './routes/auth/Register.tsx'
import HomePage from './routes/home/index.tsx'
import MainLayout from './components/layout/MainLayout.tsx'
import ExportManagement from './pages/Export/ExportManagement.tsx'
import ReceiveGoods from './pages/ReceiveGood/ReceiveGoods.tsx'
import ViewReceive from './pages/ReceiveGood/ViewReceive.tsx'
import DistributionRequest from './pages/Distribution/DistributionRequest.tsx'
import AgencyManagement from './pages/AgencyManagement/AgencyManagement.tsx'
import PaymentManagement from './pages/Payment/PaymentManagement.tsx'
import Reports from './pages/Report/Reports.tsx'
import AddReport from './pages/Report/AddReport.tsx'
import ViewReport from './pages/Report/ViewReport.tsx'
import NotFound from './routes/NotFound/NotFound.tsx'
import ViewImport from './pages/ReceiveGood/ViewImport.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
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
        <Route path="/view-receive/:code" element={
          <MainLayout>
            <ViewReceive />
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
        <Route path="/add-report" element={
          <MainLayout>
            <AddReport />
          </MainLayout>
        } />
        <Route path="/view-report/:reportId" element={
          <MainLayout>
            <ViewReport />
          </MainLayout>
        } />
        <Route path="/import/view/:id" element={
          <MainLayout>
            <ViewImport />
          </MainLayout>
        } />
        <Route path="/" element={<Navigate to="/export-management" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
