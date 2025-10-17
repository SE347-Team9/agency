import { FileText, Eye, FileSpreadsheet, Download, TrendingUp, TrendingDown, CheckCircle2, Users2 } from 'lucide-react'
import './Reports.css'

interface Report {
  id: string
  code: string
  title: string
  type: 'revenue' | 'debt' | 'activity'
  typeLabel: string
  createdDate: string
  status: 'completed'
  statusLabel: string
  createdAt: string
}

interface AgencyRevenue {
  code: string
  name: string
  revenue: number
}

interface AgencyDebt {
  code: string
  name: string
  debt: number
}

const Reports = () => {
  // Statistics data
  const totalRevenue = 2430000
  const totalDebt = 36460000
  const agencyCount = 2

  // Mock data
  const reports: Report[] = [
    {
      id: '1',
      code: 'BC4',
      title: 'Báo cáo doanh số',
      type: 'revenue',
      typeLabel: 'Doanh thu',
      createdDate: '11/10/2025',
      status: 'completed',
      statusLabel: 'Hoàn thành',
      createdAt: '1/1/1970'
    },
    {
      id: '2',
      code: 'BC5',
      title: 'Báo cáo công nợ',
      type: 'debt',
      typeLabel: 'Công nợ',
      createdDate: '11/9/2025',
      status: 'completed',
      statusLabel: 'Hoàn thành',
      createdAt: '1/1/1970'
    },
    {
      id: '3',
      code: 'BC1',
      title: 'Báo cáo doanh số',
      type: 'revenue',
      typeLabel: 'Doanh thu',
      createdDate: '30/6/2024',
      status: 'completed',
      statusLabel: 'Hoàn thành',
      createdAt: '30/6/2024'
    },
    {
      id: '4',
      code: 'BC2',
      title: 'Báo cáo công nợ',
      type: 'debt',
      typeLabel: 'Công nợ',
      createdDate: '30/6/2024',
      status: 'completed',
      statusLabel: 'Hoàn thành',
      createdAt: '30/6/2024'
    },
    {
      id: '5',
      code: 'BC3',
      title: 'Báo cáo',
      type: 'activity',
      typeLabel: 'Hoạt động',
      createdDate: '30/6/2024',
      status: 'completed',
      statusLabel: 'Hoàn thành',
      createdAt: '30/6/2024'
    }
  ]

  const topRevenueAgencies: AgencyRevenue[] = [
    { code: 'DL1', name: 'Đại lý Nghĩa', revenue: 1530000 },
    { code: 'DL2', name: 'Đại lý Đại', revenue: 900000 }
  ]

  const topDebtAgencies: AgencyDebt[] = [
    { code: 'DL1', name: 'Đại lý Nghĩa', debt: 24060000 },
    { code: 'DL2', name: 'Đại lý Đại', debt: 12400000 }
  ]

  const getTypeClass = (type: string) => {
    switch (type) {
      case 'revenue':
        return 'type-revenue'
      case 'debt':
        return 'type-debt'
      case 'activity':
        return 'type-activity'
      default:
        return ''
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'revenue':
        return <TrendingUp size={14} />
      case 'debt':
        return <TrendingDown size={14} />
      case 'activity':
        return <Users2 size={14} />
      default:
        return <FileText size={14} />
    }
  }

  return (
    <div className="reports-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-icon-box">
          <FileText size={36} />
        </div>
        <div className="header-text">
          <h1 className="page-title">Lập báo cáo</h1>
          <p className="page-subtitle">
            Tổng hợp, thống kê và quản lý các báo cáo doanh thu, tồn kho, công nợ và hoạt động của đại lý.
          </p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="stats-cards-grid">
        <div className="stats-card gradient-green-blue">
          <div className="stats-card-content">
            <div className="stats-label">Tổng doanh thu</div>
            <div className="stats-value">{totalRevenue.toLocaleString('vi-VN')} đ</div>
          </div>
          <div className="stats-icon">
            <TrendingUp size={48} strokeWidth={2.5} />
          </div>
        </div>

        <div className="stats-card gradient-pink">
          <div className="stats-card-content">
            <div className="stats-label">Tổng công nợ</div>
            <div className="stats-value">{totalDebt.toLocaleString('vi-VN')} đ</div>
          </div>
          <div className="stats-icon">
            <TrendingDown size={48} strokeWidth={2.5} />
          </div>
        </div>

        <div className="stats-card gradient-purple">
          <div className="stats-card-content">
            <div className="stats-label">Số lượng đại lý</div>
            <div className="stats-value">{agencyCount}</div>
          </div>
          <div className="stats-icon">
            <Users2 size={48} strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* Reports List Section */}
      <div className="reports-section">
        <div className="section-header">
          <div className="header-left">
            <FileText size={24} />
            <h2>Danh sách báo cáo ({reports.length})</h2>
          </div>
          <button className="btn-create-report">
            <FileText size={20} />
            Lập báo cáo
          </button>
        </div>

        <div className="reports-table-container">
          <table className="reports-table">
            <thead>
              <tr>
                <th>MÃ BÁO CÁO</th>
                <th>TIÊU ĐỀ</th>
                <th>LOẠI</th>
                <th>KỲ BÁO CÁO</th>
                <th>TRẠNG THÁI</th>
                <th>NGÀY TẠO</th>
                <th>THAO TÁC</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id}>
                  <td>
                    <span className="report-code">{report.code}</span>
                  </td>
                  <td>{report.title}</td>
                  <td>
                    <span className={`type-badge ${getTypeClass(report.type)}`}>
                      {getTypeIcon(report.type)}
                      {report.typeLabel}
                    </span>
                  </td>
                  <td className="text-muted">{report.createdDate}</td>
                  <td>
                    <span className="status-badge status-completed">
                      <CheckCircle2 size={14} />
                      {report.statusLabel}
                    </span>
                  </td>
                  <td className="text-muted">{report.createdAt}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="Xem">
                        <Eye size={18} />
                      </button>
                      <button className="btn-icon" title="Excel">
                        <FileSpreadsheet size={18} />
                      </button>
                      <button className="btn-icon" title="Tải xuống">
                        <Download size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="statistics-grid">
        {/* Top Revenue Agencies */}
        <div className="stat-card">
          <div className="stat-card-header">
            <TrendingUp size={20} />
            <h3>Danh sách đại lý có doanh số cao nhất</h3>
          </div>
          <div className="stat-card-body">
            <table className="stat-table">
              <thead>
                <tr>
                  <th>MÃ ĐẠI LÝ</th>
                  <th>TÊN ĐẠI LÝ</th>
                  <th>DOANH SỐ</th>
                </tr>
              </thead>
              <tbody>
                {topRevenueAgencies.map((agency) => (
                  <tr key={agency.code}>
                    <td>
                      <span className="agency-code">{agency.code}</span>
                    </td>
                    <td>{agency.name}</td>
                    <td>
                      <span className="revenue-value">
                        {agency.revenue.toLocaleString('vi-VN')} đ
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Debt Agencies */}
        <div className="stat-card">
          <div className="stat-card-header debt">
            <TrendingDown size={20} />
            <h3>Danh sách đại lý có công nợ cao nhất</h3>
          </div>
          <div className="stat-card-body">
            <table className="stat-table">
              <thead>
                <tr>
                  <th>MÃ ĐẠI LÝ</th>
                  <th>TÊN ĐẠI LÝ</th>
                  <th>CÔNG NỢ</th>
                </tr>
              </thead>
              <tbody>
                {topDebtAgencies.map((agency) => (
                  <tr key={agency.code}>
                    <td>
                      <span className="agency-code">{agency.code}</span>
                    </td>
                    <td>{agency.name}</td>
                    <td>
                      <span className="debt-value">
                        {agency.debt.toLocaleString('vi-VN')} đ
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
