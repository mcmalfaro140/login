import React from 'react'
import auth from './auth';

//simple 404 component used by the router for those pages that are not found
class welcome extends React.Component {
    constructor() {
        super();
        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        auth.logout(() => {
            this.props.history.push("/")
        }) 
    }
    render() { 
        return ( 
            <div style={{textAlign: 'center', margin: '10%', fontSize: '300%', color: 'white',display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                Welcome to a protected route after you logged in.
                <button onClick={this.logOut} type="submit" class="btn btn-primary" style={{width: '50%',marginTop: '2%'}}>Log out</button>
                
            </div>
         );
    }
}
 
export default welcome;