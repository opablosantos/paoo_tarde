require('dotenv').config()
const axios = require ('axios')

// console.log(process.env.APPID)

const {
    APPID,
    Q,
    UNITS,
    LANGUAGE,
    CNT,
    URL_BASE
} = process.env

const url = `${URL_BASE}?q=${Q}&units=${UNITS}&lang=${LANGUAGE}&cnt=${CNT}&appid=${APPID}`

// console.log(url)

// axios.get(url)
// .then(res => {
//     console.log('data')
//     console.log(res.data)
//     console.log('***************************************')
//     return res.data
// })
// .then(outroNome => {
//     console.log('cnt')
//     console.log(outroNome.CNT)
//     console.log('***************************************')
//     return outroNome
// })
// .then(res => {
//     console.log('list')
//     console.log(res.list)
//     console.log('***************************************')
//     return res
// })
// .then(res => {
//     console.log('temp min do primeiro')
//     console.log(res.list[0].main['temp_min'])
//     console.log('***************************************')
// })
// .then(res => {
//   const list = res['list']
//   for (let previsao of list){
//     const main = previsao.main
//     const temp_min = main.temp_min
//     const temp_max = main['temp_max']
//     const humidity = main.humidity
//     console.log(`
//       Temp min: ${temp_min},
//       Temp max: ${temp_max},
//       Humidity: ${humidity}
//     `)
//   }
//   console.log('********************************')
//   return res
// })
// .then(res => {
//   for (let i = 0; i < res.list.length; i++){
//     console.log(`
//       Description: ${res.list[i].weather[0]['description']}
//     `)  
//   }
//   console.log('********************************')
//   return res
// })
// .then(res => {
//   let resultado
//   if (resultado = res.list.find(e => e.main.feels_like < 25))
//     console.log(`Sim: ${resultado.main.feels_like}`)
//   else
//     console.log('Não tem')
  
//   console.log('********************************')

// })

const exercicioAsyncAwait = async () => {
    const resultado = await axios.get(url)
    const data = resultado.data
    const list = data.list
    list.forEach(e => {
      console.log(e)
      console.log('************************')
    })
    list.forEach((e) => {
      console.log(e['main']['temp_min'] <= 27 ? e['weather'][0]['description'] : '')
    })  
  }
  
  exercicioAsyncAwait()
  