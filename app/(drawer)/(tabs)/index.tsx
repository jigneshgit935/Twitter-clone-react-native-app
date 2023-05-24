import { StyleSheet, View, FlatList, Pressable } from 'react-native';
import Tweet from '../../../components/Tweet';
import tweets from '../../../assets/data/tweet';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />

      <Link href="/new-tweet" asChild>
        <Entypo
          name="plus"
          size={24}
          style={styles.floatingButton}
          color="white"
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  floatingButton: {
    backgroundColor: '#1C9BF0',

    borderRadius: 50,
    padding: 15,
    position: 'absolute',
    right: 15,
    bottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
