import React from 'react';
import moment from 'moment';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Animated,
  Image,
  Text,
  ScrollView
} from 'react-native';

import Header from '../components/Header';

const profile = {
  "picture": "https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm",
  "email": "rafael.fuzifaru@gmail.com",
  "first_name": "Rafael",
  "last_name": "Fuzifaru Cianci",
  "phone": "(48) 99660-6666",
  "gender": 1,
  "birthday": "1993-04-27T00:00:00-03:00",
  "linkedin": "https://www.linkedin.com/in/rafaelcianci",
  "github": "http://github.com/rafacianci",
  "address": {
    "Street": "",
    "ZipCode": "",
    "Number": "",
    "ComplementaryAddress": ""
  },
  "language": ["Português - PT", "Inglês - EN", "Japonês - JA"],
  "name": "Rafael Fuzifaru Cianci"
}

export default class Profile extends React.PureComponent {
  fadeAnimation = new Animated.Value(0);
  state = {
    loading: true
  }

  finishLoading = async () => {
    await setTimeout(() => {
      Animated.timing(this.fadeAnimation, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true
      }).start()
      this.setState({ loading: false })
    }, 600)
  }

  componentDidMount() {
    this.finishLoading();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        {this.state.loading && (
          <View style={styles.loadingContent}>
            <ActivityIndicator size="large" color="#7800ff" />
          </View>
        )}
        {!this.state.loading && (
          <ScrollView>
            <View style={styles.profileTitle}>
              <Image
                className="profile-image"
                style={styles.profileImage}
                source={{ uri: profile.picture }}
              />
              <Text className="profile-name" style={styles.profileName}>{profile.name}</Text>
            </View>
            <Animated.View className="contact-content" style={[styles.userContent, { opacity: this.fadeAnimation }]}>
              <Text className="contact-label" style={styles.contentLabel}>Linkedin:</Text>
              <Text className="contact-value" style={{ ...styles.contentText, ...styles.mBottom }}>{profile.linkedin}</Text>

              <Text className="contact-label" style={styles.contentLabel}>Github:</Text>
              <Text className="contact-value" style={styles.contentText}>{profile.github}</Text>
            </Animated.View>
            <Animated.View className="contact-content" style={[styles.userContent, { opacity: this.fadeAnimation }]}>
              <Text className="contact-label" style={styles.contentLabel}>E-mail:</Text>
              <Text className="contact-value" style={{ ...styles.contentText, ...styles.mBottom }}>{profile.email}</Text>

              <Text className="contact-label" style={styles.contentLabel}>Celular:</Text>
              <Text className="contact-value" style={{ ...styles.contentText, ...styles.mBottom }}>{profile.phone}</Text>

              <Text className="contact-label" style={styles.contentLabel}>Data de Nascimento:</Text>
              <Text className="contact-value" style={{ ...styles.contentText, ...styles.mBottom }}>
                {moment(profile.birthday).format('DD/MM/YYYY')}
              </Text>

              <Text className="contact-label" style={styles.contentLabel}>Sexo:</Text>
              <Text className="contact-value" style={{ ...styles.contentText, ...styles.mBottom }}>
                {profile.gender === 1 ? 'Masculino' : 'Feminino'}
              </Text>

              <Text className="contact-label" style={styles.contentLabel}>Idiomas:</Text>
              <View style={styles.languageContent}>
                {profile.language.map(language => (
                  <View key={language} style={styles.language}>
                    <Text className="contact-language" style={styles.languageText}>
                      {language}
                    </Text>
                  </View>
                ))}
              </View>
            </Animated.View>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#7800ff',
    borderBottomWidth: 2,
    padding: 16,
    paddingTop: 55
  },
  headerImage: {
    height: 45,
    width: 250
  },
  loadingContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  profileTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16
  },
  profileImage: {
    borderRadius: 22,
    height: 45,
    width: 45
  },
  profileName: {
    color: '#7800ff',
    fontSize: 20,
    paddingLeft: 16
  },
  contentText: {
    color: '#FFFFFF',
    fontSize: 14
  },
  mBottom: {
    marginBottom: 16
  },
  userContent: {
    backgroundColor: '#000',
    borderRadius: 2,
    margin: 16,
    padding: 16,
    marginTop: 0
  },
  contentLabel: {
    color: '#FFFFFF',
    fontSize: 11
  },
  contentText: {
    color: '#FFFFFF',
    fontSize: 14
  },
  languageContent: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  language: {
    backgroundColor: '#666',
    borderRadius: 50,
    marginRight: 16,
    marginTop: 8
  },
  languageText: {
    color: '#FFFFFF',
    fontSize: 14,
    padding: 5,
    paddingHorizontal: 10
  }
})
