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

//add a get route that goes from react app
  //through proxy then to server
  //check for errors before returning res.send()

//images routes

app.get('/photoBundle/index_bundle.js', async (req, res) => {
  try {
    var {data} = await axios.get('http://100.24.35.141:4012/index_bundle.js')
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
    var {data} = await axios.get('http://localhost:4032/index.js')
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/api/product/:id/', async (req, res) => {
  try {
    let {data} = await axios.get(`http://localhost:4032/api/product/${req.params.id}`);
    res.send(data);
  } catch (err) {
    res.status(500).send(err)
  }
});


//more like this routes
app.get('/moreLikeThisBundle/bundle.js', async (req, res) => {
  try {
    var {data} = await axios.get('http://localhost:4022/bundle.js')
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.get('/morelikethis/:id', async (req, res) => {
  await axios.get(`http://localhost:4022/morelikethis/${req.params.id}`)
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

//this allows the proxy to get the bundle.js file from the service
app.get('/reviewBundle/bundle.js', async (req, res) => {
  try {
    var {data} = await axios.get('http://18.144.23.11:4052/bundle.js')
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});