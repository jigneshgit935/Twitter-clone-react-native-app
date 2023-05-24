import Tweet from '../../components/Tweet';
import tweets from '../../assets/data/tweet';
import { useSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function TweetScreen() {
  const { id } = useSearchParams();

  const tweet = tweets.find((t) => t.id === id);
  if (!tweet) {
    return <Text>Tweet {id} not found!</Text>;
  }
  return <Tweet tweet={tweet} />;
}
