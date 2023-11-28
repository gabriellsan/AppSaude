import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#6064C9'
    },
    containerMain: {
        gap: 50,
    },
    nameApp: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF'
    },
    appName: {
        alignItems: 'flex-end',
        marginTop: 30,
        padding: 30,
    },
    loginButton: {
        paddingVertical: 30,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#D8FFF8',
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupButton: {
        paddingVertical: 30,
        paddingHorizontal: 10,
        borderRadius: 5.5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    borderView: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
        height: 70,
        borderWidth: 5,
        borderColor: '#D8FFF8',
        borderStyle: 'solid',
    },
    textButtonSignup: {
        color: '#D8FFF8',
        position: 'absolute',
        fontWeight: '600',
        fontSize: 22,
    },
    textButtonLogin: {
        color: '#6064C9',
        position: 'absolute',
        fontWeight: '600',
        fontSize: 22,
    },
    textContainerMain: {
        marginBottom: 40,
        marginLeft: 40,
        paddingLeft: 50,
        paddingBottom: 20,
    },
    textHello: {
        fontSize: 30,
        fontWeight: '600',
        color: '#FFF'
    },
    containerButtons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        height: 50,
        marginBottom: 100,
    },
})

export default styles