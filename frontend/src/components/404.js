import React from 'react'

//simple 404 component used by the router for those pages that are not found
class brokenLink extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img style={{width: '100%', marginTop: '3%'}} src={require('../img/dead_link.jpg')}></img>
                
            </div>
         );
    }
}
 
export default brokenLink;