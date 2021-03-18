import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCKKfN8ejjIjz7guWPMUemjk0c322Z8cag",
    authDomain: "ui-sketcher-1604061443107.firebaseapp.com",
    projectId: "ui-sketcher-1604061443107",
    storageBucket: "ui-sketcher-1604061443107.appspot.com",
    messagingSenderId: "352838124491",
    appId: "1:352838124491:web:3813850aa05e12ba6cac4e",
    measurementId: "G-1LF77GR5MS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true });

export function addData({collectionName,documentID,inputData,identifiedUIElement,attributeName,sizeName}){
    var db = firebase.firestore();
    db.collection(collectionName).doc(documentID).set({
        inputData: inputData,
        identifiedUIElement: identifiedUIElement,
        attributeName: attributeName,
        sizeName:sizeName
    })
        .then((docRef) => {

        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

export function saveReviews({collectionName,documentID,review,comment}){
    var db = firebase.firestore();
    db.collection(collectionName).doc(documentID).set({
        review: review,
        comment: comment
    })
        .then((docRef) => {

        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}