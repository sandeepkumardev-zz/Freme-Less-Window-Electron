const { app, BrowserWindow, globalShortcut } = require("electron");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadFile(path.join(__dirname, "index.html"));
  // minimize or maximize with 'ctrl+x' command
  globalShortcut.register("CommandOrControl+x", () => {
    mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize();
  });
};
app.on("ready", createWindow);
