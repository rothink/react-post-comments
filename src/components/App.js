import React from 'react'
import Post from './Post'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Post title="Aprendendo react"/>
                <Post title="oi, Rodrigo"/>
                <Post title="tudo bem, nenem?"/>
            </div>
        )
    }
}
