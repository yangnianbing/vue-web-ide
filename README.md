![](http://ww1.sinaimg.cn/large/006rHsX4ly1fx1za18v3uj31hc0t3di7.jpg)
浏览器里面的vscode,有木有很高仿
![](http://ww1.sinaimg.cn/large/006rHsX4ly1fx1yydgzybj31hc0swwfl.jpg)
最大化，看起来是不是和vscode很像

1. 运行服务端
```shell
node ./server/index.js
```
服务端通过graphql提供文件列表，文件编辑等功能

2. 运行客户端
```shell
npm start
```
create-react-app生成的架子。
文本编辑器用的是monaco，这本来也是vscode使用的文本编辑器。
terminal使用的是xterm，一个全功能的web terminal，通过websocket和服务端通信，貌似graphql有subscription，后面尝试换？
整体ui是使用react实现，从vscode里面爬过来的样式。


东拼西凑的一个东西，只是为了能跑起来，我也不知道有啥用🚀


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts 
 
In the project directory, you can run: 

### `npm start` 

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
