import React,{useEffect} from 'react'
import {Route, withRouter} from 'react-router-dom'
import Layout1 from './core/Layout1'

function ScrollToTopRoute(props) {
    useEffect((prevProps) => {
       if(props.path === props.location.pathname && props.location.pathname !== prevProps.location.pathname)
       {
        window.scrollTo(0, 0)
       }
    }, [])
    
    const { component: Component, ...rest } = props;
    return (
        <Layout1>
        <Route {...rest} render={props => (<Component {...props} />)} />
        </Layout1>
    )
}

export default withRouter(ScrollToTopRoute)
