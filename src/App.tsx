import React, { useEffect, useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner, IonTabBar, IonTabButton, 
  IonIcon, IonLabel, IonBadge, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Complain from './pages/Complain';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Welcome from './pages/Welcome';
import Inbox from './pages/Inbox';
import {getCurrentUser, getData, getFilterNews, getNews, loginUser} from './firebaseConfig';
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
import { useDispatch, useSelector } from 'react-redux';
import { setUserState, setTestDataState, setNewsDataState, setUserId, setFilterNewsDataState } from './redux/actions';
import { calendar, personCircle, map, informationCircle, heart, newspaperOutline, navigateOutline, bookOutline, mailOutline } from 'ionicons/icons';
import Rules from './pages/Rules';

import "./pages/login.css";
import About from './pages/About';
import ViewComplaint from './pages/ViewComplaint';



const RoutingSystem: React.FC = () => {
  const [isTab, setIsTab] = useState<boolean>(true);
  const isLoggedIn = useSelector((state: any) => state.user1.isLoggedIn);
  
  return (
       <IonReactRouter> 
          <IonTabs>
            <IonRouterOutlet>
            <Route path="/welcome" component={Welcome} exact={true} />
            <Route path="/viewComplaints" component={ViewComplaint} exact={true} />
            <Route path="/about" component={About} exact={true} />
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/home" component={Home} exact={true} />
            <Route path="/dashboard" component={Dashboard} exact={true} />
            <Route path="/complain" component={Complain} exact={true} />
            <Route path="/rules" component={Rules} exact={true} />
            <Route path="/inbox" component={Inbox} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/register" component={Register} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/welcome" />} />
          </IonRouterOutlet>
          
            <IonTabBar slot="bottom" style={{'display': isLoggedIn ? '': 'none'}}>
                    <IonTabButton className="tab-bar"  tab="schedule" href="/dashboard">
                      <IonIcon icon={newspaperOutline} />
                      <IonLabel>Newsfeed</IonLabel>
                      <IonBadge className="badge">3 </IonBadge> 
                    </IonTabButton>

                    <IonTabButton className="tab-bar" tab="heart" href="/complain">
                      <IonIcon icon={navigateOutline} />
                      <IonLabel>Complain</IonLabel>
                    </IonTabButton>

                    <IonTabButton className="tab-bar" tab="about" href="/rules">
                      <IonIcon icon={bookOutline} />
                      <IonLabel>Laws</IonLabel>
                    </IonTabButton>
                  </IonTabBar>
          </IonTabs>
       
      </IonReactRouter>
  )
}

const App: React.FC = () => {
  // const [isTab, setIsTab] = useState<boolean>(false);
  const [busy, setBusy] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
   getCurrentUser().then((user: any) => {
     if(user) {
       // I'm Logged in
       dispatch(setUserState(user.email))
       dispatch(setUserId(user.uid))
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
      dispatch(setNewsDataState(newsList))     
    })
   }, [])

   useEffect(() => {
    getFilterNews('Electricity').then((filterNewsData: any) => {
      const filterNewsList = filterNewsData
      console.log(filterNewsList);
      dispatch(setFilterNewsDataState(filterNewsList))     
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
