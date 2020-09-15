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
    IonCardContent, IonAvatar, IonGrid, IonRow, IonCol, IonInput, IonFab, IonImg  } from "@ionic/react";
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
    settingsOutline, add, mailOutline
  } from "ionicons/icons";
  import { menuController } from "@ionic/core";
  import { Link } from "react-router-dom";
import { Camera, CameraResultType } from "@capacitor/core";
import ImageUploader from 'react-images-upload';
  
  const Profile: React.FC = () => {
    const history = useHistory();
    const [busy, setBusy] = useState<boolean>(false);
    const [Name,setName] = useState('');
    const [file, setFile] = useState(''); 
  
    async function logout() {
      setBusy(true);
      await logoutUser();
      setBusy(false);
      history.replace("/login");
    }
  
    async function openMenu() {
      console.log("menu");
      // await menuController.open();
      menuController.enable(true, "first4");
      menuController.open("first4");
    }

    async function takePicture() {
        const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri
        });
    
    // Can be set to the src of an image now
    // setState({
    // photo: imageUrl
    // })
    }

    function onDrop(picture:any) {
      setFile(picture[0]);
    }
  
    return (
      <IonPage>
          <IonHeader>
        <IonToolbar className="background">
          <IonTitle className="">Profile</IonTitle>
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
  
          <IonMenu side="start" menuId="first4" contentId="first4">
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
  
          <IonRouterOutlet id="first4"></IonRouterOutlet>

        <IonGrid>
            <IonRow>
                <IonCol size="5"></IonCol>
                <IonCol className="align">
                    <IonAvatar>
                        <img src="https://firebasestorage.googleapis.com/v0/b/citizenionic.appspot.com/o/profile%2Fprofile.png?alt=media&token=cfdaa481-57ac-4997-83d4-d860c4693310"></img>
                    </IonAvatar>
               
                
                </IonCol>

                {/* <IonFab color="primary" horizontal="center" slot="fixed">
                <IonButton  className="add" onClick={() => takePicture()}>
                <IonIcon className="buttons" icon={add} />
                </IonButton>
                </IonFab> */}
               
            </IonRow>
            <IonRow>
                <IonCol size="1">

                </IonCol>
                <IonCol>
                  <IonTitle style={{'text-align': 'center'}}>abc</IonTitle>
                  <IonCardSubtitle style={{'text-align': 'center'}} className="ion-padding-start">Minoltan Issack</IonCardSubtitle>
                </IonCol>
            </IonRow>
        </IonGrid>
       

          <IonCard>
            {/* <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Card Title </IonCardTitle>
            </IonCardHeader>
   */}
            <IonCardContent>
             <IonGrid>
                 <IonRow>
                   <IonCol size="5" className="ion-padding-top">Name</IonCol>
                   <IonCol size="7">
                   <IonInput
                        placeholder="Enter your title here..."
                        className=""
                        onIonChange = {(e: any) => setName(e.target.value)}
              ></IonInput>
                   </IonCol>
                 </IonRow>
                 <IonRow>
                   <IonCol size="5" className="ion-padding-top">Email</IonCol>
                   <IonCol size="7">
                   <IonInput
                        placeholder="Enter your Email here..."
                        className=""
                        onIonChange = {(e: any) => setName(e.target.value)}
              ></IonInput>
                   </IonCol>
                 </IonRow>
                 <IonRow>
                   <IonCol size="5" className="ion-padding-top">Password</IonCol>
                   <IonCol size="7">
                   <IonInput
                        placeholder="Enter your Password here..."
                        className=""
                        onIonChange = {(e: any) => setName(e.target.value)}
              ></IonInput>
                   </IonCol>
                 </IonRow>
                <IonRow>
                      <ImageUploader  
                        buttonText='Choose an image'
                        onChange={onDrop}
                        withPreview={true}
                        singleImage={true}
                        withIcon={false}
                        withLabel={false}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                      />
                </IonRow>
                 <IonRow className="ion-justify-content-end">
                   <IonCol size="8" className="ion-padding-top"></IonCol>
                   <IonCol size="4" className="ion-float-right">
                   <IonButton fill="clear"  className="small-button-active">Save</IonButton>
                   </IonCol>
                 </IonRow>
             </IonGrid>
            </IonCardContent>
          </IonCard>
         
        </IonContent>
      </IonPage>
    );
  };
  
  export default Profile;
  