// document.addEventListener('keyup' , (e) => { 
    //     document.getElementById('codewrapper').innerHTML = `<h1>${e.keyCode}</h1>`;
    // });
    
    
    const keyName = document.getElementById('keyName');
    const keycode = document.getElementById('keyCode');
    console.log(keycode)
    
document.addEventListener('keyup' , (e) => {
    console.log(e)
    
    if(e.keyCode == 32){
        // console.log(e.key)
        keycode.textContent  = "You Pressed space";
    }else{
        keyName.textContent  =  e.keyCode;
        keycode.textContent  = "You Pressed " + e.key.toUpperCase();

    }
})