import * as React from 'react'
import './App.css'
import MainNav from './MainNav'
import AppHeader from './AppHeader'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <AppHeader />

                <div className="MainNav">
                    <MainNav />
                </div>

                <div className="MainContent">
                    <span>Content here</span>
                </div>
            </div>
        )
    }
}

export default App
