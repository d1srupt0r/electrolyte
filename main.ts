const { app, BrowserWindow } = require("electron");
declare var __dirname: string, process: NodeJS.Process;

let win: Electron.BrowserWindow;

let createWindow = () => {
    win = new BrowserWindow({ width: 800, height: 600, frame: false });
    win.loadURL(`file://${__dirname}/_layout.html`);
    win.webContents.openDevTools();
    win.on("closed", () => {
        win = null;
    });
};
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});
