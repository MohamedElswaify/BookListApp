import React, { useEffect, useState } from 'react';
import { View, ScrollView, Button, StyleSheet } from 'react-native';
import BookList from '../components/BookList'

const HomeScreen = ({ navigation, route }) => {

  const [books, setBooks] = useState([]);

  // get from add
  useEffect(() => {
    if(route.params) {
      //alert(JSON.stringify(route.params));
      setBooks(books => [...books, {"volumeInfo":{"title":route.params?.title, "publishedDate":route.params?.publishedDate, "description":route.params?.description ,"imageLinks": {"thumbnail":route.params?.image}} }]);
    }
  }, [route.params]);

  // get books from api
  const getBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&&startIndex=0&&maxResults=10&&key=AIzaSyCxW6RZ3FseYeYxmvm3nw78E0a_93if7Jw`
      );
      const json = await response.json();
      setBooks(json.items);
    } catch (error) {
      console.error(error);
    }
  }; 

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <ScrollView>

      <BookList books={books} />

      <View style={styles.button}> 
        <Button
          title="Add new"
          onPress={() => navigation.navigate('AddBook')}
        />
      </View>

    </ScrollView>
  );
}
// style
const styles = StyleSheet.create({
  button: {
    padding: 30,
    borderRadius: 4,
  },
});

export default HomeScreen;
