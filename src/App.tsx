import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { VerticalAdditionPage } from './components/VerticalAddition';
import { AdditionBelow10Page } from './pages/AdditionBelow10';



function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                {
                    // SidebarData.map((item) => {
                    //     return (
                    //         <Route path={item.path} exact>
                    //             <DemoContent title={item.title} />
                    //         </Route>
                    //     )
                    // })
                }

                <Route path="/" exact>
                    <AdditionBelow10Page />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
