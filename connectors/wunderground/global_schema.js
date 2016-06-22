/*
* Global connector schema config.
*
* Documentation: https://github.com/trayio/falafel#global-message-schemas
*/


module.exports = {

  input: {
    api_key: {
      type: 'string',
      defaultJsonPath: '$.auth.api_key',
      advanced: true,
      required: true
    }
  }

};
