# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# What is the difference between the useContext and useReducer
useContext and useReducer are both hooks provided by React for managing state in functional components, but they serve different purposes and have different use cases.

`useContext`:
useContext is used for accessing the value of a context within a component.
Context provides a way to pass data through the component tree without having to pass props down manually at every level.
It is useful when multiple components need access to the same data, like a theme, user authentication status, or language preference.
useContext is primarily about subscribing to a context and getting its current value. It doesn't inherently provide a mechanism for updating that value.

  `const {dispatch} = useContext(AuthContext)` // syntax to access the values from the context, dispatch is the function to dispatch different actions to update the state.
  

'useReducer`
useReducer is a hook for managing complex state logic in functional components.
It is inspired by Redux and works similar to how reducers work in Redux.
It is useful when the state logic is complex and involves multiple sub-values, or when the next state depends on the previous state.
It takes in a reducer function and an initial state and returns the current state and a dispatch function to dispatch actions to update the state.
It's typically used when useState becomes cumbersome due to complex state transitions or logic.

# how to use the useReducer when there are multiple properties in the initial state and require multiple reducer functions to update them?
- 
When you have multiple properties in the initial state and require multiple reducer functions to update them, you can still use useReducer effectively by organizing your reducer functions and actions appropriately.

useReducer provides the mechanism for updating the state.takes in the reducer function and initial state , and returns functions to dispatch actions to update state , write all the  actions required for updating the state in the single reducer function as we have attached the login and logout actions in the single auth reducer functions, and the different actions can be dispatched by passing the different action type.

` const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE)`
The above is the syntax for the useReducer , AuthReducer is the function in which we write all actions required to be dispatched for updating the state.


# Different ways to use the Context Api in the project
1. One way is just providing the state , and action configuration for updating those state in the initialstate while creating the context , and defining those actions in the app.js
2. Another method can be defining a single reducer function for a single context and inside it defining all the actions to update the state,and pass that function along with the initial state to the useReducer hook , that returns the current state and the dispatch function to dispatch action to update the current state.
   


# steps to configure and use the firebase in the project
1. create the project
2. go for web applications
3. `npm install firebase `
4. create a file firebase.js and store there all the credentials
5. Go to authentication select the sign in method in this project i have selected the email password
6. Go to docs and search for sign up using the email and password
7. import {getAuth} form "firebase/auth" this getAuth is the method that is to be passed for create UserWith the email and password hence we make auth refer to the function and export it from the firebase.jsx to be used in the login.jsx
8. 
9. 
