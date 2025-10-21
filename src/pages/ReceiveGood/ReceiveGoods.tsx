import { ClipboardList, Package2, ShoppingCart, Calendar, FileText, DollarSign, MoreVertical } from 'lucide-react'
import './ReceiveGoods.css'

interface ImportRecord {
  id: string
  code: string
  date: string
  agency: {
    name: string
    phone: string
  }
  products: {
    name: string
    quantity: number
  }[]
  totalAmount: number
  status: 'delivered' | 'pending' | 'cancelled'
}

const ReceiveGoods = () => {
  // Mock data
  const importRecords: ImportRecord[] = [
    {
      id: '1',
      code: 'PX002',
      date: '2024-05-11',
      agency: {
        name: 'Đại lý Đại',
        phone: 'N/A'
      },
      products: [
        { name: 'Nước ngọt Pepsi (80 pcs)', quantity: 80 },
        { name: 'Sữa Vinamilk (3 pcs)', quantity: 3 }
      ],
      totalAmount: 900000,
      status: 'delivered'
    }
  ]

  const totalImports = importRecords.length
  const totalValue = importRecords.reduce((sum, record) => sum + record.totalAmount, 0)

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Đã giao hàng'
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
      case 'delivered':
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
          <h1 className="receive-title">Lịch sử Nhập Kho</h1>
          <p className="receive-subtitle">
            Lịch sử các phiếu nhập hàng vào kho tổng cho đại lý của bạn.
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
            <div className="stat-label">Tổng Số Phiếu Nhập</div>
            <div className="stat-value">{totalImports}</div>
          </div>
        </div>

        <div className="receive-stat-card stat-green">
          <div className="stat-icon-wrapper green">
            <ShoppingCart size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-label">Tổng Giá Trị Đã Nhập</div>
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
                  <span>MÃ PHIẾU</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <Calendar size={16} />
                  <span>NGÀY XUẤT</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <FileText size={16} />
                  <span>ĐẠI LÝ</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <Package2 size={16} />
                  <span>SẢN PHẨM</span>
                </div>
              </th>
              <th>
                <div className="th-content">
                  <DollarSign size={16} />
                  <span>TỔNG TIỀN</span>
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
                  <span>HÀNH ĐỘNG</span>
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
                <td className="text-gray">{record.date}</td>
                <td>
                  <div className="agency-info">
                    <div className="agency-name">{record.agency.name}</div>
                    <div className="agency-phone">📞 {record.agency.phone}</div>
                  </div>
                </td>
                <td>
                  <div className="products-list">
                    {record.products.map((product, idx) => (
                      <div key={idx} className="product-item">
                        {product.name}
                      </div>
                    ))}
                  </div>
                </td>
                <td>
                  <span className="amount">{record.totalAmount.toLocaleString('vi-VN')} VND</span>
                </td>
                <td>
                  <span className={`status-badge ${getStatusClass(record.status)}`}>
                    {getStatusText(record.status)}
                  </span>
                </td>
                <td>
                  <button className="action-btn">
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
