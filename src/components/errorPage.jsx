import React from 'react';
import PropTypes from 'prop-types';



function ErrorPage({ error }) {
    console.log("myerror", error);
    return (
        <div className="errorPage">
            <h2>User not found :(</h2>
            <p>{error.name} : {error.message}</p>
        </div>
    )
}

ErrorPage.propTypes = {
    error : PropTypes.object 
}
ErrorPage.defaultProps = {
    error : {
        name: "Error",
        message: "404"
    }
}



export default ErrorPage;


