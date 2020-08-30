import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLoading,
  IonButton,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonRouterOutlet,
  IonMenu,
  IonList,
  IonItem,
  IonButtons,
  IonMenuButton,
  IonAvatar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonText,
  IonImg,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import { logoutUser } from "../firebaseConfig";
import { useHistory, Route, Redirect } from "react-router";
import {
  informationCircle,
  map,
  personCircle,
  calendar,
  heart,
  menu,
  settings,
  exitOutline,
  alertCircleOutline,
  personOutline,
  settingsOutline,
  walk,
  warning,
  wine,
  wifi,
  pin,
  mailOutline,
} from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import Welcome from "./Welcome";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Complain from "./Complain";
import { menuController } from "@ionic/core";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const username = useSelector((state: any) => state.user.username);
  const newsList = useSelector((state: any) => state.newsData.title);
  const name = useSelector((state: any) => state.testData.name);
  const history = useHistory();
  const [busy, setBusy] = useState<boolean>(false);

  // const arr = [
  //   {
  //     name: 'abc'
  //   },
  //   {
  //     name: 'poe'
  //   }
  // ]

  async function logout() {
    setBusy(true);
    await logoutUser();
    setBusy(false);
    history.replace("/welcome");
  }

  async function openMenu() {
    console.log("menu");
    // await menuController.open();
    menuController.enable(true, "first");
    menuController.open("first");
    console.log(name)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">Newsfeed</IonTitle>
          <IonButtons slot="start">
            <IonIcon
              icon={menu}
              className="ion-padding iconColor"
              size="large"
              onClick={openMenu}
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLoading message="Logging out.." duration={0} isOpen={busy} />

        <p>Hello {username}</p>
         <p>Hi{name}</p>
        {/* <IonButton onClick={logout}>Logout</IonButton> */}

        <IonMenu side="start" menuId="first" contentId="first">
          {/* <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader> */}
          <IonContent>
            <IonList>
              <IonItem>
                <IonIcon icon={personOutline} className="icon" /> Profile
              </IonItem>
             
              <IonItem>
                <IonIcon icon={settingsOutline} className="icon" />
                Settings
              </IonItem>
              <IonItem>
                <IonIcon icon={exitOutline} className="icon" />
                <IonButton fill="clear" onClick={logout}>
                  Logout
                </IonButton>
              </IonItem>
              <IonItem>
                {" "}
                <IonIcon icon={informationCircle} className="icon" /> About
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="first"></IonRouterOutlet>

        <IonCard>
        <IonItem>
          <IonText color="medium" slot="end">02/08/2020</IonText>
          <IonCardHeader className="title1">
            <IonCardSubtitle>Electricity</IonCardSubtitle>
            {/* {newsList.map((elem: any)=> (
            <p key={elem.title}>Test {elem.title}</p>
            ))} */}
            
            <h5>Power Failure Today </h5>
          </IonCardHeader>
          </IonItem>
          <IonImg src="https://firebasestorage.googleapis.com/v0/b/hotel-agape.appspot.com/o/assets%2Froom%2Fimg-16.jpg?alt=media&token=57140b77-9f0f-45fc-949a-eaa904fe5bca" />
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
         </IonCardContent>
        </IonCard>

        <IonCard>
        <IonItem>
          <IonText color="medium" slot="end">02/08/2020</IonText>
          <IonCardHeader className="title1">
            <IonCardSubtitle>Electricity</IonCardSubtitle>
            <h5>Power Failure Today </h5>
          </IonCardHeader>
          </IonItem>
          <IonImg src="https://firebasestorage.googleapis.com/v0/b/hotel-agape.appspot.com/o/assets%2Froom%2Fimg-16.jpg?alt=media&token=57140b77-9f0f-45fc-949a-eaa904fe5bca" />
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
         </IonCardContent>
        </IonCard>


       </IonContent>
    </IonPage>
  );
};

export default Dashboard;
