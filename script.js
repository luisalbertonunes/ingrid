/*
 <!--
 * [...]:
 * -----------------------------------------------
 * @author: LUIS ALBERTO NUNES 
 * @version: 1.0.0, 15/11/2017
 * @linguage: HTML, CSS, JAVASRCIPT
 * -----------------------------------------------
 * Feito especialmente para a Ingrid Xavier <3
-->

*/

(function() {

    var heart = document.querySelector('.heart-container');
    var parts = document.querySelectorAll('.heart');
    var campo = document.querySelector('#nome');
    var nome = '';
    var fundo = document.querySelector('.fundo');
    var frase = document.querySelector('.frase');

    var animar = function animar() {
        nome = campo.value.toString().toLowerCase();
        switch (nome) {
            case 'ingrid':
                fundo.style.background = "#FAAAC6";
                frase.style.display = 'block';
                Array.prototype.forEach.call(parts, function(part) {
                    part.style.WebkitTransition = 'background 0.5s';
                    part.style.MozTransition = 'background 0.5s';
                    part.style.background = '#FF3F3F';
                });
                heart.className = 'heart-container heart-animate-fast';
                break;
            default:
                Array.prototype.forEach.call(parts, function(part) {
                    part.style.WebkitTransition = 'background 0.5s';
                    part.style.MozTransition = 'background 0.5s';
                    part.style.background = '#CCC';
                });
                heart.className = 'heart-container';
                fundo.style.background = "#263238";
                frase.style.display = 'none';
        }
    }

    campo.addEventListener('keyup', animar);
    campo.addEventListener('paste', animar);

}());