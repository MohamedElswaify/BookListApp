import React, { useState } from 'react';
import { View, ScrollView, Image, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddBookScreen = ({ navigation }) => {

  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [image, setImage] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showError, setShowError] = useState(false);

  // set image function
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });
    
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // set date function
  const onChangeDate = (e, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    setPublishedDate(selectedDate.toISOString().slice(0, 10));
  };

  // submit book
  const submitBook = () => {
    // show error
    setShowError(true);
    // navigation
    if(title != "" && description != "" && publishedDate != "" && image != null){
      navigation.navigate({
        name: 'Home',
        params: { title: title, description: description, publishedDate: publishedDate, image: image },
        merge: true,
      });
    }
  };

  return (
    <ScrollView style={styles.addFrom}>
      <TextInput 
        style={styles.input} 
        onChangeText={text => setTitle(text)}
        placeholder="Title" />
        {showError == true && title == "" &&
          <Text style={styles.inputError}>Field title is required</Text>
        }

      <TextInput 
        style={styles.inputDes} 
        multiline
        onChangeText={text => setDescription(text)}
        placeholder="Description" />
        {showError == true && description == "" &&
          <Text style={styles.inputError}>Field description is required</Text>
        }

      <View>
        <TouchableOpacity
          style={styles.inputDate}
          onPress={() => setShowDatePicker(true)} 
        >
          <Text> {publishedDate ? `Published date: ${publishedDate}` : `Published date`} </Text> 
        </TouchableOpacity> 
        {showError == true && publishedDate == "" &&
          <Text style={styles.inputError}>Field published date is required</Text>
        }
      </View>

      {showDatePicker && (
        <DateTimePicker
          testID="datePicker"
          value={new Date()}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
        )}

      <View style={styles.thumbnail}>
        <Button 
          title="Book thumbnail" 
          onPress={pickImage}
        />
        {image && <Image source={{ uri: image }} style={{ width: 80, height: 100 }} /> }
      </View>
      {showError == true && image == null &&
        <Text style={styles.inputError}>Field thumbnail is required</Text>
      }

      <View style={styles.button}> 
        <Button 
          title="Add"
          onPress={submitBook}
        />
      </View>
    </ScrollView> 
  );
}
// style
const styles = StyleSheet.create({
  addFrom: {
    padding: 10,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#999",
    padding: 10,
  },
  inputDes: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#999",
    padding: 10,
    textAlignVertical: "top",
  }, 
  inputDate: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#999",
    padding: 10,
  },
  inputError: {
    padding: 10,
    paddingTop: 0,
    color: "red",
  },
  thumbnail: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  }, 
  button: {
    padding: 10,
    borderRadius: 4,
  },
});

export default AddBookScreen;
