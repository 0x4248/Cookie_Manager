//GNU 3.0 Licence
//======================COOKIE_MANAGER=========================
//go import me using "<script type="text/javascript" src="Cookie_Manager.js"></script>"
//[CONFIG]
var Say_hello = true    //says hello
var Use_debug = true    //shows debug info
//[SCRIPT]
var ver = 1.2

if(Say_hello = true){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    console.log("%c[COOKIE_MANAGER] "+"%c["+h+":"+m+":"+s+"] Started Script and listening for function call [V"+ver+"]","color: rgb(0, 255, 94);","color: auto;")
    console.log("%c[COOKIE_MANAGER] "+"%c["+h+":"+m+":"+s+"]  GitHub:https://github.com/awesomelewis2007/Cookie_Manager","color: rgb(0, 255, 94);","color: auto;")
}



function setCookie(name,value,days) {
    if(Use_debug == true){
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            console.log("%c[COOKIE_MANAGER] "+"%c["+h+":"+m+":"+s+"] Starting to Set cookie","color: rgb(0, 255, 94);","color: auto;")
            console.log("%c[COOKIE_MANAGER] "+"%c["+h+":"+m+":"+s+"] Cookie_name:"+name+" Data:"+value+" Expires:"+days,"color: rgb(0, 255, 94);","color: auto;")  
    }

    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    if(Use_debug == true){
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        console.log("%c[COOKIE_MANAGER] "+"%c["+h+":"+m+":"+s+"] Cookie_name:"+name+" has been set:","color: rgb(0, 255, 94);","color: auto;") 
    }
}

function getCookie(name) {
    if(Use_debug == true){
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        console.log("%c[COOKIE_MANAGER] "+"%c["+h+":"+m+":"+s+"] Reading cookie: "+name,"color: rgb(0, 255, 94);","color: auto;")
    }
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) { 
    if(Use_debug == true){
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();  
        console.log("%c[COOKIE_MANAGER] "+"%c["+h+":"+m+":"+s+"] Removeing cookie:"+name,"color: rgb(0, 255, 94);","color: auto;")
    }
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    if(Use_debug == true){
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        console.log("%c[COOKIE_MANAGER] "+"%c["+h+":"+m+":"+s+"] The cookie:"+name+" no longer exists","color: rgb(0, 255, 94);","color: auto;")
    }
}

function listCookies(){
    var pairs = document.cookie.split(";");
    var cookies = {};
    for (var i=0; i<pairs.length; i++){
      var pair = pairs[i].split("=");
      cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
    }
    if(Use_debug == true){
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        console.log("%c[COOKIE_MANAGER] "+"%c["+h+":"+m+":"+s+"] Listed all cookies","color: rgb(0, 255, 94);","color: auto;")
    return cookies;
    }
}