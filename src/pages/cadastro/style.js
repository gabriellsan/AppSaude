import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
   main: {
    flex: 1,
    backgroundColor: '#D8FFF8',
    height: '100%',
   }, 
   mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6064C9',
    width: '100%',
    height: '100%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingTop: 15,
    marginTop: 390,
   },
   back: {
    paddingLeft: 30,
    top: 120,
   },
   eye: {
      alignItems: "center",
      position: "absolute",
      bottom: 35,
      right: 20,
   },
   textMainContainer: {
    top: 260,
    paddingLeft: 30,
   },
   textMain: {
    fontWeight: '600',
    fontSize: 40,
    color: '#6064C9'
   },
   containerForm: {
    width: '80%',
    gap: 30,
    paddingTop: 25,
   },
   formText: {
    color: '#D8FFF8',
    fontWeight: '600',
    fontSize: 22,
   },
   containerFormInput: {
    gap: 20,
   },
   containerRememberPassword: {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 2,
   },
   input: {
    height: 60,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 60,
    backgroundColor: '#FFF',
   },
   containerButton: {
    alignItems: 'center',
    backgroundColor: '#D8FFF8',
    width: '100%',
    height: 30,
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 30,
   },
   buttonSignup: {
    alignItems: 'center',
    justifyContent: 'center',
   },
   buttonSignupText: {
    position: 'absolute',
    fontSize: 22,
    fontWeight: '600',
    color: '#6064C9',
    textShadowColor: 'rgba(0, 0, 0, 0.30)'
   },
   bottomContainerText: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 60,
    marginBottom: 50,
   },
   allTextPage: {
    color: '#D8FFF8',
    fontSize: 16, 
    fontWeight: '600',
   }, 
   signupText: {
    fontSize: 17,
    fontWeight: 'bold'
   },
})

export default styles