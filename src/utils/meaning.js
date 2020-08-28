const request = require('request')


const findMeaning=(word,callback)=>{
    
    const url ='https://dictionaryapi.com/api/v3/references/learners/json/'+word+'?key=3da9472e-d99d-4d90-8b48-d043d21ab75e'
   
    request({url , json: true},(error,response)=>{
        if(error){
            //console.log('Please check internet ')
            callback('Please check internet connection',undefined)
        }else if(response.body.length===0)
        {
          //  console.log('Please search with another word')
            callback('Please search with another word!',undefined)
        }else{
            //    console.log(response.body[0].shortdef[0])
            callback(undefined,response.body[0].shortdef[0])
        }
    })
}

module.exports={
    findMeaning
} 