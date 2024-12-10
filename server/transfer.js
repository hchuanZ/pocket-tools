const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios')
const httpsAgent = new (require('https')).Agent({
  rejectUnauthorized: false
});
app.use(cors())
app.use(express.json());
app.use('/hapi', async (req, res, next) => {
  const oriUrl = req.originalUrl.split('/')
  const realHost = req?.headers?.realHost || 'https://pocketapi.48.cn'
  oriUrl.shift()
  oriUrl.shift()
  const url = `${realHost}/${oriUrl.join('/')}`
  try {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: url,
      headers: { 
        'token': req.headers.token, 
        'Content-Type': 'application/json'
      },
      data : req.body
      
    };
    console.log(config)
    axios.request(config).then(response => {
      res.send(response.data)
    })
  } catch(e) {
    res.send({message: 'fail'})
  }
}) 

app.listen(8848, () => {
  console.log('Proxy server is running on http://localhost:8848');
});
