import React from "react";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonButton
} from "@ionic/react";

const NavHeader = ({ title, option, icon, action }) => {
  return (
    <IonHeader>
      <IonToolbar color="secondary">
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        {option && (
          <IonButtons slot="secondary">
            <IonButton onClick={action}>
              <IonIcon slot="icon-only" icon={icon} />
            </IonButton>
          </IonButtons>
        )}
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default NavHeader;