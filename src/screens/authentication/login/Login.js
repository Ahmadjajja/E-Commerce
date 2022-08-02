import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity } from 'react-native'
import clearSkyBg from "../../../assets/ClearSky.jpg"
import Icon from 'react-native-vector-icons/FontAwesome'
import FeatherIcon from 'react-native-vector-icons/Feather'
// import  TextInput  from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const initialState = {email:"", password:""}

export default function Login({ navigation }) {
    const [isPasswordShow, setIsPasswordShow] = useState(true);
    const [loginData, setLoginData] = useState(initialState); 
    const handleChange = (name, value) => {
        setLoginData({ ...loginData, [name]: value })
    }
    const submitHandler = () => {
        auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password)
        .then(() => {
            console.log('User signed in!');
            // navigation.navigate("Home")
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });
    }
    return (
        <>
            <ImageBackground source={require("../../../assets/ClearSky.jpg")} style={styles.container}  >
                <Text style={styles.loginText}>SIGN IN</Text>
                <View style={styles.iconAndInput}>
                    <Icon
                        style={styles.inputIcon}
                        name="user-o"
                        size={25}
                        color="white" />
                    <TextInput
                        style={styles.inputEmail}
                        onChangeText={(text) => handleChange('email', text)}
                        value={loginData.email}
                        placeholder="Enter Your email"
                        keyboardType="email-address"
                        placeholderTextColor="#ccc"
                    />
                </View>
                <View style={styles.iconAndInput}>
                    <Icon style={styles.inputIcon} name="lock" size={25} color="white" />
                    <TextInput
                        style={styles.inputPassword}
                        onChangeText={(text) => handleChange('password', text)}
                        value={loginData.password}
                        placeholder="Enter Your password"
                        keyboardType="default"
                        placeholderTextColor="#ccc"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity>
                        <FeatherIcon style={styles.inputIcon}
                            onPress={() => setIsPasswordShow(!isPasswordShow)}
                            name={isPasswordShow ? "eye-off" : "eye"}
                            size={25} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.btn}>
                    <Button
                        onPress={submitHandler}
                        title="SIGN IN"
                        color="#013a63"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View style={styles.FP}>
                    <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")} >
                        <Text style={{ color: "white" }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.orSection}>
                    <View style={styles.line}></View>
                    <View style={styles.ORBOX}>
                        <Text style={styles.OR}>
                            OR
                        </Text>
                    </View>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.icons}>
                    <TouchableOpacity style={styles.icon}>
                        <Icon name="facebook-f" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <Icon name="google" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <Icon name="github" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.signUp}>
                    <Text style={{ color: "white", marginBottom: 0 }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={{ color: "white", paddingLeft: 5, fontSize: 16 }}>Create Here</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    }, inputEmail: {
        height: 40,
        margin: 8,
        // borderWidth: 1,
        // borderColor: "#ccc",
        // borderStyle:"",
        backgroundColor: "#115197",
        padding: 10,
        width: 260,
        color:"white",
    }, inputPassword: {
        height: 40,
        margin: 8,
        // borderWidth: 1,
        // borderColor: "#ccc",
        // borderStyle:"",
        backgroundColor: "#115197",
        padding: 10,
        width: 240,
        color: "white"
    },
    iconAndInput: {
        flexDirection: 'row',
        width: 300,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    }, inputIcon: {
        paddingTop: 15,
    },
    loginText: {
        color: "white",
        fontSize: 32,
        paddingRight:195,
    },
    btn: {
        width: 300,
        marginTop: 10
    }, icons: {
        marginTop: 10,
        flexDirection: 'row',
    }, icon: {
        marginHorizontal: 15,
        marginVertical: 5,
        borderWidth: 2,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100 / 2,
        borderColor: "white"
    }, FP: {
        // flexDirection:'row',
        // justifyContent:"flex-end",
        marginTop: 5,
        marginLeft: 185,
    }, OR: {
        fontSize: 24,
        color: "white"
    }, signUp: {
        flexDirection: 'row',
        marginTop: 10,
    }, ORBOX: {
        marginVertical: 10,
        borderWidth: 2,
        width: 60,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        // overflow:'hidden',
        borderColor: "white",
    }, line: {
        width: 75,
        height: 2,
        backgroundColor: "white"
    }, orSection: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})