# 📌 CSS Architecture Guide - Tránh trùng lặp và Override

## 🎯 Nguyên tắc chung:

### **1. Shared CSS (Tập trung)**
File: `src/styles/shared.css`
- Chứa **Base styles** chung cho tất cả các trang
- Chỉ chứa styling **cơ bản**, không có gradient/color riêng biệt

```css
/* shared.css */
.page-header {
  background: white;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  gap: 24px;
  /* ... */
}

.header-icon-box {
  width: 72px;
  height: 72px;
  border-radius: 16px;
  display: flex;
  /* ... */
  /* ❌ KHÔNG có background gradient */
}
```

### **2. Page-Specific CSS (Phân tán)**
File: `src/pages/*/Page.css`
- Dùng **selector specificity** để override riêng biệt
- Chỉ override những phần khác nhau (gradient, color)

```css
/* Reports.css */
.reports-page .header-icon-box {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

/* Distribution.css */
.distribution-request .header-icon-box {
  background: linear-gradient(135deg, #1a73e8 0%, #1557b0 100%);
}
```

## 📋 Cấu trúc hiện tại:

| Trang | Container | Loại Header | Icon Gradient |
|-------|-----------|-------------|---------------|
| Reports | `.reports-page` | `.page-header` | Blue (#3b82f6) |
| Distribution | `.distribution-request` | `.page-header` | Dark Blue (#1a73e8) |
| Export | `.export-management` | `.page-header` | Purple (#667eea) |
| ReceiveGoods | `.receive-goods` | `.page-header` | Purple (#667eea) |
| AddReport | `.add-report-page` | Trong `.header-content` | Blue (#3b82f6) |
| Payment | `.payment-management` | `.payment-header` | Blue (#3b82f6) |

## ✅ Cách sử dụng đúng:

### **❌ SAI:**
```css
/* page1.css */
.page-header { padding: 32px; background: white; }
.header-icon-box { background: linear-gradient(...blue); }

/* page2.css */
.page-header { padding: 32px; background: white; } /* ← Duplicate! */
.header-icon-box { background: linear-gradient(...red); }
```

### **✅ ĐÚNG:**
```css
/* shared.css */
.page-header { padding: 32px; background: white; }
.header-icon-box { /* Base styles chung */ }

/* reports.css */
.reports-page .header-icon-box { background: linear-gradient(...blue); }

/* distribution.css */
.distribution-request .header-icon-box { background: linear-gradient(...red); }
```

## 🔧 Khi thêm trang mới:

1. **Nếu sử dụng `.page-header`:**
   ```css
   /* new-page.css */
   .new-page .header-icon-box {
     background: linear-gradient(135deg, #yourcolor1 0%, #yourcolor2 100%);
   }
   ```

2. **Nếu tạo header riêng:**
   ```css
   /* new-page.css */
   .custom-header { /* ... base styles ... */ }
   .custom-header .icon { /* ... gradient riêng ... */ }
   ```

## 🚀 Lợi ích của cách này:

✅ Không trùng lặp CSS  
✅ File CSS nhỏ hơn → Load nhanh hơn  
✅ Dễ maintain - sửa `.page-header` chỉ một chỗ  
✅ Dễ mở rộng - thêm trang mới chỉ cần thêm override  
✅ DevTools sạch sẽ, không có duplicate class  

## 📝 Import order (Quan trọng!):

```css
/* index.css */
@import './styles/shared.css'; /* ← Load đầu tiên */
/* Các trang import CSS của riêng mình */
```

Điều này đảm bảo:
1. Shared styles load trước
2. Page-specific styles load sau
3. Page-specific styles sẽ override shared styles (vì cụ thể hơn)
