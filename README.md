# BlockCt
Company information made in React Native and android studio
all rights and information within this application is reserved to Advanced Block Chain AG
¨"https://www.advancedblockchain.com"

This application is made using React Native, i used expo for the build, and android studio for the coding

in the folder "screens" of the project the: HomeScreen.js  
1/ contains the company logo, simple work definition and 2 buttons. 

![home screen with buttons](https://user-images.githubusercontent.com/11035733/45586406-40e54400-b8f7-11e8-98d0-88275c91d7a2.jpg)



2/ the firstbutton allows the visit the site 'about us' page, and a second button to visit the 'contact us' 
using the library ¨"import { WebBrowser } from 'expo';" which allows an external browser mode connected to the site using the onbutton press action, here are the preview of the two actions after press. 

![about us button](https://user-images.githubusercontent.com/11035733/45586404-40e54400-b8f7-11e8-8c1b-2962fa1de7cb.jpg)
![home contact button](https://user-images.githubusercontent.com/11035733/45586405-40e54400-b8f7-11e8-83c5-48b574ee9612.jpg)




3/ using import { WebView} from 'react-native';¨and building within a basic render function, turns the screens into a web view from within the application internally
allowing both the news and twitter to be available to immediate view,
the react native "Web View" , allows for twitter access without the need to implement Twitter API or needing any kind of authentication, and/or tokens. 

 IN the project directory screens/LinksScreen.js  you will find the code for viewing "twitter.com/BlockchainAG" 

![news room](https://user-images.githubusercontent.com/11035733/45586424-84d84900-b8f7-11e8-83b9-d4f8913eac88.jpg)


And IN the directory screens/SettingsScreen.js  contains a web view of the latest news posted on "https://www.advancedblockchain.com/en/newsroom.html"

![tweet](https://user-images.githubusercontent.com/11035733/45586425-84d84900-b8f7-11e8-8097-bb7dc6d4d536.jpg)
