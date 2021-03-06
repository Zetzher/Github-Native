import React, {useState} from 'react';
import {View, Linking} from 'react-native';
import {Text, Item, Input} from 'native-base';
import Unexpected from "../Unexpected";

const Repositories = props => {
  const [...repositories] = props.repos;

  const [repoFiltered, setRepoFiltered] = useState(repositories);

  const filterRepo = data => {
    const filterRepo = repositories.filter(repo =>
      repo.name.toLowerCase().includes(data.toLowerCase()),
    );
    setRepoFiltered(filterRepo);
  };

  return (
    <>
      <View>
        <Item
          inlineLabel
          last
          style={{backgroundColor: '#F8F8F8', borderRadius: 8}}>
          <Input
            placeholder="Find a repository..."
            style={{backgroundColor: "#FFF", borderWidth: 0.2, borderRadius: 4, height: 40, fontSize: 14, paddingLeft: 15}}
            onChangeText={e => filterRepo(e)}
          />
        </Item>
      </View>
      {repoFiltered.map((data, key) => {
        const {name, clone_url, language, updated_at} = data;


        return (
          <View
            key={key}
            style={{
              borderColor: '#F0F0F0',
              borderTopWidth: 1,
              marginTop: 10,
              marginBottom: 10,
              paddingTop: 20,
              height: 100,
            }}>
            <Text
              style={{color: '#0366d6', fontWeight: 'bold', fontSize: 22}}
              onPress={() => Linking.openURL(clone_url)}>
              {name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                position: 'relative',
                top: 30,
                justifyContent: 'space-between',
              }}>
              <Text>
                {language ? `With ${language}` : 'Language not included'}
              </Text>
              <Text>Updated {new Date(updated_at).toDateString()}</Text>
            </View>
            
          </View>
        );

      })}
      <Unexpected />
    </>
  );
};

export default Repositories;
