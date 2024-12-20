import { contextBridge, ipcRenderer } from 'electron';
contextBridge.exposeInMainWorld('electronAPI', {
  movePointer: () => ipcRenderer.send('move-pointer'),
});