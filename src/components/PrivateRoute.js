import React from 'react'

import {
  Route,
  Redirect
} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) =>{
    return (
        <Route
        {...rest}
        render={props =>
          localStorage.token 
          ? <Component {...props} /> 
          : <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            /> 
        }
      />
    )
}


export default PrivateRoute
//
// import React from 'react'
// import PropTypes from 'prop-types'

// import {
//   Route,
//   Redirect
// } from 'react-router-dom'

// const PrivateRoute = ({ component: SearchForm, ...rest }) => (
//   <Route
//     { ...rest }
//     render={ props =>
//       localStorage.token ? (
//         <SearchForm { ...props } />
//       ) : (
//         <Redirect
//           to={ {
//             pathname: '/SearchForm',
//             state: { from: props.location }
//           } }
//         />
//       )
//     }
//   />
// )

// PrivateRoute.propTypes = {
//   component: PropTypes.any,
//   location: PropTypes.object
// }

// export default PrivateRoute
//
// import React from 'react'
// import { Redirect, Route } from 'react-router-dom'

// import { useAuth } from "./Auth";

// const PrivateRoute = ({ component: SearchForm, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             render={props =>
//                 authTokens ? (
//                     <SearchForm {...props} />
//                 ) : (
//                     <Redirect to={{ pathname: "/SearchForm", state: { referer: props.location } }} />
//                 )
//             }
//         />
//     );
// }

// export default PrivateRoute