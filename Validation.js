    function usernameValidity(username) {

        if (username != undefined && username.length >= 1) {
            if (username[0] == username[0].toLowerCase() && /[^a-zA-Z0-9\_\/]/.test(username) == false && username.length >= 5 && username.length <= 12) {
                return true
            } else {
                return false
            }
        }


    }




    //versi es6

    let passwordValidity = password => {

        //console.log(password.replace(/[^A-Z]/g,"").length)
        if (password != undefined && password.length >= 1 && password.match(/[^a-zA-Z0-9]/gi) != undefined) {
            if (password.length == 7 && password.replace(/[^A-Z]/g, "").length >= 5 && password.replace(/[^0-9]/g, "").length >= 1 && password.match(/[^a-zA-Z0-9]/gi).length >= 1) {

                return true;
            }else{
            	return false;
            }
        }
    }

    //testing

    console.log(usernameValidity('ihlan_mansis'))
    console.log(passwordValidity('1HELLOWORLD!'));