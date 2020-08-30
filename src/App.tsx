import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner, IonTabBar, IonTabButton, 
  IonIcon, IonLabel, IonBadge, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Complain from './pages/Complain';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Welcome from './pages/Welcome';
import Inbox from './pages/Inbox';
import {getCurrentUser, getData, getNews} from './firebaseConfig';
import './pages/app.css';

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
import { setUserState, setTestDataState } from './redux/actions';
import { calendar, personCircle, map, informationCircle, heart, newspaperOutline, navigateOutline, bookOutline, mailOutline } from 'ionicons/icons';
import Rules from './pages/Rules';




const RoutingSystem: React.FC = () => {

  return (
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
        <Route path="/welcome" component={Welcome} exact={true} />
        <Route path="/home" component={Home} exact={true} />
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/complain" component={Complain} exact={true} />
        <Route path="/rules" component={Rules} exact={true} />
        <Route path="/inbox" component={Inbox} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/welcome" />} />
      </IonRouterOutlet>
   
      <IonTabBar slot="bottom" >
      <IonTabButton tab="schedule" href="/dashboard">
        <IonIcon icon={newspaperOutline} />
        <IonLabel>Newsfeed</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="heart" href="/complain">
        <IonIcon icon={navigateOutline} />
        <IonLabel>Complain</IonLabel>
      </IonTabButton>

      <IonTabButton tab="inbox" href="/inbox">
        <IonIcon icon={mailOutline} />
        <IonLabel>Inbox</IonLabel>
        <IonBadge>3</IonBadge>
      </IonTabButton>

      <IonTabButton tab="about" href="/rules">
        <IonIcon icon={bookOutline} />
        <IonLabel>Laws</IonLabel>
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
      window.history.replaceState({}, '', '/welcome')
     }
     setBusy(false)
   })
  }, [])

  useEffect(() => {
    getData().then((testData: any) => {
      const test = testData
      dispatch(setTestDataState(test))
      
    })
   }, [])

   useEffect(() => {
    getNews().then((newsData: any) => {
      const newsList = newsData
      dispatch(setTestDataState(newsList))
      console.log(newsList);
      
    })
   }, [])
  return (
  <IonApp> {busy ? <IonSpinner /> : <RoutingSystem/>}
    
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
