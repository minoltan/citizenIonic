import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOption, IonItemSliding, IonItemOptions, IonButton, IonIcon, IonInput, IonLoading } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { star } from 'ionicons/icons'
import { loginUser } from '../firebaseConfig'
import { presentToast } from '../toast';
import { setUserState } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';




const Login: React.FC = () => {

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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Citizen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." duration={0} isOpen={busy}/>
      <IonContent className="ion-padding">
          <IonInput value={input} onIonChange={(e: any) => setInput(e.target.value)}></IonInput>

          <IonInput 
            placeholder="Username?" 
            onIonChange = {(e: any) => setUsername(e.target.value)}/>
          <IonInput 
            type = "password"
            placeholder="Password?"
            onIonChange = {(e: any) => setPassword(e.target.value)}/>

        <IonButton color="secondary" onClick={login} > Login
        <IonIcon slot="start" icon={star}></IonIcon>
        </IonButton>
        <IonButton color="success"  routerLink="/register"> Register </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
