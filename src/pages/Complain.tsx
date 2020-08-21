import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOption, IonItemSliding, IonItemOptions, IonButton, IonIcon, IonInput } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { star } from 'ionicons/icons'


const Complain: React.FC = () => {
    const [input,setInput] = useState<string>('')

    useEffect( () => {
        console.log(input)
    }, [input]) 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Citizen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonInput value={input} onIonChange={(e: any) => setInput(e.target.value)}></IonInput>
        <IonButton color="secondary" className="ion-padding"> Hello World
        <IonIcon slot="start" icon={star}></IonIcon>
        </IonButton>
        <IonButton color="success" className="ion-padding" routerLink="/home"> Click Me </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Complain;
