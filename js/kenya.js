
document.getElementById('kenya').addEventListener('click',function(){
    fetch('https://api.kanye.rest/')
.then(res => res.json())
.then(data => displayQuote(data))

})

function loadQuote(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data =>displayQuote(data))
    console.log(data);
}

    function displayQuote(q) {
 const show = document.getElementById('show');
       show.innerText =q.quote ;
    }


// displayQuote()
fetch('https://api.kanye.rest/', {
    method: 'POST',
    body.JSON.string
        name: 'user 1'

})
    .then(res => {
      return res.json()
    })
        
        // res.json())
    .then(data => console.log(data))
    .catch( error => console.log('ERROR'))
