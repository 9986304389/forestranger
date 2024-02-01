const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",

  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "500",
    marginTop: 100,
    marginBottom: 30,
    color: "#000080",
    textAlign: "center",
  },
  loginFormView: {
    flex: 1,


  },
  loginFormTextInput: {
    height: 50,
    fontSize: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 20,

  },
  loginButton: {
    backgroundColor: "#000080",
    borderRadius: 20,
    height: 45,
    marginTop: 10,
    width: 320,

    alignItems: "center"
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    color: 'red',

    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'black',  // Replace with your desired text color
  },
  buttonTextLogin: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 500
  },
  forgotpassword: {
    alignSelf: 'flex-start'
  },

  eyeIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  passwordContainer: {
    position: 'relative',
  },

});
export default styles;
