import { StyleSheet, View, FlatList } from 'react-native';
import Tweet from '../../components/Tweet';
import tweets from '../../assets/data/tweet';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
