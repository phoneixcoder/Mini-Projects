
var userLoggedIn = true;

var promise = new Promise((resolve , reject) => {
    // Wait for 1 sec
    setTimeout(() => {
        //Promise is resolved
        if(userLoggedIn)
            resolve();
        else
            reject();
    }, 1000);

    setTimeout(() =>{
        userLoggedIn = false;
    }, 500); 

});

promise.then( () => {
    console.log("User Logged In.");
}); 

promise.catch( () => {
    console.log("User not Logged In.");
});