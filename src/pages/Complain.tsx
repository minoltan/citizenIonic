import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonText,
  IonAvatar,
  IonLabel,
  IonItemOption,
  IonItemSliding,
  IonItemOptions,
  IonButton,
  IonIcon,
  IonInput,
  IonButtons,
  IonMenu,
  IonLoading,
  IonRouterOutlet,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonImg,
  IonFab,
  IonFabButton,
  IonBadge,
} from "@ionic/react";
import React, { useEffect, useState, useRef } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import "./login.css";
import {
  star,
  menu,
  personOutline,
  settingsOutline,
  exitOutline,
  informationCircle,
  text,
  add,
  bookOutline,
  mailOutline,
} from "ionicons/icons";
import { menuController } from "@ionic/core";
import { logoutUser } from "../firebaseConfig";
import { useHistory } from "react-router";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';


import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

const Complain: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const history = useHistory();
  const [busy, setBusy] = useState<boolean>(false);
  const [gender, setGender] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState("");
  const [photo, setPhoto] = useState("");
  const fileInput = useRef(null);

  useEffect(() => {
    console.log(input);
  }, [input]);

  async function logout() {
    setBusy(true);
    await logoutUser();
    setBusy(false);
    history.replace("/login");
  }

  async function openMenu() {
    console.log("menu");
    // await menuController.open();
    menuController.enable(true, "first1");
    menuController.open("first1");
  }

  async function takePicture() {
    const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri
    });

    var imageUrl = image.webPath;
// Can be set to the src of an image now
// setState({
// photo: imageUrl
// })
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">Complain</IonTitle>
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
      <IonContent>
        <IonLoading message="Logging out.." duration={0} isOpen={busy} />

        <IonInput
          value={input}
          onIonChange={(e: any) => setInput(e.target.value)}
        ></IonInput>
        {/* <IonButton color="secondary" className="ion-padding">
          {" "}
          Hello World
          <IonIcon slot="start" icon={star}></IonIcon>
        </IonButton>
        <IonButton color="success" className="ion-padding" routerLink="/home">
          {" "}
          Click Me{" "}
        </IonButton> */}

        <IonMenu side="start" menuId="first1" contentId="first1">
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
        <IonRouterOutlet id="first1"></IonRouterOutlet>

        <IonCard>
          <IonCardHeader>
            {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
            <IonCardTitle>Make Complain </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonInput
              placeholder="Title"
              className="input ion-padding"
            ></IonInput>

            <IonItem className="input">
              <IonLabel>Type</IonLabel>
              <IonSelect
                value={gender}
                placeholder="Select One"
                onIonChange={(e: any) => setGender(e.target.value)}
              >
                <IonSelectOption value="female">Education</IonSelectOption>
                <IonSelectOption value="male">Road Construction</IonSelectOption>
                <IonSelectOption value="female">Medical</IonSelectOption>
                <IonSelectOption value="male">Irrigation</IonSelectOption>
                <IonSelectOption value="female">Electricity</IonSelectOption>
                <IonSelectOption value="male">Other</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonTextarea 
            className="input "
            placeholder="Detail..." value={text} 
            onIonChange={e => setText(e.detail.value!)}></IonTextarea>

            {/* <IonInput
              ref={(input: any) => (input !== null ? setFile(input) : null)}
              // type="file"
              hidden
              accept="image/*"
              onClick={() => {
                console.log('onClick');
              }}
            />
              <IonButton
               color="primary"
               onClick={() => {
                 // @ts-ignore
                 fileInput?.current?.click();
                 // setBackgroundOption(BackgroundOptionType.Gradient);
                 }}>
                 Image
                </IonButton> */}

              <div className="input">
                <IonImg className="image" src={photo} ></IonImg>
                <IonFab color="primary" horizontal="center" slot="fixed">
                <IonButton  onClick={() => takePicture()}>
                <IonIcon className="login" icon={add} />
                </IonButton>
                </IonFab>
              </div>

              <div className="ionpad">
              <IonButton  fill= "clear"  expand="full"  className="login" > Submit </IonButton>
              </div>
            
          

          </IonCardContent>
        </IonCard>

       
      </IonContent>
    </IonPage>
  );
};

export default Complain;
