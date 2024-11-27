// vite.config.js
export default {
    // config options
    root: '.', // especificamos la carpeta donde esta nuestro index.html
    server: {
        port: 8888,
        strictPort: true,
        host: '0.0.0.0', // Exponemos el servidor para que sea accesible en la red
        watch: {
            usePolling: true, // Activamos el polling para detectar cambios automáticamente
        },
    },
    build:{
        outDir: '../dist',
        emptyOutDir: true,
    }
}

