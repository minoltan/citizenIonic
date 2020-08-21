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