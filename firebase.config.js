import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  databaseURL:
    "https://clone-carrotmarket-02-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "gs://clone-carrotmarket-02.appspot.com",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const storage = getStorage(app);
