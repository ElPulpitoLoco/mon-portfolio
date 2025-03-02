//JavaScript pour empecher le click droit
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'PrintScreen') {
        alert('La capture d\'écran est désactivée.');
        e.preventDefault();
    }
});