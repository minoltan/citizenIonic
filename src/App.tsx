import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Complain from './pages/Complain';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import {getCurrentUser} from './firebaseConfig'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/* Theme variables */
import './theme/variables.css';
import { useDispatch } from 'react-redux';
import { setUserState } from './redux/actions';
import { calendar, personCircle, map, informationCircle, heart } from 'ionicons/icons';

const RoutingSystem: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/complain" component={Complain} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
      
      <IonTabBar slot="bottom">
      <IonTabButton tab="schedule" href="/dashboard">
        <IonIcon icon={calendar} />
        <IonLabel>Schedule</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="heart" href="/dashboard">
        <IonIcon icon={heart} />
        <IonLabel>Speakers</IonLabel>
      </IonTabButton>

      {/* <IonTabButton tab="map">
        <IonIcon icon={map} />
        <IonLabel>Map</IonLabel>
      </IonTabButton> */}

      <IonTabButton tab="about" href="/dashboard">
        <IonIcon icon={informationCircle} />
        <IonLabel>About</IonLabel>
      </IonTabButton>
    </IonTabBar>
   
  </IonTabs>
    </IonReactRouter>
  )
}

const App: React.FC = () => {
  const [busy, setBusy] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
   getCurrentUser().then((user: any) => {
     if(user) {
       // I'm Logged in
       dispatch(setUserState(user.email))
       window.history.replaceState({},'', '/dashboard')
     }else{
      window.history.replaceState({}, '', '/login')
     }
     setBusy(false)
   })
  }, [])
  return (
  <IonApp> {busy ? <IonSpinner/> : <RoutingSystem/>}
    
    {/* <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/complain" component={Complain} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter> */}
  </IonApp>
  )
  }

export default App;
