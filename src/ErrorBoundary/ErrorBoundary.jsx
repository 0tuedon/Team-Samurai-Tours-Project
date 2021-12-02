import React from 'react'

class ErrorBoundary extends React.Component
{
    constructor(props)
    {
        super()
        this.state = {hasError:false}
    }
    
    static getDerivedStateFromError  (error)
    {
        return {hasError:true}
    }
    componentDidCatch(error,errorInfo)
    {
        if(error){
        this.setState({hasError:true})
        }

    }

    render(){
        if(this.state.hasError)
        {
            return  <h1>Error</h1>
        }
        return this.props.children
        
    }
}


export default ErrorBoundary;