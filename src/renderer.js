const { ipcMain } = require('electron')
const electron = require('electron')
const ipc = electron.ipcRenderer

document.getElementById('start').addEventListener('click', _ => {
    ipc.send('countdown-start')
})

ipc.on('countdown', (evt, c) => {
    document.getElementById('count').innerHTML = c
})