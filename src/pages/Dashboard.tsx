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
  IonCardContent,
  IonText,
  IonImg, IonRefresher, IonRefresherContent, IonRouterLink
} from "@ionic/react";
import React, { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilterNews, logoutUser } from "../firebaseConfig";
import { useHistory } from "react-router";
import {
  informationCircle,
  menu,
  exitOutline,
  personOutline,
  settingsOutline, chevronDownCircleOutline, mailOutline
} from "ionicons/icons";

import { menuController } from "@ionic/core";
import { RefresherEventDetail } from '@ionic/core';
import { Link } from "react-router-dom";
import { setFilterNewsDataState } from "../redux/actions";

const Dashboard: React.FC = () => {
  const username = useSelector((state: any) => state.user.username);
  const newsList = useSelector((state: any) => state.newsData.title1);
  const filterNewsList = useSelector((state: any) => state.filterNewsData.title);
  const name = useSelector((state: any) => state.testData.name);
  const history = useHistory();
  const [busy, setBusy] = useState<boolean>(false);
  const dispatch = useDispatch();


  async function logout() {
    setBusy(true);
    await logoutUser();
    setBusy(false);
    history.replace("/welcome");
  }

  const test1 = [
    {a: "aaa"},
    {a: "bbb"}
  ]

  async function openMenu() {
    console.log("menu");
    console.log(history.location.pathname);
    
    // await menuController.open();
    menuController.enable(true, "first");
    menuController.open("first");
    console.log(newsList);
    console.log(test1);
    
  }

  async function smallBtnClick(type: string) {
    
    getFilterNews(type).then((filterNewsData: any) => {
      const filterNewsList = filterNewsData
      console.log(filterNewsList);
      dispatch(setFilterNewsDataState(filterNewsList))     
    })
  }

  async function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.detail.complete();
    }, 2000);
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="background">
          <IonTitle className="">Newsfeed</IonTitle>
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

        {/* <p>Hello {username}</p>
         <p>Hi{name}</p> */}
       

       

        <IonMenu side="start" menuId="first" contentId="first">
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

        <IonRouterOutlet id="first"></IonRouterOutlet>

        {/* <IonButton fill="clear"  onClick={() => smallBtnClick("a")} className="small-button hover">All</IonButton> */}
        <IonButton fill="clear"  onClick={()=>smallBtnClick("Electricity")} className="small-button">Electricity</IonButton>
        <IonButton fill="clear" onClick={()=>smallBtnClick("Road")} className="small-button">Road</IonButton>
        <IonButton fill="clear" onClick={()=>smallBtnClick("Water")} className="small-button">Water</IonButton>
        <IonButton fill="clear" onClick={()=>smallBtnClick("Education")} className="small-button">Education</IonButton>
      
        {filterNewsList !== undefined && filterNewsList.map((object:any)=>(
           <IonCard>
           <IonItem>
             <IonText color="medium" slot="end">02/08/2020</IonText>
             <IonCardHeader className="title1">
        <IonCardSubtitle>{object.type}</IonCardSubtitle>
               <h5>{object.title}</h5>
             </IonCardHeader>
             </IonItem>
             <IonImg src={object.image} />
             <IonCardContent>
              {object.description}
            </IonCardContent>
           </IonCard>
        ))}
    

    <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
        <IonRefresherContent
          pullingIcon={chevronDownCircleOutline}
          pullingText="Pull to Load"
          refreshingSpinner="circles"
          refreshingText="Loading...">
        </IonRefresherContent>
      </IonRefresher>

       </IonContent>
    </IonPage>
  );
};

export default Dashboard;
