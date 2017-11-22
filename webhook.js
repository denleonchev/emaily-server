const localtunnel = require('localtunnel')

localtunnel(5000, { subdomain: 'sundrenchedone45' }, function (err, tunnel) {
  if (err) {
    console.log(err)
  }
  console.log('LT running')
})
