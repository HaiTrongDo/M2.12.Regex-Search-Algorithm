let vinaPhone = ["085", "081", "082"]
let Mobile = ["070" , "079" , "077"]
let vietel = ["037" , "038" , "039"]
let tempPhoneNumber = ['038888888',"070999999",'082666666']

function determineMobileCarrier(tempPhoneNumber) {
    for (let i = 0; i < tempPhoneNumber.length; i++) {
        checkingCarrier(tempPhoneNumber[i])
    }
}

function checkingCarrier(phoneNumber){
    if (phoneNumber.startsWith(vietel[0]) ||
        phoneNumber.startsWith(vietel[1]) ||
        phoneNumber.startsWith(vietel[2])) {
        console.log("the phone number is Vietel")
    } else if (
        phoneNumber.startsWith(vinaPhone[0])||
        phoneNumber.startsWith(vinaPhone[1])||
        phoneNumber.startsWith(vinaPhone[2])) {
        console.log("the phone number is VinaPhone")
    } else if (
        phoneNumber.startsWith(Mobile[0])||
        phoneNumber.startsWith(Mobile[1])||
        phoneNumber.startsWith(Mobile[2])) {
        console.log("the phone number is Mobile")
    } else {
        console.log("this phoneNumber is not recognize")
    }
}

determineMobileCarrier(tempPhoneNumber)