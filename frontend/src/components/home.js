import React from 'react';
import { Link } from 'react-router-dom'


class Home extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="homeDiv">
                <img src={require('../img/logo_misael.png')} style={{width: '30%', padding: 0, margin: 0}}></img>
                <Link to="/SignIn" style={{margin: 0, padding: 0, width: '50%'}}><button type="button" class="btn btn-primary" style={{width: '100%', padding: '2%', margin: '1%'}}><i class="fas fa-sign-in-alt" style={{padding: 5}}></i>Sign In</button></Link>
                <Link to="/SignUp"style={{margin: 0, padding: 0, width: '50%'}}><button type="button" class="btn btn-danger"  style={{width: '100%', padding: '2%',margin: '1%'}}><i class="fas fa-user" style={{padding: 5}}></i>Create an Account</button></Link>
            </div>
         );
    }
}
 
export default Home;