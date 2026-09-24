/* Dissuasão de cópia/impressão. Não é uma proteção real: qualquer pessoa
   com "Exibir código-fonte", JavaScript desativado ou impressão em PDF pelo
   menu do navegador consegue contornar isto. Serve apenas para evitar a
   cópia casual pela maioria dos visitantes. */
(function () {
  function bloquear(e) {
    e.preventDefault();
    return false;
  }

  document.addEventListener('contextmenu', bloquear);
  document.addEventListener('copy', bloquear);
  document.addEventListener('cut', bloquear);
  document.addEventListener('selectstart', bloquear);
  document.addEventListener('dragstart', bloquear);

  document.addEventListener('keydown', function (e) {
    var tecla = (e.key || '').toLowerCase();
    var comCtrl = e.ctrlKey || e.metaKey;

    if (comCtrl && ['c', 'x', 'a', 'p', 's', 'u'].indexOf(tecla) !== -1) {
      bloquear(e);
    }
    if (e.key === 'F12') {
      bloquear(e);
    }
    if (comCtrl && e.shiftKey && ['i', 'j', 'c'].indexOf(tecla) !== -1) {
      bloquear(e);
    }
  });
})();
