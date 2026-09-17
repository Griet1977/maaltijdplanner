# Aan tafel V6 - Firebase + stemmen

Deze versie combineert de maaltijdplanner met Firebase Authentication, Cloud Firestore, realtime synchronisatie, suggesties, conflicten, stemmen, automatische winnaar en beheerderbeslissing bij ex aequo.

## 1. Upload naar GitHub Pages
Upload alle bestanden behalve `firestore.rules` naar de hoofdmap van de repository. GitHub Pages blijft op `main` en `/(root)`.

## 2. Firestore-regels publiceren
Open Firebase Console > Firestore > Rules. Vervang de bestaande testregels door de inhoud van `firestore.rules` en klik **Publish**. Daardoor hebben alleen aangemelde gebruikers toegang.

## 3. Eerste gebruiker
Open de GitHub Pages-site. Registreer eerst Griet. De eerste geregistreerde gebruiker wordt automatisch beheerder. Registreer daarna op de andere gsm's Pauline en Mats met elk een eigen e-mailadres en wachtwoord.

## 4. Werking
- Alle toestellen lezen hetzelfde document in Cloud Firestore.
- Wijzigingen verschijnen realtime op andere geopende toestellen.
- Alleen actieve gebruikers tellen mee om een stemming af te ronden.
- Een unieke winnaar wordt automatisch ingepland.
- Bij ex aequo kiest de beheerder.

## Belangrijk
De Firebase webconfig is publiek herkenningsmateriaal voor de webapp. De beveiliging gebeurt via Authentication en Firestore Rules. Deze gezinsversie laat elke aangemelde gebruiker de gedeelde maaltijdplanner wijzigen; beheerderacties zijn in de interface beperkt.
