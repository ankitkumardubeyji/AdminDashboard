# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


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
