import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLoading,
    IonButton,
    IonIcon,
    IonRouterOutlet,
    IonMenu,
    IonList,
    IonItem,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonGrid, IonRow, IonCol
  } from "@ionic/react";
  import React, { useState } from "react";
  import "./login.css";
  import { useSelector } from "react-redux";
  import { logoutUser } from "../firebaseConfig";
  import { useHistory } from "react-router";
  import {
    informationCircle,
    menu,
    exitOutline,
    personOutline,
    settingsOutline, mailOutline
  } from "ionicons/icons";
  import { menuController } from "@ionic/core";
  import { Link } from "react-router-dom";
  
  const About: React.FC = () => {
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
        <IonToolbar className="background">
          <IonTitle className="">About</IonTitle>
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
  
  
          <IonMenu side="start" menuId="first2" contentId="first2">
          <IonContent>
            <IonList>
              <IonItem>
                <IonIcon icon={personOutline} className="icon" /> 
                <Link to="/profile">Profile</Link>
              </IonItem>
              <IonItem>
                <IonIcon icon={mailOutline} className="icon" />
                {/* <IonRouterLink href="/viewComplaints" class="link">View complaints</IonRouterLink> */}
                <Link to="/viewComplaints">View complaints</Link>
              </IonItem>
              <IonItem>
                <IonIcon icon={exitOutline} className="icon" />
                <IonButton fill="clear" onClick={logout}>
                  Logout
                </IonButton>
              </IonItem>
              <IonItem>
                  <IonIcon icon={informationCircle} className="icon" /> 
                  <Link to="/about">About</Link>
                </IonItem>
            </IonList>
          </IonContent>
          </IonMenu>
  
          <IonRouterOutlet id="first2"></IonRouterOutlet>

        
     



        </IonContent>
      </IonPage>
    );
  };
  
  export default About;
  