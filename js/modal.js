// ゲームルールモーダル
$(function () {
    $('#openGameRulesModal').click(function(){
        $('#gameRulesModal').fadeIn();
    });
    $('#closeGameRulesModal , #modalBg1').click(function(){
        $('#gameRulesModal').fadeOut();
    });
});

// ゲームオーバーモーダル
$(function () {
    $('#closeGameOverModal , #modalBg2').click(function(){
        $('#gameOverModal').fadeOut();
    });
});

// ゲームクリアモーダル
$(function () {
    $('#closeGameClearedModal , #modalBg3').click(function(){
        $('#gameClearedModal').fadeOut();
    });
});