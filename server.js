const express = require('express');
const articleRouter = require('./routes/articles')
var path = require('path')
// const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    const articles = [
        {
            title:'Article title',
            createDate: Date.now(),
            description: 'Article description'
        },
        {
            title:'Article title2',
            createDate: Date.now(),
            description: 'Article description2'
        },
        {
            title:'Article title2',
            createDate: Date.now(),
            description: 'Article description2'
        },
        {
            title:'Article title2',
            createDate: Date.now(),
            description: 'Article description2'
        }
    ]
    res.render('index',{articles: articles})
})

app.use('/articles', articleRouter)
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 2000;
app.listen(PORT,()=>{
    console.log("Server running on port", PORT)
})

