# 🇧🇷 Amare Elite — TikTok Lookbook Suriname

Welkom bij de TikTok-stijl productpresentatietool van **Amare Elite**! Deze tool presenteert uw exclusieve T-shirts uit Brazilië in het populaire TikTok-formaat (verticaal, interactief, en met Samba-muziek) speciaal voor de Surinaamse markt.

---

## 🌟 Kenmerken

- **TikTok Interface (9:16)**: Volledige mobiele TikTok-indeling met navigatie-tabs, profielavatars en een actiebalk onderaan.
- **Interactieve Overlays**:
  - **Liken (Hartje)**: Dubbelklik op het scherm of klik op het hartje aan de rechterkant om te liken. Dit toont een zwevend hartjes-effect en verhoogt de teller!
  - **Reactie Box (Comments Drawer)**: Open reacties van andere kopers en typ zelf live nieuwe reacties.
  - **Delen**: Kopieer de link direct naar uw klembord om door te sturen.
  - **Draaiende vinylplaat**: Roteert op de maat van de muziek. Klik erop om te dempen.
- **Samba Achtergrondmuziek**: Uw favoriete Samba-track wordt live via de YouTube API geladen (`https://youtu.be/kk4uddaHdDE`).
- **Luxe Dynamic Ambient Blur**: De achtergrond van de pagina past zich automatisch en zachtjes aan (cross-fade) aan de kleuren van elk T-shirt dat in beeld is.
- **Shop Now WhatsApp Knop**: Een opvallende advertentiebalk onderin. Bij het klikken opent WhatsApp met een kant-en-klaar bestelbericht voor het specifieke model voor **$35 USD**.

---

## 🚀 Hoe te Starten

1. Open de projectmap: `C:\Users\erwin\.gemini\antigravity\scratch\amare-elite-showcase`
2. Dubbelklik op het bestand **`START-SHOWCASE.bat`**
3. De micro-webserver start lokaal en opent automatisch `http://localhost:8080` in uw browser.
4. Klik op **"ONTDEK COLLECTIE"** om de presentatie te starten en de Samba te horen.
5. **Navigatie**: Swipe omhoog/omlaag op uw telefoon, of gebruik de **pijltjestoetsen (omhoog/omlaag)** op uw toetsenbord.

---

## ⚙️ Aanpassen & Customizen

### 1. Telefoonnummer voor WhatsApp aanpassen
Om bestellingen op uw eigen telefoonnummer te ontvangen:
1. Open `app.js` in een tekstverwerker (zoals Kladblok of VS Code).
2. Zoek helemaal bovenaan naar de regel:
   ```javascript
   const WHATSAPP_NUMBER = "5978888888";
   ```
3. Vervang `"5978888888"` door uw eigen nummer (inclusief landcode `597` voor Suriname, maar **zonder** `+` of spaties).
4. Sla op en ververs uw browser.

### 2. Prijzen of Beschrijvingen aanpassen
De shirts staan momenteel ingesteld op **$35 USD**.
1. Open `app.js`.
2. Zoek naar `const products = [...]`.
3. Wijzig per T-shirt de `title`, `price` (bijv. `"$35 USD"`), of `desc` naar wens.
4. U kunt ook de gesimuleerde reacties aanpassen in `const mockComments = {...}`.
