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
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
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
  
  const Rules: React.FC = () => {
    const username = useSelector((state: any) => state.user.username);
    const history = useHistory();
    const [busy, setBusy] = useState<boolean>(false);
  
    async function logout() {
      setBusy(true);
      await logoutUser();
      setBusy(false);
      history.replace("/login");
    }
  
    async function openMenu() {
      console.log("menu");
      // await menuController.open();
      menuController.enable(true, "first2");
      menuController.open("first2");
    }
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="title">Laws</IonTitle>
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
          {/* <IonButton onClick={logout}>Logout</IonButton> */}
  
          <IonMenu side="start" menuId="first2" contentId="first2">
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
  
          <IonRouterOutlet id="first2"></IonRouterOutlet>

          <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
        

          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Card Title </IonCardTitle>
            </IonCardHeader>
  
            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash your
              spirit clean.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Card Title </IonCardTitle>
            </IonCardHeader>
  
            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash your
              spirit clean.
            </IonCardContent>
          </IonCard>
  
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Card Title </IonCardTitle>
            </IonCardHeader>
  
            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash your
              spirit clean.
            </IonCardContent>
          </IonCard>
  
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Card Title </IonCardTitle>
            </IonCardHeader>
  
            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash your
              spirit clean.
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Rules;
  