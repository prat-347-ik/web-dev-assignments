let count=0;
function callback(){
    console.clear();
    console.log(count);
    count=count+1;
   setTimeout(callback,1000);

}

    setTimeout(callback,1000);
