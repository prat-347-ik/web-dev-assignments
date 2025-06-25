let sec_counter=0;
let min_counter=0;
let hr_counter=0;
let str=" AM"
let flag=0;///0==AM and 1==PM

function timer(){
    if (sec_counter===2)
    {
        sec_counter=0; 
        if(min_counter===2)
        
        {    
            min_counter=0;
            if(hr_counter===23)
            {
             hr_counter=0;
             if(flag===0)
             {
                flag=1;
                str=" PM";
             }
             else
             {
                flag=0;
                str=" AM";
             }

            }
            else
            {
                hr_counter++;
            }
        }
        else
        {
            min_counter++;
        }
        
    
    }
    else
    {
        sec_counter++;
    }
    console.clear();
    
    
    console.log(hr_counter +':'+min_counter + ':' +sec_counter + str);
 

}

setInterval(timer,50);
