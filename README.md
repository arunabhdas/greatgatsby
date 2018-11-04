# greatgatsby

## Metadata
greatgatsby / greatgatsbyapp

## Dev

==> yarn start

==> yarn build 
Bundles the app into static files for production.

==> yarn test 
Starts the test runner.

==> yarn eject 
Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!





## Deploy
==> yarn build

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  http://bit.ly/CRA-deploy


==> firebase init


? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? File build/index.html already exists. Overwrite? No
i  Skipping write of build/index.html



==> firebase deploy


Project Console: https://console.firebase.google.com/project/greatgatsbyapp/overview
Hosting URL: https://greatgatsbyapp.firebaseapp.com

## Steps

==> npx create-react-app greatgatsby


==> yarn add tabler-react

==> npm install --save firebase


## Links

https://medium.com/@taweesoft/chapter-1-create-react-app-and-setup-firebase-real-time-todo-list-with-firebase-react-js-f03a904097c7