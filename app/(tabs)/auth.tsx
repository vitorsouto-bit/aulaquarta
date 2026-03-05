import { View, StyleSheet} from 'react-native';
import Login from '@/components/frm-login';

export default function auth(){
    return(
        <View style={styles.container}>
    <Login></Login>
    </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
   
})