import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Tab1.css";
import { IonDatetime } from "@ionic/react";
const Tab1 = ({ scList, setScList }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>カレンダー</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonDatetime color="tertiary" presentation="date"></IonDatetime>
    </IonPage>
  );
};

export default Tab1;
