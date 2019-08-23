import React from 'react';

class SignUp extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="signinDiv">
                <i class="fas fa-users" style={{fontSize: '500%'}}></i>
                <h1>Create New Acount</h1>
                <form className="formDiv">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label" style={{fontWeight: 500}} >Username:</label>
                        <div class="col-sm-8">
                        <input type="text" class="form-control" placeholder="Username" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label" style={{fontWeight: 500}}>Password:</label>
                        <div class="col-sm-8">
                        <input type="password" class="form-control" placeholder="Password"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label" style={{fontWeight: 500}}>Re-enter password:</label>
                        <div class="col-sm-8">
                        <input type="password" class="form-control" placeholder="Password"/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-danger" style={{width: '50%', margin: '5%'}}>Create New Account</button>
                </form>
            </div>
         );
    }
}
 
export default SignUp;