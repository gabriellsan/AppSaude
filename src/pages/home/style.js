import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    all: {
        justifyContent: 'center',
        backgroundColor: '#D9D0E3'
    },
    header: {
        top: 120,
        left: 40,
    },
    headerText: {
        fontSize: 52,
        fontWeight: '700',
        color: '#411D6F',
    },
    main: {
        width: '100%',
        height: '100%'
    },
    containerCards: {
        width: '90%',
        flexDirection: "row",
        gap: 31,
        marginBottom: 32,
    },
    card: {
        top: 260,
        left: 40,
        width: '40%',
        height: 211,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: '#FFFFFF',
    },
    mainCard1: {
        backgroundColor: '#FFEFFA',
        width: '100%',
        height: 140,
        justifyContent: "center",
        alignItems: "center",
        borderTopEndRadius: 8,
        borderTopStartRadius: 8,
    },
    mainCard2: {
        backgroundColor: '#EAF1FF',
        width: '100%',
        height: 140,
        justifyContent: "center",
        alignItems: "center",
        borderTopEndRadius: 8,
        borderTopStartRadius: 8,
    },
    mainCard3: {
        backgroundColor: '#FFFBFF',
        width: '100%',
        height: 140,
        justifyContent: "center",
        alignItems: "center",
        borderTopEndRadius: 8,
        borderTopStartRadius: 8,
    },
    bottomCard1: {
        top: 15,
    },
    imageCard: {
        width: 100,
        height: 100,
    },
    bottomMainText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#411D6F',
    },
    bottomSecondaryText: {

    },
    bottomNavigation: {
        position: 'absolute',
        backgroundColor: '#D8FFF8',
        top: 940,
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 20,
    },
    cardIconsBottom: {
        
    },
    buttonsBottom: {
        alignItems: "center",
        justifyContent: "center",
    },
    textButtonsBottom: {
        fontWeight: '600',
        fontSize: 15,
        color: '#6937A9',
    },
    iconHome: {
        width: 24,
        height: 24,
        color: '#411D6F',
    },
})

export default styles