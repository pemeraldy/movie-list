// // This is a modularised way of creating store in vue
// // TODO:Read it up in the docs
// import firebase from '../../firebase'
// import store from '../index'

// const state = {    userDetails:{
//         email: '',
//         password:''
//     },
//     loggedIn: false
// }

// const getters = {}
// const mutations = {}
// const actions = {
//     async login(){
//         if(store.state.isLoggedIn) return
//         firebase.auth().createUserWithEmailAndPassword(state.userDetails.email, state.userDetails.password)
//             .catch(function(error) {
//                 // Handle Errors here.
//                 // var errorCode = error.code;
//                 var errorMessage = error.message;
//                 console.log(errorMessage)
//                 // ...
//           });
//     },
//     async logout(){

//     }
// }

// export default{
//     namespaced: true,
//     state,
//     mutations,
//     getters,
//     actions
// }