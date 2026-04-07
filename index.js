 //outer function to initialize the login feature
 const createLoginTracker =(userInfo)=>{ 
    let attemptCount = 0;  
    const  maxAttempt =3; 
    let locked=false;

    //inner function to handle the login attempts
    return(passwordAttempt) =>{
if(locked){
    return("Account locked due to too many failed  login attempts")  }

    if(passwordAttempt===userInfo.password){
        return("Login  successful")}
 
    else{
        attemptCount++ 
if(attemptCount >=maxAttempt){ 
    locked=true;
}
return`Attempt ${attemptCount} ; Login failed`;
    } 
     
    }
}
 
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};


const user={"username":"user1", "password":"password123"};
const login=createLoginTracker(user); 


console.log(login("skla"));// Attempt one :Login failed 
 
console.log(login("password123"))//Attempt two Login is successful 
 
console.log(login("kanash")) //Login failed
 
console.log(login("suraya123")) //Login failed
 
console.log(login("helenitah123")) //Acoount locked due to many attempts

console.log(login("kanash"))

console.log(login("password123"))


