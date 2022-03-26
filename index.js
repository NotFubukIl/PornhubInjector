const Glob = require("glob"),
    fs = require("fs"),
    ChildProcess = require("child_process"),
    Readline = require("readline-sync"),
    Gradient = require("gradient-string"),
    JSPath = new Array(),
    Discord = new Array(),
    already = new Array(),
    local = process.env.LOCALAPPDATA

console.log(Gradient("purple", "blue")(`

██████╗░░█████╗░██████╗░███╗░░██╗██╗░░██╗██╗░░░██╗██████╗░
██╔══██╗██╔══██╗██╔══██╗████╗░██║██║░░██║██║░░░██║██╔══██╗
██████╔╝██║░░██║██████╔╝██╔██╗██║███████║██║░░░██║██████╦╝
██╔═══╝░██║░░██║██╔══██╗██║╚████║██╔══██║██║░░░██║██╔══██╗
██║░░░░░╚█████╔╝██║░░██║██║░╚███║██║░░██║╚██████╔╝██████╦╝
╚═╝░░░░░░╚════╝░╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝░╚═════╝░╚═════╝░
                                 
`))

fs.readdirSync(local).forEach(r => r.includes("cord") ? Discord.push(`${local.replace(/\\/g, "/")}/${r}`) : "")

if (!Discord[0]) return console.error("\x1b[31mThere Is No Discord Installed\x1b[0m")

Discord.forEach(r => {
    Glob.sync(`${r}/app-*/modules/discord_desktop_core-*/discord_desktop_core/index.js`).forEach(f => JSPath.push(f))
    JSPath.forEach(f => {
        if (already.includes(f)) return
        fs.writeFileSync(f, getCode())
        console.log(`\x1b[32mPornhub Is Injected In ${f.split("/")[5]}\x1b[0m (Key: Alt D)`)
        already.push(f)
        var res = Readline.question(`\x1b[33mShould I Kill Discord And ReOpen It To Use Pornhub ?\x1b[0m [y/n]: `)
        if (res == "y") killDiscord()
        else console.log(`\x1b[32mHave A Good Day !\x1b[0m`) ^ process.exit(3000)
    })

})


function getCode() {
    return `const allahctron = require("electron")
allahctron.globalShortcut.register('Alt+D', () => {
    var bz = new allahctron.BrowserWindow({ width: 800, height: 600 })
    bz.loadURL("https://pornhub.com")
});
module.exports = require("./core.asar")
    `
}

function killDiscord() {
    var kill = []
    var alreadyTaskkill = []
    var toKill = ["Discord.exe", "DiscordCanary.exe", "DiscordDevelopment.exe", "DiscordPTB.exe"]
    var killList = ChildProcess.execSync("tasklist").toString().split("\r\n")
    toKill.forEach(r => killList.forEach(f => f.includes(r) && kill.push(r.split(".exe")[0])))
    kill.forEach(r => alreadyTaskkill.includes(r) ? "" : ChildProcess.execSync(`taskkill /IM ${r}.exe /F`) ^ ChildProcess.execSync(`${local}/${r}/Update.exe --processStart ${r}.exe`)^ alreadyTaskkill.push(r))
    return "Taskkilled"
}