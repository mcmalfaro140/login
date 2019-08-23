import React from 'react';

class SignIn extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="signinDiv">
                <i class="fas fa-user" style={{fontSize: '500%'}}></i>
                <h1>Sign In</h1>

                <form className="formDiv">
                    <div class="form-group">
                        <label className="label"><i class="fas fa-user" style={{padding: 10}}></i>Username:</label>
                        <input type="text" class="form-control" placeholder="Enter Username"/>
                    </div>
                    <div class="form-group">
                        <label className="label"> <i class="fas fa-key" style={{padding: 10}}></i>Password:</label>
                        <input type="password" class="form-control" placeholder="Enter Password"/>
                    </div>
                    <button type="submit" class="btn btn-primary" style={{width: '50%'}}>Submit</button>
                </form>
            </div>
         );
    }
}
 
export default SignIn;