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
    IonGrid, IonRow, IonCol, IonItemOption, IonItemOptions, IonItemSliding, IonLabel
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
    settingsOutline,
  } from "ionicons/icons";
  import { menuController } from "@ionic/core";
  import { Link } from "react-router-dom";
  
  const ViewComplaint: React.FC = () => {
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
      menuController.enable(true, "first5");
      menuController.open("first5");
    }
  
    return (
      <IonPage>
          <IonHeader>
        <IonToolbar className="background">
          <IonTitle className="">View Complaints</IonTitle>
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
  
  
          <IonMenu side="start" menuId="first5" contentId="first5">
            <IonContent>
              <IonList>
                <IonItem>
                  <IonIcon icon={personOutline} className="icon" /> 
                  <Link to="/profile">Profile</Link>
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
                  <IonIcon icon={informationCircle} className="icon" /> 
                  <Link to="/about">About</Link>
                </IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
  
          <IonRouterOutlet id="first5"></IonRouterOutlet>

          <IonCard style={{'height': '80%'}}>
          <IonCardHeader>
            <IonCardSubtitle>Past Complains</IonCardSubtitle>
            {/* <IonCardTitle>Card Title </IonCardTitle> */}
          </IonCardHeader>
          <IonItemSliding>
          <IonItem>
            <IonLabel>Roads are not in good Condition</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption color="primary" onClick={() => {}}>See more...</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Power cut Every Evening</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption color="primary" onClick={() => {}}>See more</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Concrete roads are damaged</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Delete</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Education system is too stressfull</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Delete</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Exams Posponded</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Delete</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        <IonItemSliding>
          <IonItem>
            <IonLabel>No good treatment</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Delete</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
     
         
        </IonCard>
     



        </IonContent>
      </IonPage>
    );
  };
  
  export default ViewComplaint;
  