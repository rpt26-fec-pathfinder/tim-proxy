const express = require('express');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors')
const app = express();
const port = 3000;
const axios = require('axios').default;

app.use(morgan('dev'));

app.use(cors());

app.use(express.static('./public'));

app.get('/hi', (req, res) => {
  res.send('Hello World!');
});

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

//images routes
app.get('/photoBundle/index_bundle.js', async (req, res) => {
  try {
    var {data} = await axios.get('https://steam-fec.s3.amazonaws.com/bundle/index_bundle.js')
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/images/:id', async (req, res) => {
  try {
    let {data} = await axios.get(`http://100.24.35.141:4012/images/${req.params.id}`);
    res.send(data);
  } catch (err) {
    res.status(500).send(err)
  }
});

//product routes
app.get('/metaBundle/index.js', async (req, res) => {
  try {
    var {data} = await axios.get('http://3.227.255.185/index.js')
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/api/product/:id/', async (req, res) => {
  try {
    let {data} = await axios.get(`http://3.227.255.185/api/product/${req.params.id}`);
    res.send(data);
  } catch (err) {
    res.status(500).send(err)
  }
});


//more like this routes 52.53.224.255
app.get('/moreLikeThisBundle/bundle.js', async (req, res) => {
  try {
    var {data} = await axios.get('http://54.193.16.203:4022/bundle.js')
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/morelikethis/:id', async (req, res) => {
  await axios.get(`http://54.193.16.203:4022/morelikethis/${req.params.id}`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      console.log('Error with GET request to server', err);
      res.status(404).end();
    });
});

//review routes
app.get('/reviews/:id', async (req, res) => {
  try {
    var {data} = await axios.get(`http://18.144.23.11:4052/reviews/${req.params.id}`)
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/reviewBundle/bundle.js', async (req, res) => {
  try {
    var {data} = await axios.get('https://gifbucket.s3-us-west-1.amazonaws.com/bundle.js')
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});