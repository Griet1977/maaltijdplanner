# Aan tafel | Maaltijdplanner V1

Een volledig statische, mobiele maaltijdplanner voor GitHub Pages. Er is geen buildstap en geen externe databank nodig.

## Functies

- gebruikers toevoegen en wisselen
- per gebruiker aangeven wanneer die thuis eet
- standaard: weekdagen avondeten, weekend lunch en avondeten
- gerechten suggereren en nieuwe gerechten toevoegen
- gezamenlijke weekpot
- stemopties per dag en maaltijd samenstellen
- stemmen per gebruiker
- winnaar of gelijkstand tonen
- beheerder plant definitief in
- week vergrendelen
- gerechtenhistoriek met aantal en datums
- lokale opslag in de browser via `localStorage`

## Publiceren op GitHub Pages

1. Maak een nieuwe repository, bijvoorbeeld `maaltijdplanner`.
2. Upload `index.html`, `styles.css`, `app.js`, `.nojekyll` en eventueel deze `README.md` naar de hoofdmap.
3. Open in de repository **Settings > Pages**.
4. Kies bij **Build and deployment** voor **Deploy from a branch**.
5. Selecteer branch **main** en map **/(root)**.
6. Sla op. GitHub toont daarna de link naar de gepubliceerde site.

## Belangrijke beperking van deze V1

De gegevens worden alleen in de browser van het gebruikte toestel opgeslagen. Verschillende gezinsleden op verschillende toestellen delen dus nog geen live gegevens. De gebruikerswisselaar simuleert de verschillende gebruikers op hetzelfde toestel.

Voor echte synchronisatie is in een volgende versie een online databank en gebruikersauthenticatie nodig, bijvoorbeeld via Supabase of Firebase.

## Testen zonder GitHub

Open `index.html` rechtstreeks in een browser. Voor de betrouwbaarste test kun je de bestanden ook via een eenvoudige lokale webserver openen.

## Start opnieuw

Ga in de app als beheerder naar **Beheer** en kies **Demogegevens herstellen**.
