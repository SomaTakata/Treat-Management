import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonButton,
  IonCard,
} from "@ionic/react";
import { calendar, person, pin, document } from "ionicons/icons";
import "./Tab3.css";
import React, { useEffect, useState } from "react";

const Tab3 = ({ scList, setScList }) => {
  const [inputDate, setInputDate] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPlace, setInputPlace] = useState("");
  const [inputMemo, setInputMemo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setScList([
      ...scList,
      {
        date: inputDate,
        name: inputName,
        place: inputPlace,
        memo: inputMemo,
        key: scList.length,
      },
    ]);
    console.log(scList);
    //入力した情報の取り消し
    setInputDate("");
    setInputMemo("");
    setInputName("");
    setInputPlace("");
  };

  const handleD = (event) => {
    setInputDate(event.target.value);
  };
  const handleN = (event) => {
    setInputName(event.target.value);
  };
  const handleP = (event) => {
    setInputPlace(event.target.value);
  };
  const handleM = (event) => {
    setInputMemo(event.target.value);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>追加</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonCard class="card3">
        <IonItem>
          <IonIcon icon={calendar} slot="start" />
          <IonInput
            onIonChange={handleD}
            value={inputDate}
            required
            type="date"
            placeholder="日付"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonIcon icon={person} slot="start" />
          <IonInput
            onIonChange={handleN}
            value={inputName}
            required
            type="text"
            placeholder="名前"
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonIcon icon={pin} slot="start" />
          <IonInput
            onIonChange={handleP}
            value={inputPlace}
            type="text"
            placeholder="場所"
            required
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonIcon icon={document} slot="start" />
          <IonInput
            onIonChange={handleM}
            value={inputMemo}
            required
            type="text"
            placeholder="メモ"
          ></IonInput>
        </IonItem>
      </IonCard>
      <IonButton
        onClick={handleSubmit}
        type="submit"
        class="button3"
        fill="outline"
      >
        追加
      </IonButton>
    </IonPage>
  );
};

export default Tab3;
