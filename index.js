const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true
        }
    });
    mainWindow.loadURL(` file://${__dirname}/index.html`);
});
