import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonAvatar, IonLabel, IonItemOption, IonItemSliding, IonItemOptions } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const arr = [
  {
    name: 'mino1',
    desc: 'des1'
  },
  {
    name: 'mino2',
    desc: 'des2'
  },
  {
    name: 'mino3',
    desc: 'des3'
  }

]

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Citizen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {arr.map(elem=>(
          <IonItemSliding key={elem.name}>
            <IonItem>
            <IonAvatar>
              <img src={'https://firebasestorage.googleapis.com/v0/b/hotel-agape.appspot.com/o/assets%2Ftestimonials%2Favatar-4.jpg?alt=media&token=28fe3c92-7c2b-426c-b0b8-0ee5029b32eb'}/>
            </IonAvatar>
            <IonLabel className="ion-padding">
          <h2>{elem.name}</h2>
          <h3>{elem.desc}</h3>
          <p>Some Helper Text!</p>
            </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => alert('pressed delete')}>Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>))}
        </IonList>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
