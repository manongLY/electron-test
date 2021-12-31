const path = require('path')

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // __dirname 字符串指向当前正在执行脚本的路径 (在本例中，它指向你的项目的根文件夹)。
        // path.join API 将多个路径联结在一起，创建一个跨平台的路径字符串。
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    // 实现 mac os 特性
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow()
        }
    })
})

// 关闭所有窗口时退出应用 (Windows & Linux)
app.on('window-all-closed', () => {
    console.log('cccccccccccccc:',process);
    if(process.platform !== 'darwin'){
        app.quit()
    }
})