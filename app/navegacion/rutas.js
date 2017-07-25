import React from 'react';
const Login = require('../vistas/loginView');
const Dashboard = require('../vistas/dashboardView');

const Rutas =  {
    Login: {screen: Login, navigationOptions:{title:'Acceso'}},
    Dashboard: {screen: Dashboard }
};

export default Rutas;