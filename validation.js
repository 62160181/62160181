function formValidation() {
    var uid = document.registform.userid;
    var passid =  document.registform.passid;
    var uname =  document.registform.username;
    var uadd = document.registform.address;
    var ucounrty = document.registform.country;
    var uzip = document.registform.zip;
    var uemail = document.registform.email;
    var user = document.registform.sex;

    if (validateUserID(uid, 5, 12)) {
        if (validatePassword(passid, 7, 12)) {
            if (allletter(uname)) {
                if (alphanumeric(uadd)) {
                    if (countryselect(ucounrty)) {
                        if (allnumeric(uzip)){
                            if (validateEmail(uemail)) {
                                if (validateGender(usex)){}
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function validateUserID(uid, min, max){
    var error = "";
    var illegalChars = /\W/; // allow letter, number, and underscores

    if (uid.value == ""){
        uid.style.background = 'Yellow';
        error = "กรุณาป้อน User ID\n";
        alert(error);
        uid.focus();
        return false;
    }else if((uid.value.length < min) || (uid.value.length > max)){
        uid.style.background ='Yellow';
        error = "User ID ต้องมีความยาว " + min + "-" + max + " ตัวอักษร\n";
        alert(error);
        uid.focus();
        return false;
    }else if(illegalChars.test(uid.value)){
        uid.style.background = 'Yellow';
        error = "User ID มีตัวอักษรที่ไม่ได้รับอนุญาต\n";
        alert(error);
        uid.focus();
        return false;
    }else{
        uid.style.background = 'White';
    }
    return true;
}

function validatePassword(passid, min, max){
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers

    if (passid.value == ""){
        passid.style.background = 'Yellow';
        error ="กรุณาป้อน Password\n"
        alert(error);
        passid.focus();
        return false;
    }else if ((passid.value.length < 7) || (passid.value.length > 15)){
        error = "Password ต้องมีความยาว " + min + "_" + max + " ตัวอักษร\n";
        passid.style.background = 'Yellow';
        alert(error);
        passid.focus();
        return false;
    }else if(illegalChars.test(passid.value)){
        error = "Password มีตัวอักษรที่ไม่ได้รับอนุญาต\n";
        passid.style.background = 'Yellow';
        alert(error);
        passid.focus;
        return false;
    }else if((passid.value.search(/[a-zA-Z]+/) == -1) || (passid.value.search(/[0-9]+/) == -1)){
        error = "Password ต้องมีตัวเลขอย่างน้อย 1 ตัว\n";
        passid.style.background = 'Yellow';
        alert(error);
        passid.focus();
        return false;
    } else {
        passid.style.background = 'White'
    }
    return true;   
}

function allletter(uname){
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letter)){
        return true;
    } else {
        alert('Username ต้องเป็นตัวอักษรเท่านั้น');
        uname.focus();
        return false;
    }
}

function alphanumeric(uadd){
    var letters = /^[0-9a-zA-Z]+$/;
    if (uadd.value.match(letter)){
        return true;
    } else {
        alert('Address ต้องเป็นตัวอีกษรหรือตัวเลขเท่านั้น');
        uadd.focus();
        return false;
    }
}

function countryselect(ucounrty){
    if (ucounrty.value == "Default"){
        alert('กรุณาเลือก Country');
        ucounrty.focus();
        return false;
    } else {
        return true;
    }
}

function allnumeric(uzip){
    var number = /^[0-9]+$/;
    if (uzip.value.match(numbers)){
        return true;
    } else {
        alert('ZIP Code ต้องเป็นตัวเลขเท่านั้น')
        uzip.focus;
        return false;
    }
}

function validateEmail(uemail){
    var filter = /^([a-Za-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-Za-Z0-9]{2,4})+$/;

    if (!filter.test(uemail.value)){
        alert('Email ไม่ถูกต้อง');
        uemail.focus();
        return false;
    }else{
        return true;
    }
}

function validateGender(usex){
    var x = 0
    for(i = 0; i < user.length; ++i){
        //alert(user[i].chekked)
        if (user[i].checked)
        x++
    }
    if (x == 0){
        alert('Form Successtully Submitted');
        return false;
    }else{
        alert('Form Successfuly Submitted');
        //window.location.reload()
        //return true;
    }
}