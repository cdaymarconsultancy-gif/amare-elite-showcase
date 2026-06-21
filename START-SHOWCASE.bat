@echo off
title AMARE ELITE SHOWCASE SERVER
echo ==========================================================
echo   AMARE ELITE - EXCLUSIEVE BRAZIL COLLECTIE PRESENTATIE
echo ==========================================================
echo.
echo   Webserver proberen te starten...
echo.

where npx >nul 2>nul
if %errorlevel% equ 0 (
    echo   [Node.js gedetecteerd] Server wordt gestart op http://localhost:8080...
    start "" "http://localhost:8080"
    npx http-server -p 8080 -c-1
) else (
    echo   [WAARSCHUWING] Node.js is niet geinstalleerd op dit systeem.
    echo   We openen de slideshow direct via het lokale HTML-bestand...
    echo.
    start "" "index.html"
    echo   U kunt de presentatie direct bekijken in de geopende browser.
    echo   Sluit dit venster om door te gaan.
    echo.
    pause
)
