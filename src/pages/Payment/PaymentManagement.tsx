import { Receipt, List, DollarSign, FileText } from 'lucide-react'
import './PaymentManagement.css'

interface PaymentRecord {
  id: string
  code: string
  agencyName: string
  date: string
  amount: number
  status: 'completed' | 'pending' | 'cancelled'
  creator: string
}

const PaymentManagement = () => {
  // Mock data
  const payments: PaymentRecord[] = [
    {
      id: '1',
      code: 'PT00002',
      agencyName: 'Đại lý Đại',
      date: '16/5/2024',
      amount: 300000,
      status: 'completed',
      creator: 'Nguyễn Trọng Đại'
    }
  ]

  const totalPayments = payments.length
  const totalAmount = payments.reduce((sum, payment) => sum + payment.amount, 0)

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Hoàn thành'
      case 'pending':
        return 'Đang xử lý'
      case 'cancelled':
        return 'Đã hủy'
      default:
        return status
    }
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'completed':
        return 'status-completed'
      case 'pending':
        return 'status-pending'
      case 'cancelled':
        return 'status-cancelled'
      default:
        return ''
    }
  }

  return (
    <div className="payment-management">
      {/* Header */}
      <div className="payment-header">
        <div className="header-icon-box">
          <Receipt size={36} />
        </div>
        <div className="header-text">
          <h1 className="payment-title">Phiếu Thu chờ thanh toán - Đại lý Đại</h1>
          <p className="payment-subtitle">Xem và thanh toán các phiếu thu đang chờ xử lý.</p>
        </div>
      </div>

      {/* Statistics */}
      <div className="payment-stats">
        <div className="stat-box stat-blue">
          <div className="stat-label">Tổng số phiếu thu</div>
          <div className="stat-value">{totalPayments}</div>
          <div className="stat-icon blue">
            <List size={28} />
          </div>
        </div>

        <div className="stat-box stat-green">
          <div className="stat-label">Tổng tiền đã thu</div>
          <div className="stat-value">{totalAmount.toLocaleString('vi-VN')} VND</div>
          <div className="stat-icon green">
            <DollarSign size={28} />
          </div>
        </div>
      </div>

      {/* Payment Table */}
      <div className="payment-table-container">
        <table className="payment-table">
          <thead>
            <tr>
              <th>MÃ PHIẾU THU</th>
              <th>TÊN ĐẠI LÝ</th>
              <th>NGÀY THU</th>
              <th>SỐ TIỀN THU</th>
              <th>TRẠNG THÁI</th>
              <th>NGƯỜI TẠO</th>
              <th>THAO TÁC</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>
                  <span className="payment-code">{payment.code}</span>
                </td>
                <td>
                  <span className="agency-name">{payment.agencyName}</span>
                </td>
                <td className="text-muted">{payment.date}</td>
                <td>
                  <span className="amount-value">{payment.amount.toLocaleString('vi-VN')} VND</span>
                </td>
                <td>
                  <span className={`status-tag ${getStatusClass(payment.status)}`}>
                    {getStatusText(payment.status)}
                  </span>
                </td>
                <td className="text-muted">{payment.creator}</td>
                <td>
                  <button className="action-button">
                    <FileText size={16} />
                    Chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaymentManagement
