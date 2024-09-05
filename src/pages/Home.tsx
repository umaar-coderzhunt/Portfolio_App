import {
  ScrollView,
  View,
  Image,
  Text,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useColorScheme} from 'nativewind';
import {Contact, skills} from '../utils/contraint';
import {Linking} from 'react-native';

const Home = () => {
  const isDarkMode = useColorScheme().colorScheme;

  return (
    <SafeAreaView
      style={{flex: 1}}
      className="flex-col bg-white dark:bg-slate-800">
      <View style={{flex: 0.7}}>
        <View accessibilityRole="image" className="mt-4 mb-2 w-32 h-32 mx-auto">
          <Image
            source={require('../assets/images/umar.jpg')}
            alt="profile"
            resizeMode="contain"
            className="h-full w-full rounded-full border-4 border-black dark:border-[#ccc]"
            resizeMethod="scale"
          />
        </View>
        <View className="mb-4">
          <Text className="mb-2 text-black dark:text-white text-xl font-bold text-center">
            Umar Farooq
          </Text>
          <Text className="mx-5 text-base text-black dark:text-white font-semibold">
            I am an{' '}
            <Text className="text-red-500">Associate Software Engineer</Text> at{' '}
            <Text className="text-red-500">Coderzhunt</Text>, and I have 2 years
            of experience in development.
          </Text>
        </View>
      </View>
      <ScrollView style={{flex: 2}}>
        <View>
          <Text className="text-xl font-bold text-black dark:text-white text-center">
            Languages & Skills
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="py-2 px-5 h-64 flex flex-col justify-center flex-wrap gap-4">
              {skills.map(items => (
                <Pressable
                  onPress={() => Linking.openURL(items.link)}
                  key={items.key}
                  className="w-24 py-4 backdrop-blur-sm bg-gray-500/20 dark:bg-[#ccc]/20 flex justify-center items-center rounded-md">
                  <Icon
                    name={items.icon}
                    size={40}
                    color={isDarkMode === 'light' ? '#000' : '#fff'}
                  />
                  <Text className="text-sm font-bold text-black dark:text-white">
                    {items.text}
                  </Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>
        <View>
          <Text className="text-xl font-bold text-black dark:text-white text-center">
            Contact Info
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="py-2 px-5 h-64 flex flex-col justify-center flex-wrap gap-4">
              {Contact.map(items => (
                <Pressable
                  onPress={() => Linking.openURL(items.link)}
                  key={items.key}
                  className="w-24 py-4 backdrop-blur-sm bg-gray-500/20 dark:bg-[#ccc]/20 flex justify-center items-center rounded-md">
                  <Icon
                    name={items.icon}
                    size={40}
                    color={isDarkMode === 'light' ? '#000' : '#fff'}
                  />
                  <Text className="text-sm font-bold text-black dark:text-white">
                    {items.text}
                  </Text>
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>
        <View>
          <Text className="text-xl font-bold text-black dark:text-white text-center">
            Portfolio
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
