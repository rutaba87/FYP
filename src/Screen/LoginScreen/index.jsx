import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";

export default function LoginScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View>
          <StatusBar barStyle="light-content" backgroundColor="#000000" />
          <Text style={styles.title}>Leaf Scan:</Text>
          <Text style={styles.subtitle}>Smart Plant Disease Detection</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')} >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 80,
    backgroundColor: "#FFB300",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFB300",
    alignItems: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    marginBottom: 8,
    marginLeft: 55,
    marginTop: "10px",
  },
  subtitle: {
   fontWeight: "bold",
    fontSize: 20,
    color: "black",
    marginBottom: 50,
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: 20,
    width: "100%",
    height: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F5F5F5",
    borderRadius: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFB300",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // Button shadow for depth
  },
  buttonText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bolder",
  },
});
