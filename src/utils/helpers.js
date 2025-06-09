function safe(promise)
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