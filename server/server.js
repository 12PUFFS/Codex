const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Указываем, что статические файлы находятся в папке "build" (после сборки React)
app.use(express.static(path.join(__dirname, '../dist')));

// Все запросы отправляем на index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});