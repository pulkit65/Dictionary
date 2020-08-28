//const request = require('request')
const express = require('express') 
const path = require('path')
const hbs = require('hbs')
const meaning = require('./utils/meaning.js')

const app = express()
//const word = process.argv[2]
 
const viewsPath = path.join(__dirname,'../template/views')
const partialPath= path.join(__dirname,'../template/partials')


app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

app.use (express.static(path.join(__dirname,'../public')))

app.get('/',(req,res)=>{
    res.render('index',{
        title:'Word meaning site',
        name: 'Pulkit Aggarwal'
    })

    
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About the website',
        name: 'Pulkit Aggarwal'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help ',
        name: 'Pulkit Aggarwal'
    })
})

app.get('/word-mean',(req,res)=>{ 
    // console.log(req.query.word)
     meaning.findMeaning(req.query.word,(error,data)=>{
         if(error){
             res.send({
                 error
             })
             //console.log(error)
             //console.log(data)
         }else{
             res.send({
                 meaning:'Meaning of '+ req.query.word +' is :'+ data
                })
             //console.log('Meaning of '+ word +' is :'+ data)
             }
    
     })
})

app.get('/*',(req,res)=>{
    res.render('404',{
        title:'404 NOT FOUND',
        name: 'Pulkit Aggarwal'
    })
})
app.listen(3000,()=>{
    console.log('Server listen at 3000')
})