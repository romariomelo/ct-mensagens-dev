export const lerMais = function(str, tamanho = 50) {
    if (str.length <= tamanho) {
        return str;
    } else if (str.length > tamanho) {
        while ( str[tamanho] !== ' ' ) {
            tamanho += 1;
        }
        return str.substring(0, tamanho) + '... Ler mais.';
    }
}