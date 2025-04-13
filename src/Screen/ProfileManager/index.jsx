import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { yellow } from "@mui/material/colors";

const ProfileForm = () => {
  // Initial state for profile form

  const [editableProfile, setEditableProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    email: "john.doe@example.com",
    dob: "1990-01-01",
    city: "Pakistan",
  });

  const [isEditable, setIsEditable] = useState(false);

  // Handle text input changes
  const handleInputChange = (key, value) => {
    setEditableProfile({ ...editableProfile, [key]: value });
  };

  // Save button handler with required fields validation
  const handleSave = () => {
    // Check if any field is empty
    for (let key in editableProfile) {
      if (!editableProfile[key].trim()) {
        Alert.alert(
          "Validation Error",
          `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`
        );
        return;
      }
    }

    // If all fields are filled
    setIsEditable(false);
    Alert.alert("Profile Saved", "Your profile details have been updated.");
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditable(!isEditable);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Profile Management</Text>

        {/* Form Fields */}
        {Object.keys(editableProfile).map((key) => (
          <View key={key} style={styles.inputContainer}>
            <Text style={styles.label}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </Text>
            <TextInput
              style={[styles.input, isEditable ? styles.editableInput : null]}
              value={editableProfile[key]}
              editable={isEditable}
              onChangeText={(text) => handleInputChange(key, text)}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.saveBtn}>
          {isEditable && <Button title="Save Profile" onPress={handleSave} />}
        </TouchableOpacity>

        {/* Edit Button */}
        <TouchableOpacity style={styles.editButton} onPress={toggleEditMode}>
          <FontAwesome name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styles for the form
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#d38e00",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  editableInput: {
    backgroundColor: "white",
  },
  editButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 50,
  },
  saveBtn: {
    backgroundColor: "yellow",
    color: "black",
  },
});

export default ProfileForm;
