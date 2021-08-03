const express = require('express');

const app = express();

const port = process.env.PORT || 9090;
app.listen(port, console.log('Server started on port ${port}'));