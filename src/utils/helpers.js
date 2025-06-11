function safe(promise) //helper pra facilitar o uso de try catch
{
  return promise
    .then(data => [undefined, data])
    .catch(err => [err]);
}

function teste(msg) 
{
  console.log('teste:', msg);
}

module.exports = 
{
    safe,
    teste
};