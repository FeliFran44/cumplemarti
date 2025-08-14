# 🎵 Instrucciones para Agregar Música Personalizada

## 📁 **Opción 1: Música Local (Recomendada)**

### Pasos:
1. **Consigue tu archivo de música** (MP3, WAV, OGG)
2. **Pon el archivo en la carpeta** junto con `index.html`
3. **Cambia el nombre** en el HTML

### Ejemplo:
Si tu archivo se llama `mi-cancion-romantica.mp3`:

```html
<audio id="background-music" loop>
    <source src="mi-cancion-romantica.mp3" type="audio/mpeg">
    Tu navegador no soporta el elemento de audio.
</audio>
```

## 🌐 **Opción 2: Música de Internet**

### Enlaces directos de música:
```html
<audio id="background-music" loop>
    <source src="https://ejemplo.com/mi-musica.mp3" type="audio/mpeg">
    Tu navegador no soporta el elemento de audio.
</audio>
```

## 🎯 **Canciones Románticas Recomendadas:**

### Música libre de derechos:
- "Canon in D" - Pachelbel
- "Claire de Lune" - Debussy
- "Moonlight Sonata" - Beethoven

### Enlaces de ejemplo:
```html
<!-- Música romántica de fondo -->
<audio id="background-music" loop>
    <source src="https://www.soundjay.com/misc/sounds/romantic-piano.mp3" type="audio/mpeg">
    Tu navegador no soporta el elemento de audio.
</audio>
```

## ⚙️ **Configuración del Volumen:**

En el archivo `script.js`, línea donde dice:
```javascript
backgroundMusic.volume = 0.3;
```

Puedes cambiar el número:
- `0.1` = Muy bajo
- `0.3` = Bajo (actual)
- `0.5` = Medio
- `0.7` = Alto
- `1.0` = Máximo

## 🚫 **Si no quieres música:**

Simplemente comenta o elimina estas líneas en `script.js`:
```javascript
// Comentar estas líneas para desactivar música
// document.addEventListener('click', activateMusic);
// document.addEventListener('touchstart', activateMusic);
```

## 💡 **Consejos:**

1. **Formato recomendado**: MP3 (más compatible)
2. **Tamaño**: Archivos pequeños cargan más rápido
3. **Duración**: Canciones largas funcionan mejor con `loop`
4. **Volumen**: Mantén bajo para no molestar

## 🎵 **Ejemplos de canciones románticas populares:**

- "Perfect" - Ed Sheeran
- "All of Me" - John Legend
- "A Thousand Years" - Christina Perri
- "Can't Help Falling in Love" - Elvis Presley
- "Wonderful Tonight" - Eric Clapton

**¡Recuerda respetar los derechos de autor!**
