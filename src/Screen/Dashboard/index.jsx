import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import ProfileManager from "../ProfileManager";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome or any other icon library you prefer

const Dashboard = ({ navigation }) => {
  // state for dynamic rendering of history of images
  const [imageHistory, setImageHistory] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerText}>Images</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileManager")}
          >
            <FontAwesome
              name="user-circle"
              size={30}
              color="black"
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.subHeaderText}>Image History</Text>
      </View>

      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: "https://pngimg.com/d/green_leaves_PNG3625.png" }}
            style={styles.image}
          />
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: "https://pngimg.com/d/green_leaves_PNG3625.png" }}
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.tipsContainer}>
        <View style={styles.tipIcon}>
          <Ionicons name="bulb" size={24} color="black" />
          <Text style={styles.tipsHeader}> Tips:</Text>
        </View>
        <Text style={styles.tipText}>• Image should be clear.</Text>
        <Text style={styles.tipText}>• Make sure to click focused Image.</Text>
      </View>

      <TouchableOpacity
        style={styles.cameraButton}
        onPress={() => navigation.navigate("CameraScreen")}
      >
        <MaterialIcons name="photo-camera" size={37} color="black" />
      </TouchableOpacity>
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
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Align items in a row
  },
  headerText: {
    fontSize: 33,
    fontWeight: "bold",
    color: "black",
  },
  profileIcon: {
    marginLeft: 10, // Add margin for spacing
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: "normal",
    color: "white",
    paddingLeft: 10,
    paddingTop: 20,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
    marginTop: 20,
  },
  imageWrapper: {
    width: "48%",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 3,
    backgroundColor: "#D17D0F",
  },
  tipsContainer: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 50,
    marginBottom: 5,
  },
  tipIcon: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  tipsHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tipText: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: "bold",
    paddingLeft: 30,
    lineHeight: 20,
  },

  cameraButton: {
    alignSelf: "center",
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});

export default Dashboard;
