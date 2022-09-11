import React from "react";

import "./Tab4.css";
import { chevronForwardOutline } from "ionicons/icons";
import {
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
  IonCardSubtitle,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
const Tab4 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>設定</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard class="card4">
          <IonItem>
            <IonCardTitle slot="start" class="title">
              予定
            </IonCardTitle>
          </IonItem>
          <IonCard class="card4">
            <IonItem>
              <IonCardHeader>
                <IonCardSubtitle>通知</IonCardSubtitle>
              </IonCardHeader>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
          </IonCard>

          <IonCard class="card4">
            <IonItem>
              <IonCardHeader>
                <IonCardSubtitle>予定終了後自動で予定を消去</IonCardSubtitle>
              </IonCardHeader>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
          </IonCard>
        </IonCard>

        <IonCard class="card4">
          <IonItem>
            <IonLabel slot="start">背景の色</IonLabel>
            <IonSelect slot="end">
              <IonSelectOption value="white">白</IonSelectOption>
              <IonSelectOption value="black">黒</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCard>
        <IonCard class="card4">
          <IonItem href="">
            <IonIcon icon={chevronForwardOutline} slot="end" />
            <IonLabel slot="start">利用規約</IonLabel>
          </IonItem>
        </IonCard>

        <IonCard class="card4">
          <IonItem href="">
            <IonIcon icon={chevronForwardOutline} slot="end" />
            <IonLabel slot="start">バージョン情報</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
