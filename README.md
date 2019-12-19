# Animals-App
Who doesn’t love Cute Animals? The following services allow you to find pictures of random animals via their endpoints!

The API endpoints used for this React Native app are the following:

* https://aws.random.cat/meow
  
* https://random.dog/woof.json
  
* https://randomfox.ca/floof/
  
* https://placegoat.com/
  
Each API endpoint has different data standards.  

This application displays an image from all 4 Apis at the same time, which means that all images are loaded before showing them to the screen. Also every 30 seconds,the application tries to refresh these images by fetching new ones from the APIs.

The images are displayed at the same time on the screen, in 4 quadrants. Each quadrant is
responsible for displaying one kind of animal.

An example of what it looks like is:

image

## Requirements
* SDK
* Android Studio
* NodeJS
* npm

Here is a helpful [tutorial](https://www.tutorialspoint.com/react_native/react_native_environment_setup.htm).

## Before you run the App
1. Make sure that you change the sdk path in /android/local.properties file, with the path of sdk on your computer!
2. In the folder Animals App open the terminal and run "react-native start" command and don't close this terminal.
3. Open the AVD Manager from the Android Studio and run an Emulator.
4. Once the graph is done and the emulator is ready, open another terminal in the Animals App folder and run "react-native run-android" command.
5. Done! Your app should be running on Emulator.
