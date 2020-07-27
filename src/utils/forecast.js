const request = require('request')


const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=340823cbf780dce6954aa9826330396b&query='+lat+','+long+'&units=f'

    request({url, json: true}, (error, response) => {
        if(error){
            callback('internet error bruh', undefined)
        } else if (response.body.error) {
            callback('no such stuff bruh')
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]} it is currently ${response.body.current.temperature} degrees out but it feels like ${response.body.current.humidity} humid` )
        }
    })


}

module.exports = forecast