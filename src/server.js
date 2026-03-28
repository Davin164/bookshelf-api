const express = require('express');
const router = require('./routes');

const app = express();
const PORT = 9000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
