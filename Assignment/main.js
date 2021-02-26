
var blink_speed = 400;
var services=["REWARDS","SAVINGS", "INVESTMENTS", "FOREX", "ANALYTICS","CARDS","PAYMENTS","LOAN","SUPPORT"];
let serviceId = 0, letterId = 0, forward = true;
var t = setInterval(function () {
    var text=document.getElementById("services");
    var temp="";
    var service = services[serviceId];
    // console.log(service, ": ", service.charAt(letterId))
    text.textContent = service.substr(0, letterId+1);
    if(!forward && letterId == 0){
        forward = true;
        letterId =-1;
        serviceId = (serviceId + 1)%services.length;
    }
    else if(forward && letterId == service.length -1){
        forward = false;
        letterId -= 1;
    }
    else{
        if(forward){
            letterId += 1;
        }
        else{
            letterId -= 1;
        }
    }
 }, blink_speed);

