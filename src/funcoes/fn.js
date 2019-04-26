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

export const getDataRelativa = function(data) {
    let d = moment(data);
    let hoje = moment(new Date());
    let diferenca = hoje.diff(d, 'days');

    if ( diferenca === 0) {
        return d.format('[Hoje às] HH:mm')
    } else if ( diferenca === 1) {
        return d.format('[Ontem às] HH:mm')
    } else if ( diferenca < 180) {
        return d.format('[Em] DD [de] MMM');
    } else {
        return d.format('[Em] DD/MM/YYYY');
    }
}