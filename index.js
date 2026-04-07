 //outer function to initialize the login feature
 const createLoginTracker =(userInfo)=>{ 
    let attemptCount = 0;  
    const  maxAttempt =3; 
    let locked=false;

    //inner function to handle the login attempts
    return(passwordAttempt) =>{
if(locked){
    return("Account locked due to many failed attempts")  }

    if(passwordAttempt===userInfo.password){
        return("login is successful")}
 
    else{
        attemptCount++ 
if(attemptCount >=maxAttempt){ 
    locked=true;
}
return`Attempt ${attemptCount} ; login failed`;
    } 
     
    }
}
 
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};


const user={"username":"user1", "password":"password123"};
const login=createLoginTracker(user); 


console.log(login("skla"));// Attempt one :login failed 
 
console.log(login("password123"))//Attempt two login is successful 
 
console.log(login("kanash")) //login failed
 
console.log(login("suraya123")) //login failed
 
console.log(login("helenitah123")) //Acoount locked due to many attempts