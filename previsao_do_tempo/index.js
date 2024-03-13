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

axios.get(url)
.then(res => {
    console.log(res.list[0].weather['description'])
})
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