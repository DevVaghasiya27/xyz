let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((Response) => {
    console.log(Response.status)
    console.log(Response.ok)
    console.log(Response.headers)
    return Response.json()
}).then((value2) => {
    console.log(value2)
})



//Output

// 200
// true
// Headers {
//   server: 'Cowboy',
//   'report-to': '{"group":"heroku-nel","max_age":3600,"endpoints":[{"url":"https://nel.heroku.com/reports?ts=1731067933&sid=67ff5de4-ad2b-4112-9289-cf96be89efed&s=O74iSO1DIE0xKEUHtGx%2BgnEh%2FSJnzqOchk7%2FJeEpa6I%3D"}]}',
//   'reporting-endpoints': 'heroku-nel=https://nel.heroku.com/reports?ts=1731067933&sid=67ff5de4-ad2b-4112-9289-cf96be89efed&s=O74iSO1DIE0xKEUHtGx%2BgnEh%2FSJnzqOchk7%2FJeEpa6I%3D',
//   nel: '{"report_to":"heroku-nel","max_age":3600,"success_fraction":0.005,"failure_fraction":0.05,"response_headers":["Via"]}',
//   connection: 'keep-alive',
//   'content-type': 'application/json',
//   date: 'Fri, 08 Nov 2024 12:12:14 GMT',
//   'content-length': '229',
//   via: '1.1 vegur'
// }
// {
//   temperature: '+8 °C',
//   wind: '17 km/h',
//   description: 'Clear',
//   forecast: [
//     { day: '1', temperature: '8 °C', wind: '31 km/h' },
//     { day: '2', temperature: '+5 °C', wind: '9 km/h' },
//     { day: '3', temperature: '8 °C', wind: '24 km/h' }
//   ]
// }