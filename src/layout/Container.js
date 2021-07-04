import React from 'react'

const Container = (props) => {
    return (
        <div className="flex min-h-screen max-w-7xl mx-auto">
            {props.children}
        </div>
    )
}

export default Container
