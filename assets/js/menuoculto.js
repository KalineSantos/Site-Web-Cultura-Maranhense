$('.biblio-teca').click(function(){
    $('.menuLateral ul .itens__biblioteca').toggleClass('mostra');
});
$('.botaoAbre').click(function(){
    $('.menuLateral').toggleClass('mostra');
});
$('.botaoFecha').click(function(){
    $('.menuLateral').toggleClass('mostra');
});
$('.biblio-teca').mouseover(function(){
    $('.menuLateral ul .seta').toggleClass('gira');
});
$('.biblio-teca').mouseout(function(){
    $('.menuLateral ul .seta').toggleClass('gira');
});

const $menuLateral = $('.menuLateral');
$(document).mouseup(e=> {
    if(!$menuLateral.is(e.target)
        && $menuLateral.has(e.target).length === 0)
    {
        $menuLateral.removeClass('mostra');
    }
});