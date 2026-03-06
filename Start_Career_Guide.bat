@echo off
TITLE Career Guide Local Server
cd /d "%~dp0"
echo ==========================================
echo    CAREER GUIDE - LOCAL OFFLINE SERVER
echo ==========================================
echo.
echo Starting server at http://localhost:8000
echo This works WITHOUT internet.
echo.
echo Please keep this window open while using the app.
echo.
start "" "http://localhost:8000"
python -m http.server 8000
pause
