import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer:{
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'flex-end',

    },
    resultado:{
        fontSize: 40,
        color: 'white',
        textAlign: 'right',
        marginBottom: 10,
        marginHorizontal: 10,
    },
    miniResultado:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 20,
        textAlign: 'right',
        marginHorizontal: 10,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    boton:{
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto:{
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        padding: 10,
    }
});