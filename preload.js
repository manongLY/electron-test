// 在主进程通过Node的全局 process 对象访问这个信息是微不足道的。 然而，
// 你不能直接在主进程中编辑DOM，因为它无法访问渲染器 文档 上下文。 
// 它们存在于完全不同的进程！

// 这是将 预加载 脚本连接到渲染器时派上用场的地方。 预加载脚本在渲染器进程加载之前加载，
// 并有权访问两个 渲染器全局 (例如 window 和 document) 和 Node.js 环境。

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if(element){
            element.innerText = text
        }
    }
    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})

  