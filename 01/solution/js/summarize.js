const summarize = (...value) =>{
    let temp=0;
    for(let val of value){
        if(!Number.isSafeInteger(Math.trunc(val)))
        {
            temp = BigInt(0);
        }
    } 
    for(let val of value){
        if(typeof(temp) == 'bigint')
        {
            if(val == Math.trunc(val))
            {
                temp += BigInt(val);
            }
        }else{
            if(val == Math.trunc(val))
            {
                temp +=val;
            }
        }
    } 
    return temp;
}

export default summarize;
