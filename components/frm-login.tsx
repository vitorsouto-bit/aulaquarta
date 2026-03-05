import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import { useState } from 'react';
import Toast from 'react-native-toast-message'

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    
    function validarLogin() {
        alert('Só alegria');
        if (usuario === 'admin') {
            alert('Login efetuado com sucesso!');
            console.log('Login efetuado com sucesso!')
        } else {
            Toast.show({
                type:'error',
                text1:'Erro!',
                text2:'usuario ou senha invalios'
   
            });
            
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.Text}> Área Restrita</Text>


            <TextInput
                style={styles.Input}
                placeholder="informe seu usuario"
                value={usuario}
                onChangeText={setUsuario}
            />
            <TextInput
                style={styles.Input}
                placeholder="informe sua senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <TouchableOpacity style={styles.Button} onPress={validarLogin}>
                <Text style={styles.Text}>Login</Text>
            </TouchableOpacity>
            <Toast />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    Text: {
        fontSize: 24, color: '#ffffff',
        marginBottom: 20,
    },
    Input: {
        width: '100%',
        height: 40,
        backgroundColor: '#ffffff',
        marginBottom: 20,
        color: '#000000'
    },
    Button: {
        width: '100%',
        height: 40,
        backgroundColor: '#c2e015',
        alignItems: 'center',
    },
})