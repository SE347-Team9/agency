import { User, Building2, Mail, Phone, MapPin, CircleDollarSign, Shield, CheckCircle2 } from 'lucide-react'
import './AgencyManagement.css'

const AgencyManagement = () => {
  // Mock data
  const userInfo = {
    name: 'Nguyễn Trọng Đại',
    userId: 3,
    agencyId: 2
  }

  const accountInfo = {
    username: 'dai',
    email: 'daigenz2@gmail.com',
    phone: '02232434242',
    address: 'Số 1, Phố Trảng Tiền, Hoàn Kiếm, Hà Nội',
    role: 'agent'
  }

  const agencyInfo = {
    name: 'Đại lý Đại',
    code: 'DL002',
    type: 'Đại lý cấp 2',
    email: 'daiagency@gmail.com',
    address: 'Số 2, Phố Đống Đa, Đống Đa, Hà Nội',
    phone: '02232434242',
    creditLimit: '50000000.00 VND',
    currentDebt: '12400000.00 VND',
    status: 'Đang hoạt động'
  }

  return (
    <div className="agency-management">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          <User size={64} />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">{userInfo.name}</h1>
          <div className="profile-badges">
            <span className="badge badge-user">User ID: {userInfo.userId}</span>
            <span className="badge badge-agency">Agency ID: {userInfo.agencyId}</span>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="content-grid">
        {/* Account Information Card */}
        <div className="profile-info-card">
          <div className="card-header">
            <User size={20} />
            <h2>HỒ SƠ TÀI KHOẢN</h2>
          </div>
          
          <div className="card-body">
            <div className="info-row">
              <div className="info-field full-width">
                <label>
                  <User size={16} />
                  Tên đăng nhập
                </label>
                <div className="info-value">{accountInfo.username}</div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-field">
                <label>
                  <Mail size={16} />
                  Email
                </label>
                <div className="info-value">{accountInfo.email}</div>
              </div>
              <div className="info-field">
                <label>
                  <Phone size={16} />
                  Số điện thoại
                </label>
                <div className="info-value">{accountInfo.phone}</div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-field full-width">
                <label>
                  <MapPin size={16} />
                  Địa chỉ
                </label>
                <div className="info-value">{accountInfo.address}</div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-field full-width">
                <label>
                  <Shield size={16} />
                  Vai trò
                </label>
                <div className="info-value">{accountInfo.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Information Card */}
        <div className="profile-info-card">
          <div className="card-header">
            <Building2 size={20} />
            <h2>HỒ SƠ ĐẠI LÝ</h2>
          </div>
          
          <div className="card-body">
            <div className="info-row">
              <div className="info-field">
                <label>
                  <Building2 size={16} />
                  Tên đại lý
                </label>
                <div className="info-value">{agencyInfo.name}</div>
              </div>
              <div className="info-field">
                <label>
                  <span className="icon-code">{'<>'}</span>
                  Mã đại lý
                </label>
                <div className="info-value info-value-highlight">{agencyInfo.code}</div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-field">
                <label>
                  <span className="icon-tag">T</span>
                  Loại đại lý
                </label>
                <div className="info-value">{agencyInfo.type}</div>
              </div>
              <div className="info-field">
                <label>
                  <Mail size={16} />
                  Email đại lý
                </label>
                <div className="info-value">{agencyInfo.email}</div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-field full-width">
                <label>
                  <MapPin size={16} />
                  Địa chỉ đại lý
                </label>
                <div className="info-value">{agencyInfo.address}</div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-field">
                <label>
                  <Phone size={16} />
                  SĐT đại lý
                </label>
                <div className="info-value">{agencyInfo.phone}</div>
              </div>
              <div className="info-field">
                <label>
                  <CircleDollarSign size={16} />
                  Hạn mức nợ
                </label>
                <div className="info-value">{agencyInfo.creditLimit}</div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-field full-width">
                <label>
                  <CircleDollarSign size={16} />
                  Nợ hiện tại
                </label>
                <div className="info-value info-value-debt">{agencyInfo.currentDebt}</div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-field full-width">
                <label>
                  <CheckCircle2 size={16} />
                  Trạng thái
                </label>
                <div className="status-badge status-active">
                  <CheckCircle2 size={16} />
                  {agencyInfo.status}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgencyManagement
