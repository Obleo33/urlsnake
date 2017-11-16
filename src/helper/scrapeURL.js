const scrapeURL = (userURL) => {
  var cors_api_host = 'cors-anywhere.herokuapp.com';
  var cors_api_url = 'https://' + cors_api_host + '/www.reddit.com';

  let webtext = ''

  fetch(cors_api_url)
  .then(response => { 
    webtext = response.text() })
  .catch(error => console.log(error))

  return webtext
}

export default scrapeURL
