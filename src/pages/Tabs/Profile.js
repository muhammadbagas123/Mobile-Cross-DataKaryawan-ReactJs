import React from "react";

import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonCardContent,
  IonCard,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { personCircleOutline, mailOutline } from "ionicons/icons";
import UserContext from "../../contexts/UserContext.js";
import firebase from "../../firebase";
import { toast } from "../../helpers/toast";
import SmallHeader from "../../components/Header/SmallHeader";
import LargeHeader from "../../components/Header/LargeHeader";


const Profile = (props) => {
  const { user } = React.useContext(UserContext);

  async function logoutUser() {
    try {
      await firebase.logout();
      props.history.push("/");
      toast("You have logged out successfully.");
    } catch (err) {
      console.error("Logout Error", err);
      toast(err.message);
    }
  }

  return (
    <IonPage>
      <SmallHeader title="PT CTRL CV" />
      <IonContent>
        <LargeHeader title="Profile" />
        {user ? (
          <>
            <IonCard>
              <IonCardContent>
                <IonList lines="none">
                  <IonItem>
                    <IonIcon icon={personCircleOutline} slot="start"></IonIcon>
                    <IonLabel>
                      <strong>{user.displayName}</strong>
                      <p>Username</p>
                    </IonLabel>
                  </IonItem>

                  <IonItem>
                    <IonIcon icon={mailOutline} slot="start"></IonIcon>
                    <IonLabel>
                      <strong>{user.email}</strong>
                      <p>Email</p>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={`/edit-profile`}
                  color="secondary"
                  fill="outline"
                >
                  Edit Profile
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton expand="block" color="secondary" onClick={logoutUser}>
                  Log Out
                </IonButton>
              </IonCol>
            </IonRow>
          </>
        ) : (
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={`/register`}
                  color="secondary"
                >
                  Sign Up
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={`/login`}
                  color="secondary"
                  fill="outline"
                >
                  Log In
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Profile;