import { BrowserWindow, app } from 'electron';
import * as path from 'path';
import * as url from 'url';

let window: BrowserWindow;

function createWindow () {

  window = new BrowserWindow({width: 800, height: 600})

  window.loadURL(url.format({
    pathname: path.join(__dirname, './renderer/templates/index.html'),
    protocol: 'file:',
    slashes: true
  }));


  window.on('closed', () => {
    window = null
  });
}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (window === null) {
    createWindow();
  }
});