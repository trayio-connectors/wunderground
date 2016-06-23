/*
* Message model config.
*
* Documentation: https://github.com/trayio/falafel#model
*/


module.exports = {

	method: 'get',

	url: 'http://api.wunderground.com/api/{{api_key}}/forecast/q/{{country}}/{{city}}.json'

}
