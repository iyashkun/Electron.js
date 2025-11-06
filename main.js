const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Create the browser window with specific size
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  // Enable Node.js in renderer (for simplicity; use preload in production)
      contextIsolation: false // Disable context isolation (for simplicity)
    }
  });

  // Load the HTML file
  mainWindow.loadFile('index.html');

  // Open DevTools in development (optional)
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
