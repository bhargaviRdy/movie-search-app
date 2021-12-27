let btn = document.querySelector("#search");
let url = "http://www.omdbapi.com/?i=tt3896198&apikey=ff95f508&t=";
let userInput = document.querySelector("#moviename");
var res = document.querySelector(".results");
btn.addEventListener("click", () => {
    console.log(userInput.value);
    console.log(url);
   getMovieData(userInput.value);
//    console.log(data);
})

async function getMovieData(movie){
    // var d = await 
    await fetch(url+movie)
    .then(response => 
        response.json()
    )
    .then(json => {
        res.innerText = json.Released;
        // output.innerText = "hello"emo
        console.log(json);
        // return json;
    })
    .catch((error) => {
        console.log("error occured: "+error);
    });
    // return d;
}
// function findmovie(movie){
//     console.log(movie);
//     var request=new XMLHttpRequest();
//     request.open('GET','http://www.omdbapi.com/?i=tt3896198&apikey=ff95f508&t='+movie,true);
//     const fid=document.getElementById('results');

//     while (fid.firstChild) {
//         fid.firstChild.remove();
//     }
    

//     request.onload= function(){
//         var data = JSON.parse(this.response);
//         if (request.status >= 200 && request.status < 400){

//             const h3=document.createElement('h3');
//             h3.setAttribute('class','col-sm-12 col-form-label');
//             h3.textContent='You have searched for \" '+movie+" \" ";
//             fid.appendChild(h3);
           
//             console.log(data);

//             for(var k in data){
//                 var v=data[k];
//                 if(k=='Response' && v=='False'){
//                     const r=document.createElement('label');
//                     r.setAttribute('class','col-md-12 col-form-label ');
//                     r.textContent=" \" "+movie+" \" " +" is not found ";
//                     fid.appendChild(r);
//                     break;
//                 }

//                 var d=document.createElement('div');
//                 d.setAttribute('class','row ');
//                 fid.appendChild(d);

//                 if (k=='Poster'){
//                     const i=document.createElement('img');
//                     i.setAttribute('class','col-12 col-sm-12 img-thumbnail');
//                     i.setAttribute('src',v);
//                     i.setAttribute('alt','Poster');
//                     i.setAttribute('style','align:center;');
//                     // i.setAttribute('max-width','100%');
//                     // i.setAttribute('width','200');
//                     // i.setAttribute('height','100');
//                     d.appendChild(i);
//                 }
//             }
                   
//             for(var k in data){
//                 var v=data[k];
//                 if(k!='Poster' && k!='Ratings'){
                
//                     const r=document.createElement('label');
//                     r.setAttribute('class','col-md-3 col-form-label');
//                     r.textContent=k;

//                     const r2=document.createElement('label');
//                     r2.setAttribute('class','col-md-9 col-form-label');
//                     r2.textContent=v;

//                     d.appendChild(r);
//                     d.appendChild(r2);
//                 }
//             }



//         }
//         else{
//             console.log("error");
//         }
//     }

//     request.send();

// }


    
     
