/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'get',

	url: 'http://api.wunderground.com/api/{{api_key}}/conditions/q/{{country}}/{{city}}.json'

}
