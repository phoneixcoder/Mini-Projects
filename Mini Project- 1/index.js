const container = document.getElementById('container');
const request = new XMLHttpRequest();

xhr.open("GET", "https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=10&cat=famous");
xhr.setRequestHeader("x-rapidapi-host", "andruxnet-random-famous-quotes.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "SIGN-UP-FOR-KEY");


// request.addEventListener('load' , () =>{
//     const [data] = JSON.parse(this.responseText);
// });