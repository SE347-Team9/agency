
import { ClipboardList, Package2, ShoppingCart, Calendar, FileText, DollarSign, MoreVertical } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import './ReceiveGoods.css'

interface ImportRecord {
  id: string
  code: string
  shipDate: string
  receiveDate: string
  agency: {
    name: string
    phone: string
  }
  products: {
    name: string
    batch: string
    mfgDate: string
    expDate: string
    quantity: number
    price: number
  }[]
  totalAmount: number
  status: 'received' | 'pending' | 'cancelled'
}

const ReceiveGoods = () => {
  const navigate = useNavigate();
  // Mock data
  const importRecords: ImportRecord[] = [
    {
      id: '1',
      code: 'PX002',
      shipDate: '2024-05-10',
      receiveDate: '2024-05-11',
      agency: {
        name: 'Đại lý Đại',
        phone: 'N/A'
      },
      products: [
        { name: 'Nước ngọt Pepsi', batch: 'LO-20260110', mfgDate: '2024-01-15', expDate: '2025-01-15', quantity: 80, price: 9000 },
        { name: 'Sữa Vinamilk', batch: 'LO-20260110', mfgDate: '2024-02-20', expDate: '2025-02-20', quantity: 3, price: 60000 }
      ],
      totalAmount: 900000,
      status: 'received'
    }
  ]

  const totalImports = importRecords.length
  const totalValue = importRecords.reduce((sum, record) => sum + record.totalAmount, 0)

  const getStatusText = (status: string) => {
    switch (status) {
      case 'received':
        return 'Đã nhận'
      case 'pending':
        return 'Chờ nhận'
      case 'cancelled':
        return 'Đã hủy'
      default:
        return status
    }
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'received':
        return 'status-delivered'
      case 'pending':
        return 'status-pending'
      case 'cancelled':
        return 'status-cancelled'
      default:
        return ''
    }
  }

  return (
    <div className="receive-goods">
      {/* Header */}
      <div className="receive-header">
        <div className="header-icon-box">
          <ClipboardList size={36} />
        </div>
        <div className="header-text">
          <h1 className="receive-title">Lịch Sử Nhận Hàng</h1>
          <p className="receive-subtitle">
            Lịch sử các phiếu nhận hàng cho đại lý của bạn.
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        <div className="receive-stat-card stat-blue">
          <div className="stat-icon-wrapper blue">
            <Package2 size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-label">Tổng Số Phiếu Nhận Hàng</div>
            <div className="stat-value">{totalImports}</div>
          </div>
        </div>

        <div className="receive-stat-card stat-green">
          <div className="stat-icon-wrapper green">
            <ShoppingCart size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-label">Tổng Giá Trị Nhập Hàng</div>
            <div className="stat-value">{totalValue.toLocaleString('vi-VN')} VND</div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>
                <div className="th-content">
                  <FileText size={16} />
                  <span>MÃ PHIẾU NHẬN</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <Calendar size={16} />
                  <span>NGÀY GIAO HÀNG</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <Calendar size={16} />
                  <span>NGÀY NHẬN HÀNG</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <Package2 size={16} />
                  <span>SỐ MẶT HÀNG</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <DollarSign size={16} />
                  <span>TỔNG GIÁ TRỊ</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <span>TRẠNG THÁI</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <MoreVertical size={16} />
                  <span>THAO TÁC</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {importRecords.map((record) => (
              <tr key={record.id}>
                <td>
                  <span className="record-code">{record.code}</span>
                </td>
                <td className="text-center">{new Date(record.shipDate).toLocaleDateString('vi-VN')}</td>
                <td className="text-center">{new Date(record.receiveDate).toLocaleDateString('vi-VN')}</td>
                <td className="text-center">{record.products.length}</td>
                <td>
                  <span className="amount">{record.totalAmount.toLocaleString('vi-VN')} VND</span>
                </td>
                <td>
                  <span className={`status-badge ${getStatusClass(record.status)}`}>
                    {getStatusText(record.status)}
                  </span>
                </td>
                <td>
                  <button className="action-btn" onClick={() => navigate(`/view-receive/${record.code}`)}>
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

export default ReceiveGoods
