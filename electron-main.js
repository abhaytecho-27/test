import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
let mainWindow;
app.on('ready', () => {
  // Create the Electron browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'), // Path to preload script
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  // Load the React app
  mainWindow.loadURL(`http://localhost:3000`); // Ensure React app is running
  // Handle mouse pointer movement from the renderer process
  ipcMain.on('move-pointer', async () => {
    const webContents = mainWindow.webContents;
    // Use the DevTools Protocol to simulate mouse movement
    try {
      console.log("move event received");
      
      await webContents.debugger.attach('1.3'); // Attach DevTools Protocol
      await webContents.debugger.sendCommand('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        x: 100, // Replace with coordinates near the OSK region
        y: 800, // Replace with coordinates near the OSK region
      });
      await webContents.debugger.detach(); // Detach after sending the command
    } catch (err) {
      console.error('Failed to move pointer:', err);
    }
  });
});