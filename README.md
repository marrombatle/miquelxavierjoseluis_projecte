# Estructura del Projecte

/css
├── contingut.css
├── style.css
├── detall.css
├── informacion.css
├── header.css
└── footer.css

/img

index.html
contingut.html
detall.html
info.html


# Descripció de les Pàgines

### **index.html**
Pàgina principal amb header, main i footer. Inclou una breu descripció del que venem i un peu de pàgina amb xarxes socials i dades de contacte.

### **contingut.html**
Llista dels productes que venem, organitzats per categories, amb el nom i preu de cada article.

### **detall.html**
Descripció més detallada d’un producte representatiu de cada categoria. Informació ampliada sobre les característiques dels productes.

### **info.html**
Informació de contacte i dades de l’empresa: qui som, què oferim i com contactar-nos.

# Repartiment de Tasques

- **HTML**
  - **Miquel** — Creació de *index.html*  
  - **Xavier** — Creació de *contingut.html*  
  - **Jose Luis** — Creació de *info.html* i *detall.html*
 
- **CSS**
  - **Miquel** — Creació de *style.css*, *header.css*, *footer.css*, *detall.css*
  - **Xavier** — Creació de *contingut.css*  
  - **Jose Luis** — Creació de *informacion.css* 

# Disseny Visual

- **Colors utilitzats:**  
  - Text principal de la pàgina d'inici, de la pàgina de detall i de la contingut: **blanc**  
  - Els textos de la pagina d'informació: **aliceblue**  
  - Títols de la pàgina d’informació: **negre**
- **Tipografia:**  
  - S’ha utilitzat la font **Arial** per mantenir un estil net i llegible.

# Disseny Adaptatiu (Responsive Design)

La web s’adapta correctament a diferents mides de pantalla (mòbil, tauleta i escriptori).  

- Elements que es reestructuren en columnes o files segons l’ample de pantalla.

<img width="448" height="803" alt="image" src="https://github.com/user-attachments/assets/af98deab-1970-4bff-b030-d2403be450d8" />

<img width="447" height="803" alt="image" src="https://github.com/user-attachments/assets/90812fb3-e2fc-4187-80fa-17ca03adadf5" />

- Menú i seccions que es compacten o s’empaqueten en formats més reduïts en dispositius mòbils.  

<img width="523" height="792" alt="image" src="https://github.com/user-attachments/assets/213547d9-062c-49d6-b653-0c78ab37b7c2" />

# Formularis

## Formulari de Login

## Implementació
Formulari modal que es mostra/oculta mitjançant un checkbox ocult (`#modal-toggle`) i CSS (`:checked`). En fer clic a la icona de login o al botó de tancament (×), s'alterna la visibilitat del modal mitjançant `display: flex/none`.

## Tipus d'entrada
- **`type="email"`**: Camp de correu amb validació html de format email
- **`type="password"`**: Camp de contrasenya que oculta els caràcters introduïts
- Ambdós camps són obligatoris (`required`)

## Estils i coherència visual
- **Paleta de colors**: Morat/blau (`#667eea`, `#764ba2`) 
- **Border-radius consistent**: 5px en inputs/botons, 10px al contenidor
- **Espaiat uniforme**: 20px entre grups, 12px padding en inputs
- **Transicions suaus**: 0.2s-0.3s en hover/focus per fluïdesa
- **Disseny responsive**: `width: 90%` i `max-width: 400px`

## Validació
### Email:
- Pattern: `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$` (format email vàlid, només minúscules)

### Contrasenya:
- `minlength="8"` i `maxlength="12"`
- Pattern: `[A-Za-z0-9!?-]{8,12}` (lletres, números i caràcters `!`, `?`, `-`)

La validació és del costat del client mitjançant atributs HTML5, amb feedback visual mitjançant canvi de color de la vora en `:focus`.

### Tipus d'entrada utilitzats
- **Input de text (`type="text")`** per als camps de nom i apellidos, amb restriccions de longitud i només lletres.  
- **Input de correu electrònic (`type="email")`** per validar automàticament el format de correu electrònic.  
- **Botó de tipus submit (`<button type="submit">`)** per enviar el formulari.

### Estil i coherència visual
Els camps del formulari s'han estilitzat amb **Flexbox** per garantir una disposició neta i alineada, ocupant tot l’ample disponible. Els inputs i el textarea tenen colors i bordes coherents amb els productes (`#646464` i `#808080`) i bordes arrodonits.  
El botó d'enviament reutilitza el **mateix estil que els botons dels productes**, amb efecte `hover`, per a que se vegi igual tota sa pagina. També s'han definit estats de focus.

### Control de la validació
S'ha aplicat la **validació bàsica d'HTML5** en tots els camps obligatoris:
- L'atribut `required` impedeix enviar el formulari si els camps estan buits.  
- Els inputs de text tenen `minlength`, `maxlength` i un `pattern` per restringir els caràcters admesos.  
- L'input de correu electrònic té `type="email"` per validar automàticament el format del correu.  
- El textarea té un mínim i màxim de caràcters per assegurar comentaris raonables.  

Aquesta implementació garanteix que els usuaris no puguin enviar formularis incomplets o amb dades en format incorrecte, tot mantenint una experiència visual i funcional coherent amb la web.

## JS

### Xavier: 1 - Interacció visual

- **Mode clar / Mode fosc**  
  Has de crear un botó i detectar quan l’usuari hi fa clic. Quan això passi, el que fas és canviar classes o estils del document (normalment del `body`) perquè els colors passin de clars a foscos o a l’inrevés. També pots guardar la preferència de l’usuari perquè es mantingui quan torni a entrar.

- **Efectes de ratolí**  
  Selecciones un element de la pàgina i detectes quan el ratolí entra a sobre (mouseover) i quan surt (mouseout). Quan entra, canvies algun estil (com el color, la mida o la vora), i quan surt, el tornes al seu estat original.

- **Mostrar / Ocultar**  
  Crees un botó i una secció (text o imatge). Quan l’usuari fa clic al botó, canvies la visibilitat de la secció: si està visible, l’amagues, i si està amagada, la mostres.

### Miquel: 2 - Formularis i Comentaris (Gestió de dades)

- **Validació de dades**  
  Detectes quan l’usuari intenta enviar el formulari. Abans que s’enviï, comproves si els camps estan buits. Si algun ho està, evites l’enviament i mostres un missatge d’error. Si tot està correcte, deixes que continuï el procés o el gestiones com vulguis.

- **Mur de comentaris**  
  Quan l’usuari envia el formulari, agafes el text que ha escrit i el crees com un nou element dins la pàgina (per exemple, un paràgraf o un element de llista). Després l’afegeixes a una secció visible perquè aparegui immediatament, sense necessitat de recarregar la pàgina. També pots netejar el formulari després d’afegir el comentari.
