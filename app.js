const express = require('express')
const app = express()
router = require('./router');
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

router(app);