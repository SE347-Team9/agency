import { useState } from 'react'
import { Package, Plus, MapPin, Clock, Send, RotateCcw } from 'lucide-react'
import './DistributionRequest.css'

interface Product {
  id: string
  name: string
  quantity: number
  unit: string
}

interface ProductInputRow {
  rowId: string
  selectedProduct: string
  quantity: number
}

interface OrderHistory {
  id: string
  code: string
  status: string
  productCount: number
  address: string
  date: string
  sender: string
  products: { name: string; quantity: number }[]
}

const DistributionRequest = () => {
  const [productRows, setProductRows] = useState<ProductInputRow[]>([
    { rowId: Date.now().toString(), selectedProduct: '', quantity: 1 }
  ])
  const [products, setProducts] = useState<Product[]>([])
  const [address, setAddress] = useState('')
  const [onHold, setOnHold] = useState(false)

  // Mock data for order history
  const orderHistory: OrderHistory[] = [
    {
      id: '1',
      code: '#DH000002',
      status: 'Không xác định',
      productCount: 2,
      address: 'Địa chỉ từ hệ thống',
      date: '11/7/2025',
      sender: 'Nguyễn Trọng Đại',
      products: [
        { name: 'Nước ngọt Pepsi', quantity: 80 },
        { name: 'Sữa Vinamilk', quantity: 3 }
      ]
    }
  ]

  const handleAddProductRow = () => {
    setProductRows([
      ...productRows,
      { rowId: Date.now().toString(), selectedProduct: '', quantity: 1 }
    ])
  }

  const handleRemoveProductRow = (rowId: string) => {
    setProductRows(productRows.filter(row => row.rowId !== rowId))
  }

  const handleProductRowChange = (rowId: string, field: string, value: any) => {
    setProductRows(productRows.map(row =>
      row.rowId === rowId
        ? { ...row, [field]: value }
        : row
    ))
  }

  const handleSubmit = () => {
    console.log('Submit request:', { products, address, onHold })
    // Handle form submission
  }

  const handleReset = () => {
    setProducts([])
    setAddress('')
    setOnHold(false)
    setProductRows([{ rowId: Date.now().toString(), selectedProduct: '', quantity: 1 }])
  }

  return (
    <div className="distribution-request">
      {/* Header */}
      <div className="distribution-header">
        <div className="header-icon-box">
          <Package size={36} />
        </div>
        <div className="header-text">
          <h1 className="distribution-title">Hệ thống Phân phối Hàng hóa</h1>
          <p className="distribution-subtitle">
            Gửi yêu cầu phân phối sản phẩm một cách nhanh chóng và theo dõi trạng thái real-time
          </p>
        </div>
      </div>

      {/* Create New Request Form */}
      <div className="request-form-section">
        <div className="form-header">
          <Send size={20} />
          <h2>Tạo yêu cầu mới</h2>
        </div>
        <p className="form-description">Điền thông tin chi tiết để gửi yêu cầu phân phối</p>

        <div className="form-content">
          {/* Product List Section */}
          <div className="distribution-request__form-group">
            <label className="distribution-request__form-label">
              <Package size={18} />
              <span>Danh sách sản phẩm</span>
              <span className="required">*</span>
            </label>

            {productRows.map((row) => (
              <div key={row.rowId} className="product-input-row">
                <div className="input-group">
                  <label>Sản phẩm</label>
                  <select 
                    className="distribution-request__form-select"
                    value={row.selectedProduct}
                    onChange={(e) => handleProductRowChange(row.rowId, 'selectedProduct', e.target.value)}
                  >
                    <option value="">Chọn sản phẩm...</option>
                    <option value="Nước ngọt Pepsi">Nước ngọt Pepsi</option>
                    <option value="Sữa Vinamilk">Sữa Vinamilk</option>
                    <option value="Bánh quy Oreo">Bánh quy Oreo</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Số lượng</label>
                  <input 
                    type="number" 
                    className="distribution-request__form-input"
                    value={row.quantity}
                    onChange={(e) => handleProductRowChange(row.rowId, 'quantity', Number(e.target.value))}
                    min="1"
                  />
                </div>

                <div className="input-group">
                  <label>Đơn vị tính</label>
                  <input 
                    type="text" 
                    className="distribution-request__form-input disabled"
                    value="Tự động điền từ sản phẩm"
                    disabled
                  />
                </div>

                <div className="product-row-actions">
                  {productRows.length > 1 && (
                    <button 
                      className="btn-remove-row"
                      onClick={() => handleRemoveProductRow(row.rowId)}
                    >
                      Xóa
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button 
              className="btn-add-row"
              onClick={handleAddProductRow}
            >
              <Plus size={16} />
              Thêm sản phẩm
            </button>

            {products.length > 0 && (
              <div className="added-products">
                {products.map((product) => (
                  <div key={product.id} className="product-tag">
                    <Package size={14} />
                    <span>{product.name} - {product.quantity} {product.unit}</span>
                    <button 
                      className="remove-btn"
                      onClick={() => setProducts(products.filter(p => p.id !== product.id))}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Delivery Address Section */}
          <div className="distribution-request__form-group">
            <label className="distribution-request__form-label">
              <MapPin size={18} />
              <span>Địa chỉ giao hàng</span>
              <span className="required">*</span>
            </label>

            <div className="address-input-wrapper">
              <textarea
                className="form-textarea"
                placeholder="Nhập địa chỉ chi tiết bao gồm số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={4}
              />
              <div className="address-hint">
                <span>💡</span>
                <span>Địa chỉ chi tiết giúp quá trình giao hàng được nhanh chóng và chính xác</span>
              </div>
            </div>
          </div>

          {/* Testing Tools Section */}
          <div className="testing-section">
            <div className="testing-header">
              <span>🔧</span>
              <span>Công cụ Test</span>
            </div>
            <label className="checkbox-label">
              <input 
                type="checkbox"
                checked={onHold}
                onChange={(e) => setOnHold(e.target.checked)}
              />
              <span>Bước trạng thái "Tạm hoãn" cho yêu cầu tiếp theo</span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button className="btn-submit" onClick={handleSubmit}>
              <Send size={20} />
              Gửi yêu cầu phân phối
            </button>
            <button className="btn-reset" onClick={handleReset}>
              <RotateCcw size={20} />
              Làm mới
            </button>
          </div>
        </div>
      </div>

      {/* Order History Section */}
      <div className="order-history-section">
        <div className="history-header">
          <Clock size={24} />
          <h2>Lịch sử đơn hàng</h2>
          <span className="history-count">{orderHistory.length} yêu cầu</span>
        </div>

        <div className="history-list">
          {orderHistory.map((order) => (
            <div key={order.id} className="history-card">
              <div className="history-card-header">
                <div className="order-code">
                  <strong>{order.code}</strong>
                  <span className={`status-badge ${order.status === 'Không xác định' ? 'status-undefined' : ''}`}>
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="history-card-body">
                <div className="history-info-row">
                  <div className="info-item">
                    <Package size={16} />
                    <span>{order.productCount} sản phẩm</span>
                  </div>
                  <div className="info-item">
                    <MapPin size={16} />
                    <span>{order.address}</span>
                  </div>
                </div>

                <div className="history-info-row">
                  <div className="info-item">
                    <Clock size={16} />
                    <span>{order.date}</span>
                  </div>
                  <div className="info-item">
                    <span>👤</span>
                    <span>Người gửi: {order.sender}</span>
                  </div>
                </div>

                <div className="product-list">
                  <strong>Danh sách sản phẩm:</strong>
                  <ul>
                    {order.products.map((product, idx) => (
                      <li key={idx}>
                        {product.name}: {product.quantity} Cái
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-confirm">
                  Xác nhận nhận hàng bởi agency
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Information Section */}
      <div className="info-section">
        <div className="info-section-header">
          <div className="info-icon">
            <Package size={28} />
          </div>
          <h3>Thông tin quan trọng</h3>
        </div>
        <div className="info-grid">
          <div className="info-card">
            <Clock size={20} />
            <span>Xử lý trong 24-48 giờ làm việc</span>
          </div>
          <div className="info-card">
            <MapPin size={20} />
            <span>Địa chỉ phải chính xác</span>
          </div>
          <div className="info-card">
            <Package size={20} />
            <span>Kiểm tra hạn mức sản phẩm</span>
          </div>
          <div className="info-card">
            <Send size={20} />
            <span>Cập nhật trạng thái tự động</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DistributionRequest
