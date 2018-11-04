import * as firebase from 'firebase'

let database

export const init = () => {
    var config = {
        apiKey: "AIzaSyBE1kzqJCJBxEUTfi0XXZYIjFQcpfjgkCE",
        authDomain: "greatgatsbyapp.firebaseapp.com",
        databaseURL: "https://greatgatsbyapp.firebaseio.com",
        projectId: "greatgatsbyapp",
        storageBucket: "greatgatsbyapp.appspot.com",
        messagingSenderId: "835783613036"
    }
    firebase.initializeApp(config)
    database = firebase.database()
}
