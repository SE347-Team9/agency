import { useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, 
  TrendingUp,
  CreditCard,
  ArrowRight,
  Package,
  DollarSign,
  Truck,
  Building2
} from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts'
import './AgencyDashboard.css'

const AgencyDashboard = () => {
  const navigate = useNavigate()

  // Mock data - Công nợ cần trả
  const debtTrendData = [
    { month: 'T1', congNo: 45000000 },
    { month: 'T2', congNo: 62000000 },
    { month: 'T3', congNo: 50000000 },
    { month: 'T4', congNo: 75000000 },
    { month: 'T5', congNo: 68000000 },
    { month: 'T6', congNo: 58000000 },
  ]

  // Mock data - Tiền thanh toán theo tháng
  const paymentTrendData = [
    { month: 'T1', thanhToan: 35000000 },
    { month: 'T2', thanhToan: 50000000 },
    { month: 'T3', thanhToan: 42000000 },
    { month: 'T4', thanhToan: 68000000 },
    { month: 'T5', thanhToan: 55000000 },
    { month: 'T6', thanhToan: 72000000 },
  ]

  // Format số tiền VND
  const formatCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(1)} tỷ`
    }
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(0)} tr`
    }
    return value.toLocaleString('vi-VN')
  }

  // Custom tooltip cho biểu đồ
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="agency-dashboard__tooltip">
          <p className="agency-dashboard__tooltip-label">{`Tháng ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.dataKey.includes('phieu') 
                ? `${entry.name}: ${entry.value} phiếu`
                : `${entry.name}: ${entry.value.toLocaleString('vi-VN')} VNĐ`
              }
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  const statistics = [
    {
      id: 'imports',
      label: 'Phiếu nhập tháng này',
      value: '11',
      icon: Package,
      gradient: 'blue',
      change: '+3',
      description: 'phiếu nhập hàng'
    },
    {
      id: 'debt',
      label: 'Công nợ cần trả',
      value: '58 tr',
      icon: DollarSign,
      gradient: 'orange',
      change: '-14%',
      description: 'giảm so với tháng trước'
    },
    {
      id: 'payments',
      label: 'Đã thanh toán tháng này',
      value: '72 tr',
      icon: CreditCard,
      gradient: 'purple',
      change: '+31%',
      description: 'so với tháng trước'
    }
  ]

  const quickLinks = [
    {
      id: 'receive',
      icon: Package,
      title: 'Nhận hàng',
      description: 'Quản lý các phiếu nhập hàng',
      path: '/receive-goods',
      color: 'blue'
    },
    {
      id: 'payment',
      icon: CreditCard,
      title: 'Quản lý thanh toán',
      description: 'Ghi nhận các khoản thanh toán',
      path: '/payment-management',
      color: 'purple'
    },
    {
      id: 'distribution',
      icon: Truck,
      title: 'Yêu cầu phân phối',
      description: 'Tạo yêu cầu phân phối hàng hóa',
      path: '/distribution-request',
      color: 'orange'
    },
    {
      id: 'agency',
      icon: Building2,
      title: 'Thông tin đại lý',
      description: 'Xem và cập nhật thông tin đại lý',
      path: '/agency-management',
      color: 'green'
    }
  ]

  return (
    <div className="agency-dashboard-page">
      {/* Header Section */}
      <div className="agency-dashboard__header">
        <div className="agency-dashboard__header-icon">
          <LayoutDashboard size={36} />
        </div>
        <div className="agency-dashboard__header-text">
          <h1 className="agency-dashboard__title">Trang chủ đại lý</h1>
          <p className="agency-dashboard__subtitle">Tổng quan hoạt động kinh doanh của bạn</p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="agency-dashboard__stats-grid">
        {statistics.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.id}
              className={`agency-dashboard__stat-card agency-dashboard__stat-card--${stat.gradient}`}
            >
              <div className="agency-dashboard__stat-content">
                <div className="agency-dashboard__stat-header">
                  <span className="agency-dashboard__stat-label">{stat.label}</span>
                  {stat.change && (
                    <span className={`agency-dashboard__stat-change ${stat.change.startsWith('-') ? 'negative' : ''}`}>
                      <TrendingUp size={14} />
                      {stat.change}
                    </span>
                  )}
                </div>
                <div className="agency-dashboard__stat-value">{stat.value}</div>
                <div className="agency-dashboard__stat-description">{stat.description}</div>
              </div>
              <div className="agency-dashboard__stat-icon">
                <Icon size={48} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="agency-dashboard__charts-section">
        {/* Row 2: Line Charts */}
        <div className="agency-dashboard__charts-row">
          {/* Biểu đồ công nợ cần trả */}
          <div className="agency-dashboard__chart-card">
            <div className="agency-dashboard__chart-header">
              <h3 className="agency-dashboard__chart-title">Công nợ cần trả</h3>
              <span className="agency-dashboard__chart-subtitle">6 tháng gần nhất - Tổng nợ cần thanh toán</span>
            </div>
            <div className="agency-dashboard__chart-content">
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={debtTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tickFormatter={formatCurrency} tick={{ fontSize: 11 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="congNo" 
                    name="Công nợ" 
                    stroke="#fb923c" 
                    strokeWidth={3}
                    dot={{ fill: '#fb923c', strokeWidth: 2, r: 5 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Biểu đồ thanh toán */}
          <div className="agency-dashboard__chart-card">
            <div className="agency-dashboard__chart-header">
              <h3 className="agency-dashboard__chart-title">Thanh toán cho nhà cung cấp</h3>
              <span className="agency-dashboard__chart-subtitle">6 tháng gần nhất - Số tiền đã thanh toán</span>
            </div>
            <div className="agency-dashboard__chart-content">
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={paymentTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tickFormatter={formatCurrency} tick={{ fontSize: 11 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="thanhToan" 
                    name="Thanh toán" 
                    stroke="#818cf8" 
                    strokeWidth={3}
                    dot={{ fill: '#818cf8', strokeWidth: 2, r: 5 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="agency-dashboard__quick-links">
        <div className="agency-dashboard__section-title">
          <h2>Truy cập nhanh</h2>
          <p>Các chức năng thường dùng</p>
        </div>
        <div className="agency-dashboard__links-grid">
          {quickLinks.map((link) => {
            const Icon = link.icon
            return (
              <button
                key={link.id}
                className={`agency-dashboard__link-card agency-dashboard__link-card--${link.color}`}
                onClick={() => navigate(link.path)}
              >
                <div className="agency-dashboard__link-icon">
                  <Icon size={28} />
                </div>
                <div className="agency-dashboard__link-content">
                  <h3 className="agency-dashboard__link-title">{link.title}</h3>
                  <p className="agency-dashboard__link-description">{link.description}</p>
                </div>
                <div className="agency-dashboard__link-arrow">
                  <ArrowRight size={20} />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AgencyDashboard
