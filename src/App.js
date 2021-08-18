import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import {Navbar} from "./Components/Navbar/Navbar";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar store={props.store}/>

                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
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