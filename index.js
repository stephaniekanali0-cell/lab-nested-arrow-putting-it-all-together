 
function createLoginTracker(userInfo) {
    let attemptCount = 0;
    const maxAttempt=3;
    const passwordAttempt=(password)=> {
         attemptCount ++;
        if (password === userInfo.password) {
            return "Login successful";
        }
        else if (attemptCount >= 3) {
                return "Account locked due to many attempts";}

            else {
                return "Login failed";
            }
        }
    }

    const credentials = {
        "Username": "user1",
        "password": "password123"
    };

 


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};