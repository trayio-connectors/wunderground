/*
* Message schema
*
* Documentation: https://github.com/trayio/falafel#schema
*/

module.exports = {

	title: 'Conditions',

	description: 'Get conditions for a location.',

	// Input schema config
	input: {
        country: {
            type: 'string',
            title: 'Country or State Code',
            description: 'A code (iso3166) identifying a country or US state, for example: CA or GB',
            required: true
        },
        city: {
            type: 'string',
            title: 'City',
            description: 'City name in a format expected by Wunderground, for example: San_Francisco or London',
            required: true
        }
	}

};
