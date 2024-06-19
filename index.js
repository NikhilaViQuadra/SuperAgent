const superagent = require('superagent');

const apiKey = '5f1bDDIuAxlCSyaOTByNnOUt3E9kjsRr';
superagent
  .get('https://financialmodelingprep.com/api/v3/search?query=AA&apikey=5f1bDDIuAxlCSyaOTByNnOUt3E9kjsRr')
  .query() 
  .end((err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.body); 
    }
  });