# Web KMK CSUI

Built with React.js

# Developing this project on your local

Follow these steps:

## Pre-Development
* Install node js
* Install yarn
* Install this extension if you use Visual Studio Code:
```
ES7 React/Redux/GraphQL/React-Native snippets from dsznajder
```

## Development
* Clone this project
```cmd
git clone https://github.com/kmk-csui/web
```

* Go to the project folder
```cmd
cd web
```

* Switch branch to the feature name you'll build
```cmd
git checkout -b <name>/<feature> master
```

Example: you'll build login feature.
```cmd
git checkout -b joni/navbar-footer master
```

* Open project in your Text Editor

* Do this first
```cmd
yarn install
```

* Start the application
```cmd
yarn start
```
Open `http://localhost:3000/`

* Work on your components (create a new folder under components with your feature name)

## Post-Development
If you're done developing some parts, do these steps:

* Tell git the changes you've made
```cmd
git add <file>
```
or instead (add all files):
```cmd
git add .
```

* Commit your changes
```cmd
git commit -m "<your commit message>"
```

* Push your changes to github
```cmd
git push origin <name>/<feature>
```

Example: you've build some parts of the login feature.
```cmd
git push origin joni/navbar-footer
```

## If there is any update from master, do:
```cmd
git pull origin master
```
On your branch!

## Public folder
There is a separation of some assets into `public` and `src/assets` folder. 
The reason is that there are many gallery image and react [requires](https://github.com/facebook/create-react-app/issues/585) 
you to import each of them individually which will be tedious and time consuming. 
The solution is the proposed (and accepted) public folder which can be read more 
[here](https://github.com/facebook/create-react-app/pull/703) 
and [here](https://create-react-app.dev/docs/using-the-public-folder/) 