import React from 'react';
import { View, FlatList } from 'react-native';
import Book from './Book';

const BookList = (props) => {
  return (
    <View>
      {props?.books?.map((book, key) => (
        <Book key={key} book={book} />
      ))}
    </View>
  );
}

export default BookList;
