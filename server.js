'use strict';

require('dotenv').config();

const express = require('express');
const superagent = require('superagent');

const port = process.env.PORT || 3004;
const app = express();


app.use(express.static('./public/style'));
app.use(express.static('./public/img'));
app.use(express.static('./public/js'));


app.set('view engine', 'ejs');


app.get('/', renderHome);
app.get('/hadeth', getHadethAPI);
// app.get('/surah', getsurah)

function renderHome(req, res){
    res.render('index');
}

const hadithIndex = 0;
function getHadethAPI(req, res){
    // console.log('regreg');
    const hadithUrl = `https://api.hadith.sutanlab.id/books/muslim?range=1-300`;
    const alquranUrl = `http://api.alquran.cloud/v1/meta`;
    const timePrayUrl = `http://api.aladhan.com/v1/timingsByCity?city=amman&country=jorden&method=4`;
    const requests = [superagent.get(hadithUrl), superagent.get(alquranUrl), superagent.get(timePrayUrl)];
    Promise.all(requests)
    .then(data => {
        // res.send(data);
        // console.log(data);
        const hadiths = JSON.parse(data[0].text).data.hadiths[hadithIndex];
        console.log(hadiths);
        const surahs = data[1].body.data.surahs.references;
        const prayTime = data[2].body.data;
        // console.log(prayTime.date.hijri.month.ar);
        // console.log(Date());

        res.render('index', {hadith: hadiths , surah: surahs , times: prayTime});

    }).catch(error =>{
        console.log(`Hadeth api error ${error}`);
        res.status(500).send('`Hadeth api error')
    })
}

// function getsurah(req, res){
//     const url = `http://api.alquran.cloud/v1/meta`;

//     superagent.get(url).then(data => {

//         const surahs = data.body.data.surahs.references;
//         // console.log(surahs);
//         // res.send(surahs)
//         res.render('index', {surah: surahs})
//     })
// }



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })