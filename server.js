const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 提供 public 資料夾裡的靜態網頁
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/api/taiwan-districts', (req, res) => {
  res.sendFile(__dirname + '/public/taiwan_districts.json');
});
