document.addEventListener('DOMContentLoaded', init, false);

function init() {

    if ('serviceWorker' in navigator && navigator.onLine) {

        navigator.serviceWorker.register('https://muhammad-ilman.github.io/pwa/service-worker.js')

        .then((reg) => {

            console.log('Registrasi service worker Berhasil', reg);

        }, (err) => {

            console.error('Registrasi service worker Gagal', err);

        });

    }

}
