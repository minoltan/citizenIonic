import * as firebase from 'firebase'
import { presentToast } from './toast'
import { resolve } from 'dns'

const config = {
    apiKey: 'AIzaSyA9oFZA75q6aCk7oNinvhY1YW7dkQNxrXA',
    authDomain: 'citizenionic.firebaseio.com',
    databaseURL: 'https://citizenionic.firebaseio.com',
    projectId: 'citizenionic',
    storageBucket: 'gs://citizenionic.appspot.com',
    messagingSenderId: '309140101759',
    appId: ''
}

firebase.initializeApp(config)

const db= firebase.database()


export async function postComplain(userId: string, title: string, type: string, text: string, image: string){
    let Complain = {
        userId: 'test',
        title: title,
        type: type,
        description : text,
        image: image
    }
    db.ref('complain').push(Complain);
      return true;
}

// ref.once('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var childKey = childSnapshot.key;
//       var childData = childSnapshot.val();
//       // ...
//     });
//   });


export function getNews(){
    return new Promise((resolve, reject) => {


        // const NewsData = db.ref('/complain/').once('value', function(snapshot) {
        //     snapshot.forEach(function(childSnapshot) {
        //       var childKey = childSnapshot.key;
        //       var childData = childSnapshot.val();
        //       console.log(childData);
              
        //       return childData;
        //       // ...
        //     });
        //   });
        //   console.log(NewsData);

        const NewsData =db.ref('/news/').once('value').then(function(snapshot) {
        //    var newsList = snapshot.forEach(function(childSnapshot){
        //         var childKey = childSnapshot.key;
        //         var childData = childSnapshot.val();
        //     })
            var newsList = snapshot.val() 
                console.log(newsList);
                const test = Object.values(newsList)
                console.log(test);
                return test;
               
            });

          console.log(NewsData);

        if(NewsData) {    
            resolve(NewsData)
              
        }else {
            resolve(null)
        }
        console.log(NewsData);
    
        return NewsData;
    })
}

export function getFilterNews(type: string){
    return new Promise((resolve, reject) => {

        const NewsData =db.ref('/news/').orderByChild("type").equalTo(type).once('value').then(function(snapshot) {
       
            var newsList = snapshot.val()
                console.log(newsList);
                const test = Object.values(newsList)
                console.log(test);
                return test;
               
            });

          console.log(NewsData);

        if(NewsData) {    
            resolve(NewsData)
              
        }else {
            resolve(null)
        }
        console.log(NewsData);
    
        return NewsData;
    })
}

export function getData(){
    return new Promise((resolve, reject) => {

        const testData1 =db.ref('/test').once('value').then(function(snapshot) {
            var username = snapshot.val() 
                // console.log(username);
                return username;
                
          });
           
        // const testData = db.ref("/test").on("value", function(snapshot) {
        //     var test1 = snapshot.val();
        //     console.log(test1);
        //     return test1;
        //   },);  

        if(testData1) {    
            resolve(testData1)
            
           
        }else {
            resolve(null)
        }
        // console.log(testData1);
        
    })
}

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(function(user){
            if(user) {
                resolve(user)
               
            }else {
                resolve(null)
            }
            unsubscribe()
        })
    })
    
    // return firebase.auth().currentUser
}

export async function loginUser(username: string, password: string){
    const email = `${username}@codedam.com`

    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(res)
        return res
    }catch(error) {
        presentToast(error.message, 4000)
        return false
    }
    
    //authenticate with firebase
    //If present, show dashboard
    // If not, show error
}

export async function registerUser(username: string, password: string){
    const email = `${username}@codedam.com`
    try{
        const res  = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    }
    catch(error) {
        presentToast(error.message)
        return false
    }
}

export function logoutUser(){
    return firebase.auth().signOut()
    
}