# CSGO-U
A mobile app to get CSGO utilities techniques

After I finished my first MERN stack project, coincidently, I need a mobile app search game info during I playing PC game. So I decided to make my first mobile app using react native. 

In the backend, I used express and mongoDB as I used in my website. As for frontend, I chose React Native and Expo as my platform. Because they have many convenient components in community. Finally, I deposited my frontend in Expo and backend in heroku.

## Quickly set up
### (a). Clone this repository to your local folder
```
git clone https://github.com/TotallyNewGuy/CSGO-U.git
```

### (b). Setup Node.js backend project
- Go to **server** folder then install all dependencies
```
$ cd CSGO-U/server
$ npm install
```
- Open .env.example and edit server port and MongoDB URL to configure your database
```
PORT = 'Port'
CONNECTION_URL = 'MongoDB_URL'
```
- **IMPORTANT!** After save changes, also change the name of **.env.example** to **.env**
- Run your backend project. It will run at your **localhost:"your modified port"**
```
npm start
```
- Done! 👍

### (c). Setup React frontend project
- Go to **client** folder, install all dependencies, run this project
```
$ cd CSGO-U/client
$ npm install
$ npm start
```
- It will run at localhost:19002(according to expo settings) and open a metro in browser automatically! Done! 👍

## (Optional) Depoly backend server
- Login or signup for https://www.heroku.com/
- Create a new app in Heroku
- Download and install Heroku CLI(or other tools) based on its docs.
- Bind your Heroku accont within your backend project
- Submit your codes to Heroku and it will help you build it automatically.
- Now you can change your api URL into Heroku URL you created.
