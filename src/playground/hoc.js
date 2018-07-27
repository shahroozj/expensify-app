//Higher Order Component HOC

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>please don't share this info!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAutentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticate ? 
                (
                    <WrappedComponent {...props}/>
                ) : (
                    <p>Please login to view the info</p>
                )
            }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAutentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="this is the detail" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticate={true} info="this is the detail" />, document.getElementById('app'));