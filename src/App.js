import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {UsersContainer} from "./Components/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar store={props.store}/>

                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile store={props.store} />} />
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
                    <Route path='/users' render={() => <UsersContainer />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;