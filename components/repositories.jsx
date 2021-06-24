import React from 'react';
import { Text, StyleSheet, ScrollView, View, FlatList, SectionList, Image, Button } from 'react-native';
const ItemSeparator = () => <View style={styles.separator} />;


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  image: {
    width: 50,
    height:50,
    marginRight: 10
  },
  fullView: {
    marginTop:50,
    marginLeft: 10
  },
  head: {
    display:'flex',
    flexDirection: 'row',
  },
  language: {
    alignItems: 'flex-start',
  },
  languageChild: {
    color: 'white',
    width: 'auto',
    backgroundColor: '#0366d6',
    borderRadius: 5,
    padding: 5,
    margin: 5
  },
  bottom: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    margin: 30
  }
});

const RepositoryList = ({reps}) => {
 
  return (
    <FlatList
      data={reps}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => {
        return(
         <View style={styles.fullView} key={item.id}>
            <View style={styles.head}>
              <Image 
              style={styles.image}
              source={{
                uri: item.ownerAvatarUrl
              }}/>
              <View style={{display: 'flex'}}>
                <Text>{item.fullName}</Text>
                <Text style={{color:'#696969'}}>{item.description}</Text>
                <View style={styles.language}>
                    <Text style={styles.languageChild}>{item.language}</Text>
                </View>
              </View>
            </View>
           <View style={styles.bottom}>
              <View>
                  <Text>{item.stargazersCount}</Text>
                  <Text>Start</Text>
                </View>
                <View>
                  <Text>{item.forksCount}</Text>
                  <Text>Forks</Text>
                </View>
                <View>
                  <Text>{item.reviewCount}</Text>
                  <Text>Reviews</Text>
                </View>
                <View>
                  <Text>{item.ratingAverage}</Text>
                  <Text>Rating</Text>
                </View>
           </View>
        </View>
        )
       }}
     />
      // other props
  );
};

export default RepositoryList;