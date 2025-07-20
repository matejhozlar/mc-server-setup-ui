import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import isDev from "electron-is-dev";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let mainWindow = null;
const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    mainWindow.setMenuBarVisibility(false);
    mainWindow.removeMenu();
    const url = isDev
        ? "http://localhost:5173"
        : `file://${path.join(__dirname, "../dist/index.html")}`;
    mainWindow.loadURL(url);
};
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        app.quit();
});
