# Aan tafel - Maaltijdplanner V1

Een mobiele, uitbreidbare maaltijdplanner voor GitHub Pages.

## Aangepaste flow

1. Weekoverzicht toont planning en aantal eters.
2. Een lege maaltijd opent rechtstreeks de Weekpot met de juiste dag geselecteerd.
3. Beschikbaarheid gebruikt een groen vinkje voor aanwezig.
4. Vanuit de Weekpot plan je rechtstreeks een gerecht.
5. Per gerecht zie je hoe lang geleden het gegeten werd.
6. Stemmen is optioneel en wordt alleen gestart na selectie van minstens twee twijfelgerechten.
7. Gerechten, gebruikers, aanwezigheid, stemmen en planning worden lokaal bewaard.

## Publiceren op GitHub Pages

1. Maak een nieuwe repository, bijvoorbeeld `maaltijdplanner`.
2. Upload de inhoud van deze map naar de hoofdmap van de repository. Upload dus niet alleen het zipbestand.
3. Open in GitHub **Settings > Pages**.
4. Kies bij **Build and deployment** voor **Deploy from a branch**.
5. Kies branch **main** en map **/(root)** en sla op.
6. Open daarna de GitHub Pages-link die GitHub toont.

## Testscenario

- Ga naar Week en klik bij een lege dag op **Kies een gerecht**.
- Plan een gerecht rechtstreeks vanuit de Weekpot.
- Ga naar Thuis en wijzig een groen vinkje.
- Selecteer in de Weekpot twee gerechten via **Twijfel**.
- Start de stemming en wissel rechtsboven tussen gebruikers om stemmen te simuleren.

## Opslag en beperking van V1

Deze versie gebruikt `localStorage`. De gegevens blijven op hetzelfde toestel en in dezelfde browser bewaard, maar worden niet tussen verschillende gsm's gesynchroniseerd. Voor echte gedeelde gezinsdata is in een volgende versie een database en eenvoudige aanmelding nodig.
