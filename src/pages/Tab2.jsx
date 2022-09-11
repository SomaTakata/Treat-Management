import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonText,
} from "@ionic/react";
import "./Tab2.css";
import { pin, calendar, person, document } from "ionicons/icons";
import React, { useState } from "react";

const Tab2 = ({ scList, setScList }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>予定</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {scList.map((props) => (
          <IonCard class="card2" key={props.key}>
            <IonItem>
              <IonButton id="open-modal" fill="outline" slot="end">
                編集
              </IonButton>
              <IonIcon icon={calendar} slot="start" />
              <IonLabel color="medium">{props.date}</IonLabel>
            </IonItem>

            <IonItem>
              <IonIcon icon={person} slot="start" />
              <IonLabel color="medium">{props.name}</IonLabel>
            </IonItem>

            <IonItem>
              <IonIcon icon={pin} slot="start" />
              <IonLabel color="medium">{props.place}</IonLabel>
            </IonItem>

            <IonItem>
              <IonIcon icon={document} slot="start" />
              <IonLabel color="medium">{props.memo}</IonLabel>
            </IonItem>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
