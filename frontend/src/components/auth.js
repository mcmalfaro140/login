class Auth {
    constructor() {
        this.isLogged = false;
      }
  
    login( username, password, cb) { //passing username, password and callback function
        fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username" : username,
                "password" : password
            })
        })
        .then(response => response.json())
        .then(response => this.isLogged = response.isLogged)//setting state values to data from api
        .then(function(response) {
            if(response.isLogged === false){
                return false;
            }else{
                cb();
            }
        })
        .catch(err => console.log(err))
        
    }
  
    logout(cb) {
        this.authenticated = false;
      cb();
    }
  
    isAuthenticated() {
      return this.isLogged;
    }
  }
  
  export default new Auth();
  