import React from 'react';
import auth from "./auth";

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            username : '',
            password : '',
            error: '',
            status: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUserChange(e){
        this.setState({
            username: e.target.value
        });
    };

    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            error: ''
        });
            
        if(this.state.username === '' || this.state.password === ''){
            this.setState({
                error: 'Username or password missing!!!'
            });
        }else{
            let infoBox = document.getElementById('infoBox');
            infoBox.style.display = 'inline'
            let temp;
            auth.login(this.state.username, this.state.password, () => {
                this.props.history.push("/welcome");
              });
        }
    }
    render() { 
        return ( 
            <div className="signinDiv" onSubmit={this.handleSubmit}>
                <i class="fas fa-user" style={{fontSize: '500%'}}></i>
                <h1>Sign In</h1>

                <form className="formDiv">
                    <div class="form-group">
                        <label className="label"><i class="fas fa-user" style={{padding: 10}}></i>Username:</label>
                        <input type="text" class="form-control" placeholder="Enter Username" value={this.state.username} onChange={this.handleUserChange}/>
                       
                    </div>
                    <div class="form-group">
                        <label className="label"> <i class="fas fa-key" style={{padding: 10}}></i>Password:</label>
                        <input type="password" class="form-control" placeholder="Enter Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                        <a href="#">Forgot username/password?</a>
                        <div>
                            <span style={{color: 'red'}} id="userErr">{this.state.error}</span>
                        </div>
                    </div>
                    <button id="btnSubmit" type="submit" class="btn btn-primary" style={{width: '50%',marginTop: '2%'}}>Submit</button>
                    <div className="status" id="infoBox">
                        <h1>Logging in </h1>
                        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
                </form>
                
            </div>
         );
    }
}
 
export default SignIn;