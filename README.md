# Aan tafel V5 - verschillende telefoons

V5 synchroniseert via Firebase. Iedere telefoon voert één keer dezelfde gezinscode in en kiest één keer de gebruiker. Daarna wordt dit onthouden.

## Activeren
1. Maak een project op Firebase Console.
2. Voeg een web-app toe en plak de configuratie in `firebase-config.js`.
3. Activeer bij Authentication de methode **Anonymous**.
4. Maak een Firestore Database.
5. Kopieer `firestore.rules` naar Firestore > Rules en publiceer.
6. Upload alle bestanden naar GitHub Pages.
7. Open de app op elke telefoon, voer dezelfde gezinscode in en kies de naam.
8. Voeg de website toe aan het startscherm.

## Herinneringen
Onder Beheer staan `Vraag beschikbaarheid`, `Vraag suggesties` en `Deel weekplanning`. Deze openen het deelmenu van de telefoon voor WhatsApp of sms. Volautomatische pushmeldingen vragen daarnaast Cloud Messaging, toestemming op elk toestel en een serverfunctie; die zijn bewust nog niet nodig voor de gezinstest.

## Veiligheid
De regels zijn bedoeld voor een besloten prototype. Gebruik een moeilijk te raden gezinscode en deel die alleen met je gezin. Voor publieke productie zijn uitnodigingstokens en strengere regels nodig.
