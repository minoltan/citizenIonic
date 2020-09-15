import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOption, IonItemSliding, IonItemOptions, IonButton, IonIcon, IonInput, IonLoading, IonGrid, IonRow, IonCol, IonCheckbox, IonImg } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './login.css';
import { star } from 'ionicons/icons'
import { loginUser } from '../firebaseConfig'
import { presentToast } from '../toast';
import { setUserState } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';




const Welcome: React.FC = () => {

    const [busy, setBusy] = useState<boolean>(false)
    const history  = useHistory()
    const dispatch = useDispatch()
    const [input,setInput] = useState<string>('')
    const [username,setUsername] = useState('') 
    const [password,setPassword] = useState('') 

    useEffect( () => {
        console.log(input)
    }, [input]) 

   async function login() {
     setBusy(true)
      const res: any  = await loginUser(username, password)
      console.log(`${res ? 'Login success' : 'Login failed'}`)
      if(res){
        dispatch(setUserState(res.user.email))
        history.replace('/dashboard')
        presentToast('You have Logged in!')
       
      }
      setBusy(false)
    }

  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle className="title">Wecome Citizen!</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonLoading message="Please wait..." duration={0} isOpen={busy}/>
      <IonContent className="ion-padding background">
      <IonImg src="/assets/images/citizen.png" />
        <div className="content">   
         <IonButton  className="buttons" fill = 'clear' expand='full'  routerLink="/login"><b>Login</b></IonButton>
         <IonButton className="register" fill = 'clear' expand='full' routerLink="/register"><b>Register</b></IonButton>
        </div>
         
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
