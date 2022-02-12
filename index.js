const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const appConf = require('./config/app.conf');
const mahasiswaRouter = require('./routers/MahasiswaRouter')


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({limit:"50mb"}))
app.use(cookieParser());

app.set('views', __dirname + '/frontend');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname+'/frontend'))
// mendefinisikan router
app.get('/', (req, res) => {
    res.redirect("/mahasiswa")
});
app.get('/mahasiswa', (req, res) => {
    return res.render('list_mahasiswa.html')
});
app.use("/api/mahasiswa", mahasiswaRouter)

// Konfigurasi Database
const dbConfig = require('./config/db.conf');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// koneksi Ke Database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully Sekarang Anda Terkonek Ke database");    
}).catch(err => {
    console.log('Error database Tidak Terkoneksi atau Tidak Ada');
    process.exit();
});

// listen for requests
app.listen(appConf.PORT, () => {
    console.log(`Server is listening on port ${appConf.PORT}`);
});