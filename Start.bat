@echo off
cls
nim c -d:release .\main.nim
./main.exe
pause
