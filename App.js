import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';

export default class App extends Component {

    state = {
        data1: null,    // url for cats
        data2: null,    // url for dogs
        data3: null,    // url for foxes
        data4: null,    // url for goats
        loaded1: false, // flag that cat image has loaded
        loaded2: false, // flag that dog image has loaded
        loaded3: false, // flag that fox image has loaded
        loaded4: false  // flag that goat image has loaded
    }

    // checks if the url indicates a static image
    checkExtension(url) {
        return url.endsWith("gif") || url.endsWith("mp4") || url.endsWith("mp3") || url.endsWith("webm");
    }

    // makes the requests to the 4 APIs and retrieves the images' links
    async getUrl() {
        // temporary variables for requests' responses
        let u1, u2, u3;

        // as long as the url in response isn't for a static image
        do {
            try{
                // try and fetch from the API of cats
                u1 = await fetch('https://aws.random.cat/meow', {method: 'GET'}).then((response) => response.json());
            }catch(err) {
                // if there is an error, print it and try again
                console.error(err);
                u1 = {"file": 'gif'}.json();
            }
        }while (this.checkExtension(u1.file));
        
        // as long as the url in response isn't for a static image
        do {
            try {
                // try and fetch from the API of dogs
                u2 = await fetch('https://random.dog/woof.json', {method: 'GET'}).then((response) => response.json());
            }catch(err) {
                // if there is an error, print it and try again
                console.error(err);
                u2 = {"url": 'gif'}.json();
            }
        }while (this.checkExtension(u2.url));
        
        // as long as the url in response isn't for a static image
        do {
            try {
                // try and fetch from the API of foxes
                u3 = await fetch('https://randomfox.ca/floof/', {method: 'GET'}).then((response) => response.json());
            }catch(err) {
                // if there is an error, print it and try again
                console.error(err);
                u3 = {"image": 'gif'}.json();
            }
        }while (this.checkExtension(u3.image));
        
        // set the urls for the images
        this.setState({
            data1: u1.file,
            data2: u2.url,
            data3: u3.image,
            // fetch from the API of goats (goat's API sends back an image, not a json file, so we use the given url with random width and height)
            data4: 'http://placegoat.com/' + (Math.round(((Math.random() *100) + 200))) + '/' + (Math.round(((Math.random() *100) + 200))),
            loaded1: false,
            loaded2: false,
            loaded3: false,
            loaded4: false
        });
        
    }

    componentDidMount() {
        
        // get the first images
        this.getUrl();

        // every 30 seconds
        this.interval = setInterval(async() => {
            // get new images
            this.getUrl();
        }, 30000);
    }

    // clean up
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        // the images are rendered and displayed only when all 4 of them are loaded
        return (
          <ScrollView contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-evenly'
          }}>
              <View style = {styles.container}>
                  <View style = {styles.row}>
                      <Image onLoad={()=>this.setState({loaded1: true})} style = {(this.state.loaded1 && this.state.loaded2 && this.state.loaded3 && this.state.loaded4) ? styles.image : {display: 'flex'}} source = {{uri: this.state.data1}}/>
                      <Image onLoad={()=>this.setState({loaded2: true})} style = {(this.state.loaded1 && this.state.loaded2 && this.state.loaded3 && this.state.loaded4) ? styles.image : {display: 'flex'}} source = {{uri: this.state.data2}}/>
                  </View>
                  <View style = {styles.row}>
                      <Image onLoad={()=>this.setState({loaded3: true})} style = {(this.state.loaded1 && this.state.loaded2 && this.state.loaded3 && this.state.loaded4) ? styles.image : {display: 'flex'}} source = {{uri: this.state.data3}}/>
                      <Image onLoad={()=>this.setState({loaded4: true})} style = {(this.state.loaded1 && this.state.loaded2 && this.state.loaded3 && this.state.loaded4) ? styles.image : {display: 'flex'}} source = {{uri: this.state.data4}}/>
                  </View>
              </View>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        margin: 3,
        minHeight: 600,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'grey',
        alignSelf: 'auto'
    },
    row: {
        flex: 1,
        marginBottom: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        alignSelf: 'auto'
    },
    image: {
        flex: 1,
        margin: 1,
        resizeMode: 'cover',
        alignSelf: 'auto'
    }
})