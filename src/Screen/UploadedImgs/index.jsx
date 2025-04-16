import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UploadedImgs = ({ route, navigation }) => {
  const { imageUri } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Uploaded Image</Text>
        </View>

        {/* Display the uploaded image */}
        <View style={styles.containerContent}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.imagePreview} />
          ) : (
            <Text style={{ color: "white", textAlign: "center", marginTop: 80 }}>
              No image found
            </Text>
          )}
        </View>

        <View>
          <Text style={styles.successText}>Processed Successfully..</Text>
        </View>
      </View>

      {/* Feature Section */}
      <View style={styles.feature}>
        <Text style={styles.title}>Extracted Features</Text>

        <View style={styles.featureRow}>
          <Text style={styles.featureLabel}>Color:</Text>
          <Text style={styles.featureValue}>Green</Text>
        </View>

        <View style={styles.featureRow}>
          <Text style={styles.featureLabel}>Texture:</Text>
          <Text style={styles.featureValue}>Smooth</Text>
        </View>

        <View style={styles.featureRow}>
          <Text style={styles.featureLabel}>Shape:</Text>
          <Text style={styles.featureValue}>Oval</Text>
        </View>

        <View style={styles.featureRow}>
          <Text style={styles.featureLabel}>Size:</Text>
          <Text style={styles.featureValue}>Medium</Text>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottom}>
        <View style={styles.backArrow}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text
            style={styles.backText}
            onPress={() => navigation.navigate("CameraScreen")}
          >
            Back
          </Text>
        </View>

        <View style={styles.nextArrow}>
          <Text
            style={styles.nextText}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Next
          </Text>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#d38e00",
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: "normal",
    color: "white",
    paddingLeft: 10,
    paddingTop: 20,
  },
  containerContent: {
    width: 320,
    height: 200,
    backgroundColor: "black",
  },
  successText: {
    color: "white",
    textAlign: "center",
    paddingTop: 10,
    fontSize: 20,
  },
  feature: {
    padding: 3,
    paddingTop: 20,
    marginRight: 50,
    textAlign: "left",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  featureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  featureLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  featureValue: {
    fontSize: 18,
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
  },
  backArrow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  nextArrow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 145,
    marginTop: 30,
  },
  backText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 2,
    padding: 5,
  },
  nextText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 2,
    padding: 5,
  },
  cameraButton: {
    alignSelf: "center",
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
    marginTop: 25,
  },
});

export default UploadedImgs;
