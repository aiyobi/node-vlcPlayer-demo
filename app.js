if ((process.platform == 'win32') || (process.platform == 'darwin'))
    process.env['VLC_PLUGIN_PATH'] = require('path').join(__dirname, 'node_modules/wcjs-prebuilt/bin/plugins');

const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
 
var mainWindow = null;
 
 
// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
 
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});
 
  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
 
  mainWindow.openDevTools({detach: true});
 
  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
 
});
