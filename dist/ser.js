import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getFirestore,
  addDoc,
  setDoc,
  getDoc,
  deleteDoc,
  onSnapshot,
  documentId,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage, ref as sRef } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBfxub90DchjzCe9eZaR8M36-1GJN7UEJM",
  authDomain: "test-46415.firebaseapp.com",
  projectId: "test-46415",
  storageBucket: "test-46415.appspot.com",
  messagingSenderId: "612333560674",
  appId: "1:612333560674:web:e207db5045a54679e5823b",
};

initializeApp(firebaseConfig);

const db = getFirestore();




$("#updatemain").change(function () {
  console.log($(this).val());
  const value2 = ($(this).val());
  const colRef2 = collection(db, value2);

  onSnapshot(colRef2, (snapshot) => {
    let user = [];
    snapshot.docs.forEach((doc) => {
      user.push({ ...doc.data(), id: doc.id });
    });
    console.log(user);
  });
  onSnapshot(colRef2, (snapshot) => {
    let id = [];

    snapshot.docs.forEach((doc) => {
      id.push(doc.id);
      function select_default(my_option, all_options, dropdown_id) {
        var temp = "";
        for (var i = 0; i < all_options.length; i++) {
          if (my_option == all_options[i]) {
            temp +=
              "<option value='" +
              all_options[i] +
              "' selected>" +
              all_options[i] +
              "</option>";
          } else {
            temp +=
              "<option value='" +
              all_options[i] +
              "'>" +
              all_options[i] +
              "</option>";
          }
        }
        document.getElementById(dropdown_id).innerHTML = temp;
      }
      select_default("HTML", id, "updatesub");
    });

    console.log(id);
  });

  $("#updatesub").change(function () {
    console.log($(this).val());
    const subvalue2 = $(this).val();

    console.log(subvalue2);
    var textdocs = document.getElementById("proof");
    function textarea(textarea) {
      textdocs.innerHTML = "-" + textarea.replaceAll(";", "\n-");
      console.log(typeof textarea);
      console.log(textarea);
    }

    async function getadddatatextarea() {
      const docref = doc(db, value2, subvalue2);

      getDoc(docref).then((doc) => {
        var text = doc.data();

        console.log(text);
        textarea(text.documents);
      });
    }
    getadddatatextarea();
  });
});
