import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Book = (props) => {
  return ( 
    <View style={styles.book}>
      <View style={styles.bookHeader}>
        <Image 
          style={styles.thumbnail}
          source={{ uri: props?.book?.volumeInfo?.imageLinks?.thumbnail }}
        />
        <View>
          <Text style={styles.title}> {props?.book?.volumeInfo?.title} </Text>
          <Text style={styles.date}>
            Published date: {props?.book?.volumeInfo?.publishedDate}
          </Text>
        </View>
      </View>

      <Text style={styles.description}>
        {props?.book?.volumeInfo?.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  book: {
    padding: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
  },
  bookHeader: {
    backgroundColor: "#eee",
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  thumbnail: {
    width: 80,
    height: 100,
    margin: 'auto',
  },
  title: {
    color: '#333',
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
  },
  date: {
    marginLeft: 10,
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

export default Book;
