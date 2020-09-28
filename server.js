const express = require('express');
const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 9000;
app.use(express.static('./public'));
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: '.' });
});
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
