const electron = require('electron')
const countdown = require('./countdown')

const app = electron.app
const ipc = electron.ipcMain

const BrowserWindow = electron.BrowserWindow

let window

app.on('ready', _ => {
    window = new BrowserWindow({
        height: 400,
        width: 400,
        webPreferences: { // change default behavior
            nodeIntegration: true
        }
    })
    window.loadURL(`file://${__dirname}/countdown.html`)


    window.on('closed', _=> {
        console.log('closed')
        win = null
    })
})

ipc.on('countdown-start', _ => {
    countdown(c => {
        //console.log('count', c)
        //mainWindow.webContents.send('countdown', c)
        window.webContents.send('countdown', c)
    })
})
