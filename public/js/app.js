console.log('We are created dictionary ')
const dataInput = document.querySelector('#form')
const m1 = document.querySelector('#p1')
  m1.innerHTML = ''
    
 dataInput.addEventListener("submit",(e)=>{
     e.preventDefault()
     const wordInput = document.querySelector('#input1')
    
     if(wordInput.value.length === 0){
         console.log('First enter word')
     }else{
     fetch('http://localhost:3000/word-mean?word='+wordInput.value).then((response)=>{
    
        response.json().then((data)=>{
            if(data.error){
                m1.innerHTML = data.error
               // console.log(data.error)
            }else{
                m1.innerHTML = data.meaning
            //console.log(data.meaning)
            }
        })
    })
}
     //console.log(wordInput.value)
})




