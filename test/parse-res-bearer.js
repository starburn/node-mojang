const test = require('ava')
const parse = require('../lib/parse-res-bearer')

// This is the only token the API seems to error with
test('parses mojang token error', t => {
  const authorization = `Bearer realm="Mojang", error="invalid_token", error_description="The access token is invalid"`
  // eslint-disable-next-line camelcase
  const {realm, error, error_description} = parse(authorization)
  t.is(realm, 'Mojang')
  t.is(error, 'invalid_token')
  t.truthy(error_description)
})
