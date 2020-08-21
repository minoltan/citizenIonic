import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLoading, IonButton, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Home.css';
import { useSelector } from 'react-redux';
import {logoutUser} from '../firebaseConfig'
import { useHistory } from 'react-router';
import { informationCircle, map, personCircle, calendar } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';



const Dashboard: React.FC = () => {

  const username = useSelector((state: any) => state.user.username)
  const history = useHistory()
  const [busy, setBusy] = useState<boolean>(false)

  async function logout() {
    setBusy(true)
   await logoutUser()
   setBusy(false)
    history.replace('/login')
  }
 
  return (
    
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonLoading message="Logging out.." duration={0} isOpen={busy}/>
        <p>Hello {username}</p>
        <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;