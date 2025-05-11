import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,             // Чтобы можно было писать expect() без импорта
    environment: 'jsdom',       // Эмулируем браузерное окружение
    setupFiles: './src/setupTests.js', // Настройка для jest-dom матчеров
  },
});
