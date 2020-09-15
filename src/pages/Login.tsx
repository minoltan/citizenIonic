import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOption, IonItemSliding, IonItemOptions, IonButton, IonIcon, IonInput, IonLoading, IonGrid, IonRow, IonCol, IonCheckbox, IonImg, IonRouterLink } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './login.css';
import { star } from 'ionicons/icons'
import { loginUser } from '../firebaseConfig'
import { presentToast } from '../toast';
import { setLoggedIn, setUserState } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';




const Login: React.FC = () => {

    const [busy, setBusy] = useState<boolean>(false)
    const history  = useHistory()
    const dispatch = useDispatch()
    const [input,setInput] = useState<string>('')
    const [username,setUsername] = useState('') 
    const [password,setPassword] = useState('') 
    // const [isLoggedIn, setLoggedIn] = useState<boolean>(false)

    useEffect( () => {
        console.log(input)
    }, [input]) 

   async function login() {
     setBusy(true)
      const res: any  = await loginUser(username, password)
      console.log(`${res ? 'Login success' : 'Login failed'}`)



      if(res){
        dispatch(setLoggedIn(true))
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
          <IonTitle className="title">Login</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonLoading message="Please wait..." duration={0} isOpen={busy}/>
      <IonContent className="ion-padding background">
        <div className="content">


        <IonImg src="/assets/images/login.png" />
         
          {/* <IonInput value={input} onIonChange={(e: any) => setInput(e.target.value)}></IonInput> */}

          <IonInput 
            placeholder="Username?" 
            className = "input ion-padding"
            onIonChange = {(e: any) => setUsername(e.target.value)}/>
          <IonInput 
            type = "password"
            placeholder="Password?"
            className = "input ion-padding "
            onIonChange = {(e: any) => setPassword(e.target.value)}/>
          
          
          <IonButton  fill= "clear"  expand="full" onClick={login} className="buttons" > Login </IonButton>

          <IonRow>
            <IonCol size= "" className="test">
            <IonRouterLink href="#" class="link">Forgot Password?</IonRouterLink>
            </IonCol>
          </IonRow>


          <IonRow>
            <IonCol size= "" className="test">
            <p className="link">New Here? <Link to="/register">Register</Link></p>
            </IonCol>
          </IonRow>
  
         
         
         </div> 

         
      </IonContent>
    </IonPage>
  );
};

export default Login;
