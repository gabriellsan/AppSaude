import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
   main: {
    flex: 1,
    backgroundColor: '#6064C9',
    height: '100%',
   }, 
   mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D8FFF8',
    width: '100%',
    height: '100%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: 400,
   },
   back: {
    paddingLeft: 30,
    top: 150,
   },
   textMainContainer: {
    top: 270,
    paddingLeft: 30,
   },
   textMain: {
    fontWeight: '600',
    fontSize: 36,
    color: '#FFF'
   },
   containerForm: {
    width: '80%',
    gap: 30,
    paddingTop: 25,
   },
   formText: {
    color: '#6064C9',
    fontWeight: '600',
    fontSize: 22,
   },
   containerFormCpf: {
    gap: 20,
   },
   containerFormPassword: {
    gap: 20,
   },
   containerRememberPassword: {
    alignItems: 'flex-end'
   },
   input: {
    height: 60,
    width: '100%',
    borderColor: '#6064C9',
    borderWidth: 3,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 60,
    backgroundColor: '#FFF',
   },
   containerButton: {
    alignItems: 'center',
    backgroundColor: '#6064C9',
    width: '100%',
    height: 30,
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 30,
   },
   buttonLogar: {
    alignItems: 'center',
    justifyContent: 'center',
   },
   buttonLogarText: {
    position: 'absolute',
    fontSize: 22,
    fontWeight: '600',
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.30)'
   },
   bottomContainerText: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 60,
   },
   allTextPage: {
    color: '#6064C9',
    fontSize: 16, 
    fontWeight: '600',
   }, 
   signupText: {
    fontSize: 17,
    fontWeight: 'bold'
   },
})

export default styles