import React, {Component} from 'react';
import {
    Text,
    TouchableHighlight,
    View,
    Alert,
    Image,
    TextInput
} from 'react-native';
import styles from '../estilos/estilos';

export class loginView extends Component {
    render() {
        return (
            <Image style={styles.contenedorPrincipal} source={require('../imagenes/mantocor2.jpg')}>
                <View>
                    <View style={styles.cajaLogin}>
                        <Image source={require('../imagenes/final.png')} style={styles.banner}/>
                        <Text style={styles.tituloLogin}>MANTENIMIENTO DE UNIDADES 1.1</Text>
                        <TextInput style={styles.input} placeholder='Usuario...' underlineColorAndroid='transparent'/>
                        <TextInput style={styles.input} placeholder='Password...' underlineColorAndroid='transparent'
                                   secureTextEntry={true}/>
                        <TouchableHighlight onPress={this.onLogin.bind(this)} style={styles.boton}>
                            <Text style={styles.textoBoton}>Entrar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Image>
        );
    }

    onLogin() {
        Alert.alert(
            'Acceso',
            'Has ingresado con exito',
            [
                {
                    text: 'Aceptar',
                    onPress: (this.aceptar.bind(this))
                },
                {
                    text: 'Cancelar',
                    onPress: (this.cancelar.bind(this))
                }
            ]
        )
    }

    aceptar() {
        this.props.navigator('Dashboard');
    }

    cancelar() {

    }
};

module.exports = loginView;
