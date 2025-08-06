// Import hàm defineConfig từ Vite để cấu hình dự án một cách rõ ràng hơn
import { defineConfig } from 'vite'

// Import plugin Vue để Vite hiểu và xử lý file .vue
import vue from '@vitejs/plugin-vue'

// Xuất cấu hình Vite mặc định
export default defineConfig({
  // Đăng ký plugin vue để hỗ trợ file .vue
  plugins: [vue()],

  // Cấu hình alias để sử dụng "@" thay cho đường dẫn tuyệt đối tới thư mục src
  resolve: {
    alias: {
      '@': '/src' // Giúp import như '@/components/Example.vue' thay vì '../../../components/Example.vue'
    }
  }
})
