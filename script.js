function findmovie(movie){
    console.log(movie);
    var request=new XMLHttpRequest();
    request.open('GET','http://www.omdbapi.com/?i=tt3896198&apikey=ff95f508&t='+movie,true);
    const fid=document.getElementById('results');

    while (fid.firstChild) {
        fid.firstChild.remove();
    }
    

    request.onload= function(){
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400){
           
            console.log(data);
                   
            for(var k in data){
                var v=data[k];
                if(k=='Response' && v=='False'){
                    const r=document.createElement('label');
                    r.setAttribute('class','col-md-10 col-form-label');
                    r.textContent=" \" "+movie+" \" " +" is not found ";
                    fid.appendChild(r);
                    break;
                }


                if (k=='Poster' || k=='Ratings'){
                    // const i=document.createElement('img');
                    // i.setAttribute('src','k');
                    // i.setAttribute('alt','Poster');
                    // fid.appendChild(i);
                }
                else{
                
                    const r=document.createElement('label');
                    r.setAttribute('class','col-md-2 col-form-label');
                    r.textContent=k;

                    const r2=document.createElement('label');
                    r2.setAttribute('class','col-md-10 col-form-label');
                    r2.textContent=v;

                    fid.appendChild(r);
                    fid.appendChild(r2);
                }
            }



        }
        else{
            console.log("error");
        }
    }

    request.send();

}


    
     