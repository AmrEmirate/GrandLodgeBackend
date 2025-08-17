import app from './app';

const PORT = process.env.PORT || 2020;

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});