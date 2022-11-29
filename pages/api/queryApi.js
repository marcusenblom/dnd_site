var axios = require('axios');

// Fetch user contacts
export default async function handler(req, res) {

  var config = {
    method: 'get',
    url: `${process.env.API_URL}${req?.body?.query}`,
    headers: {
      'Content-Type': 'application/json',
    }
  };

  console.log(config.url);
  
  axios(config).then(function (response) {
    res.status(response?.status ? response?.status : 200).json(response?.data);
  }).catch(function (error) {
    res.status(error?.response?.status ? error?.response?.status : 400).json(error?.response?.data);
  });
}