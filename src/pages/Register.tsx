import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOption, IonItemSliding, IonItemOptions, IonButton, IonIcon, IonInput, IonLoading, IonImg } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { star } from 'ionicons/icons'
import { Link } from 'react-router-dom';
import { presentToast } from '../toast';
import {registerUser} from '../firebaseConfig';
import './login.css';



const Register: React.FC = () => {
    const [busy, setBusy] = useState<boolean>(false)
    const [input,setInput] = useState<string>('')
    const [username,setUsername] = useState('') 
    const [password,setPassword] = useState('') 
    const [confirmPassword,setConfirmPassword] = useState('') 

    useEffect( () => {
        console.log(input)
    }, [input]) 

    async function RegisterUser() {
        setBusy(true)
      console.log(username, password, confirmPassword)
      if(password !== confirmPassword){
          return presentToast('Passwords do not match')
      }
      if(username.trim() === '' || password.trim() === ''){
          return presentToast('Username and password are required')
      }
      const res = await registerUser(username, password)
      if(res) {
          presentToast('You have registered successfully!')
      }
      setBusy(false)
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Registration in progress!" duration={0} isOpen={busy}/>
      <IonContent className="ion-padding">
      <IonImg src="/assets/images/register.png" />

          <IonInput value={input} onIonChange={(e: any) => setInput(e.target.value)}></IonInput>

          <IonInput 
            className = "input ion-padding"
            placeholder="Username?" 
            onIonChange = {(e: any) => setUsername(e.target.value)}/>
          <IonInput
            className = "input ion-padding"
            type = "password"
            placeholder="Password?"
            onIonChange = {(e: any) => setPassword(e.target.value)}/>
          <IonInput 
            className = "input ion-padding"
            type = "password"
            placeholder="Confirm Password?"
            onIonChange = {(e: any) => setConfirmPassword(e.target.value)}/>

        <IonButton className="login" fill= "clear"  expand="full" onClick={RegisterUser} > Register</IonButton>
        <p className="link ion-padding">Already have an account? <Link to="/login">Login</Link></p>
    
      </IonContent>
    </IonPage>
  );
};

export default Register;
