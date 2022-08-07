import React, { Component} from 'react'
import notfound from '../assests/notfound.jpg'
class NotFound extends Component {
    render() {
        return (

            <div class="notfound">
            <div class="notfound-404">
            <h1>Page not found</h1>
            <br />
        { <img src={notfound} alt="little dog in a knit hat" className="notfound" /> }
            </div>
            <a href="#" class="btn btn-primary">Go To Homepage</a>
            </div>
        )
    }
}

export default NotFound 