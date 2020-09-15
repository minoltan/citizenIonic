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
    IonItemOption,IonGrid, IonRow, IonCol, IonPopover
  } from "@ionic/react";
  import React, { useEffect, useState } from "react";
  import "./login.css";
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
    const [showPopover, setShowPopover] = useState<boolean>(false);
  
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
          <IonTitle className="">Laws</IonTitle>
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
  
          {/* <p>Hello {username}</p> */}
          {/* <IonButton onClick={logout}>Logout</IonButton> */}
  
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
{/* 
          <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding> */}
        
        <IonGrid>
          <IonRow>
          <IonCol size="6">
            <IonCard style={{'height': '100px', 'background-color':'#00beaa'}}>
              <IonCardHeader>
                <IonCardSubtitle style={{'color':'white'}}>Road Construction</IonCardSubtitle>
                {/* <IonCardTitle>Road Construction</IonCardTitle> */}
              </IonCardHeader>
    
              <IonCardContent>
                <IonButton fill="clear" className="iconColor"
                onClick={() => setShowPopover(true)}> see more...</IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol> 
          <IonCol size="6">
            <IonCard style={{'height': '100px', 'background-color':'#00beaa'}}>
              <IonCardHeader>
                <IonCardSubtitle style={{'color':'white'}}>Electricity</IonCardSubtitle>
                {/* <IonCardTitle>Road Construction</IonCardTitle> */}
              </IonCardHeader>
    
              <IonCardContent>
                <IonButton fill="clear" className="iconColor"
                onClick={() => setShowPopover(true)}> see more...</IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>
          </IonRow>
     
          <IonRow>
          <IonCol size="6">
            <IonCard style={{'height': '100px', 'background-color':'#00beaa'}}>
              <IonCardHeader>
                <IonCardSubtitle style={{'color':'white'}}>Water</IonCardSubtitle>
                {/* <IonCardTitle>Road Construction</IonCardTitle> */}
              </IonCardHeader>
    
              <IonCardContent>
                <IonButton fill="clear" className="iconColor"
                onClick={() => setShowPopover(true)}> see more...</IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol> 
          <IonCol size="6">
            <IonCard style={{'height': '100px', 'background-color':'#00beaa'}}>
              <IonCardHeader>
                <IonCardSubtitle style={{'color':'white'}}>Education</IonCardSubtitle>
                {/* <IonCardTitle>Road Construction</IonCardTitle> */}
              </IonCardHeader>
    
              <IonCardContent>
                <IonButton fill="clear" className="iconColor"
                onClick={() => setShowPopover(true)}> see more...</IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>
          </IonRow>
          <IonRow>
          <IonCol size="6">
            <IonCard style={{'height': '100px', 'background-color':'#00beaa'}}>
              <IonCardHeader>
                <IonCardSubtitle style={{'color':'white'}}>Road Construction</IonCardSubtitle>
                {/* <IonCardTitle>Road Construction</IonCardTitle> */}
              </IonCardHeader>
    
              <IonCardContent>
                <IonButton fill="clear" className="iconColor"
                onClick={() => setShowPopover(true)}> see more...</IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol> 
          <IonCol size="6">
            <IonCard style={{'height': '100px', 'background-color':'#00beaa'}}>
              <IonCardHeader>
                <IonCardSubtitle style={{'color':'white'}}>Electricity</IonCardSubtitle>
                {/* <IonCardTitle>Road Construction</IonCardTitle> */}
              </IonCardHeader>
    
              <IonCardContent>
                <IonButton fill="clear" className="iconColor"
                onClick={() => setShowPopover(true)}> see more...</IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>
          </IonRow>
          <IonRow>
          <IonCol size="6">
            <IonCard style={{'height': '100px', 'background-color':'#00beaa'}}>
              <IonCardHeader>
                <IonCardSubtitle style={{'color':'white'}}>Road Construction</IonCardSubtitle>
                {/* <IonCardTitle>Road Construction</IonCardTitle> */}
              </IonCardHeader>
    
              <IonCardContent>
                <IonButton fill="clear" className="iconColor"
                onClick={() => setShowPopover(true)}> see more...</IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol> 
          <IonCol size="6">
            <IonCard style={{'height': '100px', 'background-color':'#00beaa'}}>
              <IonCardHeader>
                <IonCardSubtitle style={{'color':'white'}}>Electricity</IonCardSubtitle>
                {/* <IonCardTitle>Road Construction</IonCardTitle> */}
              </IonCardHeader>
    
              <IonCardContent>
                <IonButton fill="clear" className="iconColor"
                onClick={() => setShowPopover(true)}> see more...</IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>
          </IonRow>
         
        </IonGrid>

        <IonPopover
        isOpen={showPopover}
        cssClass='my-custom-class'
        onDidDismiss={e => setShowPopover(false)}
         >

<IonCard style={{'height': '80%'}}>
          <IonCardHeader>
            <IonCardSubtitle>Road Construction</IonCardSubtitle>
            {/* <IonCardTitle>Card Title </IonCardTitle> */}
          </IonCardHeader>
          <IonItemSliding>
          <IonItem>
            <IonLabel>Rules 1 </IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption color="danger" onClick={() => {}}>Delete</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Rule 2</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Delete</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Rule 3</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Delete</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Rule 4</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Delete</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Rule 5</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Delete</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        <IonItemSliding>
          <IonItem>
            <IonLabel>Rule 6</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Delete</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
     
         
        </IonCard>

      
       </IonPopover>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Rules;
  