import React, {Component} from 'react';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    // EStilos de Login
    contenedorPrincipal: {
        paddingTop: 40,
        flex: 1,
        alignItems: 'center',
        width: null,
        height: null
    },
    cajaLogin: {
        width: 400,
        height: 300,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        alignItems: 'center',
        paddingTop: 20,
        marginBottom: 10
    }, boton: {
        width: 300,
        height: 30,
        backgroundColor: '#e08231',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderBottomColor: 'gray'
    },
    textoBoton: {
        textAlign: 'center',
        color: 'white'
    },
    tituloLogin: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Lato, sans-serif',
        marginBottom: 20
    },
    banner: {
        width: 210,
        height: 50
    },
    input: {
        width: 300,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingTop: 3,
        marginBottom: 10
    }
});

export default styles;