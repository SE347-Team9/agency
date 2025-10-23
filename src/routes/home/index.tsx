import './index.css'
import { TrendingUp, Package, DollarSign, Users, BarChart3, ShoppingCart, FileText, Truck, Menu, X, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      icon: <Package size={32} />,
      title: 'Quản lý Kho Hàng',
      description: 'Theo dõi tồn kho, nhập xuất hàng hóa một cách dễ dàng và chính xác',
      color: '#3b82f6'
    },
    {
      icon: <DollarSign size={32} />,
      title: 'Quản lý Thanh Toán',
      description: 'Xử lý các giao dịch thanh toán nhanh chóng, minh bạch',
      color: '#10b981'
    },
    {
      icon: <Truck size={32} />,
      title: 'Phân Phối Hàng Hóa',
      description: 'Tối ưu hóa quy trình phân phối và giao hàng',
      color: '#f59e0b'
    },
    {
      icon: <FileText size={32} />,
      title: 'Báo Cáo Thống Kê',
      description: 'Phân tích dữ liệu chi tiết, tạo báo cáo tự động',
      color: '#8b5cf6'
    },
    {
      icon: <Users size={32} />,
      title: 'Quản lý Đại Lý',
      description: 'Quản lý thông tin đại lý, theo dõi hiệu suất',
      color: '#ec4899'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Phân Tích Dữ Liệu',
      description: 'Dashboard trực quan với biểu đồ và số liệu thời gian thực',
      color: '#06b6d4'
    }
  ]

  const stats = [
    { number: '1000+', label: 'Đại Lý', icon: <Users size={24} /> },
    { number: '50K+', label: 'Đơn Hàng', icon: <ShoppingCart size={24} /> },
    { number: '99.9%', label: 'Uptime', icon: <TrendingUp size={24} /> },
    { number: '24/7', label: 'Hỗ Trợ', icon: <BarChart3 size={24} /> }
  ]

  return (
    <div className="home-landing">
      {/* Header */}
      <header className="home-header">
        <div className="home-header__container">
          <div className="home-header__logo">
            <Package size={32} />
            <span className="home-header__logo-text">Agency System</span>
          </div>

          <nav className={`home-header__nav ${isMenuOpen ? 'home-header__nav--open' : ''}`}>
            <a href="#features" className="home-header__nav-link">Tính Năng</a>
            <a href="#about" className="home-header__nav-link">Giới Thiệu</a>
            <a href="#pricing" className="home-header__nav-link">Bảng Giá</a>
            <a href="#contact" className="home-header__nav-link">Liên Hệ</a>
          </nav>

          <div className="home-header__actions">
            <button className="home-header__btn home-header__btn--login">Đăng Nhập</button>
            <button className="home-header__btn home-header__btn--signup">Đăng Ký</button>
          </div>

          <button 
            className="home-header__mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero__background">
          <div className="home-hero__circle home-hero__circle--1"></div>
          <div className="home-hero__circle home-hero__circle--2"></div>
          <div className="home-hero__circle home-hero__circle--3"></div>
        </div>
        
        <div className="home-hero__content">
          <div className="home-hero__badge">
            <TrendingUp size={16} />
            <span>Nền tảng quản lý đại lý hàng đầu</span>
          </div>
          
          <h1 className="home-hero__title">
            Hệ Thống Quản Lý
            <span className="home-hero__title-gradient"> Đại Lý Thông Minh</span>
          </h1>
          
          <p className="home-hero__description">
            Giải pháp toàn diện giúp tối ưu hóa quy trình quản lý đại lý, 
            từ kho hàng, thanh toán đến báo cáo thống kê
          </p>
          
          <div className="home-hero__buttons">
            <button className="home-hero__btn home-hero__btn--primary">
              Bắt Đầu Ngay
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="home-hero__btn home-hero__btn--secondary">
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats">
        <div className="home-stats__grid">
          {stats.map((stat, index) => (
            <div key={index} className="home-stats__card">
              <div className="home-stats__icon">{stat.icon}</div>
              <div className="home-stats__number">{stat.number}</div>
              <div className="home-stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="home-features">
        <div className="home-features__header">
          <h2 className="home-features__title">Tính Năng Nổi Bật</h2>
          <p className="home-features__description">
            Các công cụ mạnh mẽ giúp bạn quản lý đại lý hiệu quả hơn
          </p>
        </div>

        <div className="home-features__grid">
          {features.map((feature, index) => (
            <div key={index} className="home-features__card">
              <div className="home-features__icon" style={{ background: `${feature.color}15`, color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="home-features__card-title">{feature.title}</h3>
              <p className="home-features__card-description">{feature.description}</p>
              <button className="home-features__link" style={{ color: feature.color }}>
                Tìm hiểu thêm →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="home-cta__card">
          <div className="home-cta__content">
            <h2 className="home-cta__title">Sẵn sàng bắt đầu?</h2>
            <p className="home-cta__description">
              Nâng cao hiệu quả quản lý đại lý của bạn ngay hôm nay
            </p>
          </div>
          <button className="home-cta__button">
            Trải Nghiệm Ngay
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-footer__container">
          <div className="home-footer__grid">
            {/* Company Info */}
            <div className="home-footer__column">
              <div className="home-footer__logo">
                <Package size={32} />
                <span className="home-footer__logo-text">Agency System</span>
              </div>
              <p className="home-footer__description">
                Giải pháp quản lý đại lý toàn diện, giúp tối ưu hóa quy trình kinh doanh của bạn.
              </p>
              <div className="home-footer__social">
                <a href="#" className="home-footer__social-link">
                  <Facebook size={20} />
                </a>
                <a href="#" className="home-footer__social-link">
                  <Twitter size={20} />
                </a>
                <a href="#" className="home-footer__social-link">
                  <Instagram size={20} />
                </a>
                <a href="#" className="home-footer__social-link">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="home-footer__column">
              <h3 className="home-footer__title">Sản Phẩm</h3>
              <ul className="home-footer__links">
                <li><a href="#features">Tính Năng</a></li>
                <li><a href="#pricing">Bảng Giá</a></li>
                <li><a href="#demo">Demo</a></li>
                <li><a href="#docs">Tài Liệu</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="home-footer__column">
              <h3 className="home-footer__title">Công Ty</h3>
              <ul className="home-footer__links">
                <li><a href="#about">Giới Thiệu</a></li>
                <li><a href="#team">Đội Ngũ</a></li>
                <li><a href="#careers">Tuyển Dụng</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="home-footer__column">
              <h3 className="home-footer__title">Liên Hệ</h3>
              <ul className="home-footer__contact">
                <li>
                  <MapPin size={18} />
                  <span>123 Đường ABC, Quận 1, TP.HCM</span>
                </li>
                <li>
                  <Phone size={18} />
                  <span>(+84) 123 456 789</span>
                </li>
                <li>
                  <Mail size={18} />
                  <span>contact@agency.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="home-footer__bottom">
            <p className="home-footer__copyright">
              © 2025 Agency System. All rights reserved.
            </p>
            <div className="home-footer__legal">
              <a href="#privacy">Chính Sách Bảo Mật</a>
              <a href="#terms">Điều Khoản Sử Dụng</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
