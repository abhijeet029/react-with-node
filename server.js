const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.get('/test-server', (req, res) => {
  res.send({ response: 'Heyaa.. You have connected the app to server successfully!!' });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
