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

## Before you run the App
Make sure that you change the sdk path in /android/local.properties file, with the path of sdk on your computer!
