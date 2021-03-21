import React from 'react';
import {View, Image, Linking} from 'react-native';
import {Button, Text, Badge} from 'native-base';
import Unexpected from "../Unexpected";


import globalStyles from '../../styles/global';

const Packages = () => {
  return (
    <View style={{marginTop: 20}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/img/package-first.png')}
          style={{width: 60, height: 60}}
        />
        <View style={{marginTop: 5, width: '70%'}}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 30,
              lineHeight: 43,
            }}>
            Get started with GitHub Packages
          </Text>
        </View>
          <Text style={{textAlign: 'center', marginTop: 10, fontSize: 13, lineHeight: 23}}>
            Safely publish packages, store your packages alongside your code,
            and share your packages privately with your team.
          </Text>
        <Text style={{textAlign: 'center', marginTop: 32, marginBottom: 19, fontSize: 15}}>
          Choose an ecosystem
        </Text>
      </View>

      <View style={globalStyles.packageView}>
        <View style={globalStyles.packageViewHeader}>
          <Image
            source={require('../../assets/img/docker-icon.png')}
            style={globalStyles.packageImage}
          />
          <Text style={globalStyles.packageTitle}>Docker</Text>
        </View>
        <View style={globalStyles.packageContainerDescription}>
          <Text style={globalStyles.packageDescription}>
            A software platform used for building applications based on
            containers — small and lightweight execution environments.
          </Text>
        </View>
        <Button style={globalStyles.packageButton} onPress={() => Linking.openURL("https://docs.github.com/en/packages/guides/configuring-docker-for-use-with-github-packages")}>
          <Text style={globalStyles.packageButtonText}>Learn More</Text>
        </Button>
      </View>

      <View style={globalStyles.packageView}>
        <View style={globalStyles.packageViewHeader}>
          <Image
            source={require('../../assets/img/apache-icon.png')}
            style={globalStyles.packageImage}
          />
          <Text style={globalStyles.packageTitle}>Apache Maven</Text>
        </View>
        <View style={globalStyles.packageContainerDescription}>
          <Text style={globalStyles.packageDescription}>
            A default package manager used for the Java programming language and
            the Java runtime environment.
          </Text>
        </View>
        <Button style={globalStyles.packageButton} onPress={() => Linking.openURL("https://docs.github.com/en/packages/guides/configuring-apache-maven-for-use-with-github-packages")}>
          <Text style={globalStyles.packageButtonText}>Learn More</Text>
        </Button>
      </View>

      <View style={globalStyles.packageView}>
        <View style={globalStyles.packageViewHeader}>
          <Image
            source={require('../../assets/img/nuget-icon.png')}
            style={globalStyles.packageImage}
          />
          <Text style={globalStyles.packageTitle}>NuGet</Text>
        </View>
        <View style={globalStyles.packageContainerDescription}>
          <Text style={globalStyles.packageDescription}>
            A free and open source package manager used for the Microsoft
            development platforms including .NET.
          </Text>
        </View>
        <Button style={globalStyles.packageButton} onPress={() => Linking.openURL("https://docs.github.com/en/packages/guides/configuring-dotnet-cli-for-use-with-github-packages")}>
          <Text style={globalStyles.packageButtonText}>Learn More</Text>
        </Button>
      </View>

      <View style={globalStyles.packageView}>
        <View style={globalStyles.packageViewHeader}>
          <Image
            source={require('../../assets/img/rubygems-icon.png')}
            style={globalStyles.packageImage}
          />
          <Text style={globalStyles.packageTitle}>RubyGems</Text>
        </View>
        <View style={globalStyles.packageContainerDescription}>
          <Text style={globalStyles.packageDescription}>
            A standard format for distributing Ruby programs and libraries used
            for the Ruby programming language.
          </Text>
        </View>
        <Button style={globalStyles.packageButton} onPress={() => Linking.openURL("https://docs.github.com/en/packages/guides/configuring-rubygems-for-use-with-github-packages")}>
          <Text style={globalStyles.packageButtonText}>Learn More</Text>
        </Button>
      </View>

      <View style={globalStyles.packageView}>
        <View style={globalStyles.packageViewHeader}>
          <Image
            source={require('../../assets/img/npm-icon.png')}
            style={globalStyles.packageImage}
          />
          <Text style={globalStyles.packageTitle}>npm</Text>
        </View>
        <View style={globalStyles.packageContainerDescription}>
          <Text style={globalStyles.packageDescription}>
            A package manager for JavaScript, included with Node.js. npm makes
            it easy for developers to share and reuse code.
          </Text>
        </View>
        <Button style={globalStyles.packageButton} onPress={() => Linking.openURL("https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages")}>
          <Text style={globalStyles.packageButtonText}>Learn More</Text>
        </Button>
      </View>

      <View style={globalStyles.packageView}>
        <View
          style={globalStyles.packageViewHeader}
          style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/img/docker-icon.png')}
              style={globalStyles.packageImage}
            />
            <Text style={globalStyles.packageTitle}>Containers</Text>
          </View>
          <Badge
            style={{
              backgroundColor: '#6F42C1',
              position: 'relative',
              right: 60,
            }}>
            <Text style={{fontSize: 11}}>beta</Text>
          </Badge>
        </View>
        <View style={globalStyles.packageContainerDescription}>
          <Text style={globalStyles.packageDescription}>
            A single place for your team to manage Docker images and decide who
            can see and access your images.
          </Text>
        </View>
        <Button style={globalStyles.packageButton} onPress={() => Linking.openURL("https://docs.github.com/en/packages/guides/about-github-container-registry")}>
          <Text style={globalStyles.packageButtonText}>Learn More</Text>
        </Button>
      </View>
     <Unexpected />
    </View>
  );
};

export default Packages;
