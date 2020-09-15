import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonInput,
  IonButtons,
  IonMenu,
  IonLoading,
  IonRouterOutlet,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonImg,
  IonFab, IonGrid, IonRow, IonRouterLink, IonSpinner
} from "@ionic/react";
import React, { useEffect, useState, useRef } from "react";
import "./login.css";
import {
  menu,
  personOutline,
  settingsOutline,
  exitOutline,
  informationCircle,
  add, mailOutline
} from "ionicons/icons";
import { menuController } from "@ionic/core";
import { logoutUser, postComplain } from "../firebaseConfig";
import { useHistory } from "react-router";


import { Plugins, CameraResultType } from '@capacitor/core';
import { useSelector } from "react-redux";
import { presentToast } from "../toast";
import { Link } from "react-router-dom";
import ImageUploader from 'react-images-upload';


const { Camera } = Plugins;

const Complain: React.FC = () => {
  const [input] = useState<string>("");
  const history = useHistory();
  const [busy, setBusy] = useState<boolean>(false);
  const [busy1, setBusy1] = useState<boolean>(false);
  const [type, setType] = useState('');
  const [text, setText] = useState('');
  const [] = useState('');
  const [photo] = useState('');
  const [title,setTitle] = useState('') 
  const userId  = useSelector((state: any) => state.user.userId)
  const [file, setFile] = useState('');

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

// Can be set to the src of an image now
// setState({
// photo: imageUrl
// })
}

function onDrop(picture:any) {
  setFile(picture[0]);
}

async function postComplaint() {
  setBusy1(true);
  const res = await postComplain(userId,title, type, text, file);
  if(res) {
    presentToast('Complain send Successfully')
    // history.push('/dashboard')
}
// setBusy1(true);
}
  return (
    <IonPage>
       <IonHeader>
        <IonToolbar className="background">
          <IonTitle className="">Complain</IonTitle>
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

        <IonMenu side="start" menuId="first1" contentId="first1">
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
        <IonRouterOutlet id="first1"></IonRouterOutlet>

          {/* <IonGrid>
              <IonRow  style={{'height':'100px' , 'background-color':'#f5f5f5','padding': '0px' } }>
                <IonCol>
                  <h5 className="comHead">Complaints</h5> 
                  <h2 className="complaint">16</h2>
                </IonCol>
                <IonCol>
                <h5 className="comHead">Success</h5> 
                  <h2 className="complaint">13</h2>
                  </IonCol>
                  <IonCol>
                  <h5 className="comHead">Pendings</h5> 
                  <h2 className="complaint">03</h2>
                  </IonCol>
              </IonRow>
            </IonGrid> */}

        <IonCard style={{'margin-top': '0px', 'margin-left':'0px', 'margin-right':'0px'}}>
          <IonCardHeader>
            <IonCardTitle>Post Complain </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>

          <IonGrid>
            <IonRow>
             <IonLabel style={{'font-size': '16px'}}>Title</IonLabel>
            </IonRow>
            <IonRow>
              <IonInput
                placeholder="Enter your title here..."
                className="input ion-padding"
                style={{'background-color': '#FAFAFA', 'border-radius': '6px'}}
                onIonChange = {(e: any) => setTitle(e.target.value)}
              ></IonInput>
            </IonRow>
         
          </IonGrid>
         

          <IonLabel style={{'font-size': '16px'}}>Type</IonLabel>
            <IonItem className="input" style={{'background-color': '#FAFAFA', 'border-radius': '6px'}}>
              <IonLabel style={{'color': '#bfbfbf', 'font-size': '13px', 'font-weight': '2px'}}></IonLabel>
              <IonSelect
                value={type}
                placeholder="Select One"
                onIonChange={(e: any) => setType(e.target.value)}
              >
                <IonSelectOption value="Education">Education</IonSelectOption>
                <IonSelectOption value="Road Construction">Road Construction</IonSelectOption>
                <IonSelectOption value="Medical">Medical</IonSelectOption>
                <IonSelectOption value="Irrigation">Irrigation</IonSelectOption>
                <IonSelectOption value="Electricity">Electricity</IonSelectOption>
                <IonSelectOption value="Other">Other</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonLabel style={{'font-size': '16px'}}>Description</IonLabel>
            <IonTextarea 
            style={{'background-color': '#FAFAFA', 'border-radius': '6px', 'height': '53px'}}
            className="input "
            placeholder="Please Provide Description..." value={text} 
            onIonChange={e => setText(e.detail.value!)}></IonTextarea>


              <IonLabel style={{'font-size': '16px'}}>Image</IonLabel>
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
              {/* <div className="input">
                <IonImg className="image ion-padding" 
                 style={{'background-color': '#FAFAFA', 'border-radius': '6px'}}
                src="https://firebasestorage.googleapis.com/v0/b/citizenionic.appspot.com/o/electricity%2Felectricity1.jpg?alt=media&token=191c8610-35ec-49a7-a039-2007c3b9e894" ></IonImg>
                <IonFab color="primary" horizontal="center" slot="fixed">
                <IonButton fill="clear" className="add" onClick={() => takePicture()}>
                <IonIcon className="buttons" icon={add} />
                </IonButton>
                </IonFab>
              </div> */}

              <div className="ionpad">
              <IonButton  fill= "clear"  expand="full"  className="buttons" onClick={postComplaint} >
                {/* {busy1 ?  <IonSpinner />: ''} */}
             
              <IonLoading message="Sending.." duration={1000} isOpen={busy1} /> Submit </IonButton>
              </div>
            
          </IonCardContent>
        </IonCard>

       
      </IonContent>
    </IonPage>
  );
};

export default Complain;
