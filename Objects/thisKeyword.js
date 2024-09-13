const verify = {
    username: "hemnc",
    password: 13011,
    loginMessage: function(){
        console.log(this.username);
    }
}

verify.loginMessage();
verify.username = "hemnarayan";
verify.loginMessage();

function myName(){
    console.log(this);
}

myName();