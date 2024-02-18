// Adobe font 指定
(function(d) {
var config = {
    kitId: 'xvo8afm',
    scriptTimeout: 3000,
    async: true
},
h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

(function (){
    sessionStorage.clear();
    // コイン枚数セッション初期化（coinNmuber）
    sessionStorage.setItem('coinNmuber', '0');
    // 前回の勝敗結果セッション初期化（lastTimeResult）
    sessionStorage.setItem('lastTimeResult', '0');
    // 前々回の勝敗結果セッション初期化（timeBeforeLastResult）
    sessionStorage.setItem('timeBeforeLastResult', '0');
    $("#selected_rock").addClass('hidden_item');
    $("#selected_paper").addClass('hidden_item');
    $("#selected_scissors").addClass('hidden_item');
})();

// 定数宣言
const WIN = 'WIN';
const LOSE = 'LOSE';
const DRAW = 'DRAW';
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SISSORS = 'SISSORS';
const DEFEAT = 'DEFEAT';
const VICTORY_STYLE = '<span style="color: #c1ab05;">VICTORY</span>';

// セッションにコインの枚数を格納する
function SetCoinNumber(winFlg){
    let coinNumber = Number(sessionStorage.getItem('coinNmuber'));
    let lastTimeResult = sessionStorage.getItem('lastTimeResult');
    let timeBeforeLastResult = sessionStorage.getItem('timeBeforeLastResult');

    // 勝った場合
    if (winFlg == 1) {
        // 2回連続で勝った場合
        if (lastTimeResult == WIN) {
            // コイン枚数を2枚増やす
            sessionStorage.setItem('coinNmuber', String(coinNumber + 2));
            $("#conti_result").html('2 WINS in a row!');
        }
        else {
            // コイン枚数を1枚増やす
            sessionStorage.setItem('coinNmuber', String(coinNumber + 1));
            $("#conti_result").html('');
        }
        // コインを15枚以上格納できないようにする
        if (coinNumber > 15) {
            sessionStorage.setItem('coinNmuber', '15');
        }
    }
    // 負けた場合
    else if (winFlg == 2) {
        if (coinNumber != 0) {
            // コイン枚数を1枚減らす
            sessionStorage.setItem('coinNmuber', String(coinNumber - 1));
        }
        // 3回連続で負けた場合
        if (lastTimeResult == LOSE && timeBeforeLastResult == LOSE) {
            // セッション初期化
            sessionStorage.setItem('coinNmuber', '0');
            sessionStorage.setItem('lastTimeResult', '0');
            sessionStorage.setItem('timeBeforeLastResult', '0');
            // ゲームオーバーモーダル
            $('#gameOverModal').fadeIn();
            $("#opponent_card").html('');
            $("#judgment").html('');
            $("#conti_result").html('');
            $("#selected_rock").addClass('hidden_item');
            $("#selected_paper").addClass('hidden_item');
            $("#selected_scissors").addClass('hidden_item');
        }
        // 2回連続で負けた場合
        else if (lastTimeResult == LOSE) {
            $("#conti_result").html('2 LOSES in a row.');
        }
        else {
            $("#conti_result").html('');
        }
    }
    // 引き分けの場合
    else if (winFlg == 3) {
        $("#conti_result").html('');
    }
}

// セッションに勝敗結果を格納する
function SetLastTimeResult(winFlg){
    let lastTimeResult = sessionStorage.getItem('lastTimeResult');
    // 前々回の勝敗結果に格納
    sessionStorage.setItem('timeBeforeLastResult', lastTimeResult);

    // 勝った場合
    if (winFlg == 1) {
        sessionStorage.setItem('lastTimeResult', WIN);
    }
    // 負けた場合
    else if (winFlg == 2) {
        sessionStorage.setItem('lastTimeResult', LOSE);
    }
    // 引き分けた場合
    else if (winFlg == 3) {
        sessionStorage.setItem('lastTimeResult', DRAW);
    }
}

// コインを画面に表示する
function DisplayCoins(){
    // コイン枚数表示
    let coinNumber = sessionStorage.getItem('coinNmuber');
    if (coinNumber != null) {
        $("#coin_number").html(coinNumber + ' COINS');
    }

    // コイン表示初期化
    for (let i = 1; i < 16; i++) {
        $("#cell" + i).addClass('hidden_item');
    }

    // removeClass
    if (Number(coinNumber) == 1) {
        $("#cell1").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 2) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 3) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
        $("#cell3").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 4) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
        $("#cell3").removeClass('hidden_item');
        $("#cell4").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 5) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
        $("#cell3").removeClass('hidden_item');
        $("#cell4").removeClass('hidden_item');
        $("#cell5").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 6) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
        $("#cell3").removeClass('hidden_item');
        $("#cell4").removeClass('hidden_item');
        $("#cell5").removeClass('hidden_item');
        $("#cell6").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 7) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
        $("#cell3").removeClass('hidden_item');
        $("#cell4").removeClass('hidden_item');
        $("#cell5").removeClass('hidden_item');
        $("#cell6").removeClass('hidden_item');
        $("#cell7").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 8) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
        $("#cell3").removeClass('hidden_item');
        $("#cell4").removeClass('hidden_item');
        $("#cell5").removeClass('hidden_item');
        $("#cell6").removeClass('hidden_item');
        $("#cell7").removeClass('hidden_item');
        $("#cell8").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 9) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
        $("#cell3").removeClass('hidden_item');
        $("#cell4").removeClass('hidden_item');
        $("#cell5").removeClass('hidden_item');
        $("#cell6").removeClass('hidden_item');
        $("#cell7").removeClass('hidden_item');
        $("#cell8").removeClass('hidden_item');
        $("#cell9").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 10) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
        $("#cell3").removeClass('hidden_item');
        $("#cell4").removeClass('hidden_item');
        $("#cell5").removeClass('hidden_item');
        $("#cell6").removeClass('hidden_item');
        $("#cell7").removeClass('hidden_item');
        $("#cell8").removeClass('hidden_item');
        $("#cell9").removeClass('hidden_item');
        $("#cell10").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 11) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
        $("#cell3").removeClass('hidden_item');
        $("#cell4").removeClass('hidden_item');
        $("#cell5").removeClass('hidden_item');
        $("#cell6").removeClass('hidden_item');
        $("#cell7").removeClass('hidden_item');
        $("#cell8").removeClass('hidden_item');
        $("#cell9").removeClass('hidden_item');
        $("#cell10").removeClass('hidden_item');
        $("#cell11").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 12) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
        $("#cell3").removeClass('hidden_item');
        $("#cell4").removeClass('hidden_item');
        $("#cell5").removeClass('hidden_item');
        $("#cell6").removeClass('hidden_item');
        $("#cell7").removeClass('hidden_item');
        $("#cell8").removeClass('hidden_item');
        $("#cell9").removeClass('hidden_item');
        $("#cell10").removeClass('hidden_item');
        $("#cell11").removeClass('hidden_item');
        $("#cell12").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 13) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
        $("#cell3").removeClass('hidden_item');
        $("#cell4").removeClass('hidden_item');
        $("#cell5").removeClass('hidden_item');
        $("#cell6").removeClass('hidden_item');
        $("#cell7").removeClass('hidden_item');
        $("#cell8").removeClass('hidden_item');
        $("#cell9").removeClass('hidden_item');
        $("#cell10").removeClass('hidden_item');
        $("#cell11").removeClass('hidden_item');
        $("#cell12").removeClass('hidden_item');
        $("#cell13").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 14) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
        $("#cell3").removeClass('hidden_item');
        $("#cell4").removeClass('hidden_item');
        $("#cell5").removeClass('hidden_item');
        $("#cell6").removeClass('hidden_item');
        $("#cell7").removeClass('hidden_item');
        $("#cell8").removeClass('hidden_item');
        $("#cell9").removeClass('hidden_item');
        $("#cell10").removeClass('hidden_item');
        $("#cell11").removeClass('hidden_item');
        $("#cell12").removeClass('hidden_item');
        $("#cell13").removeClass('hidden_item');
        $("#cell14").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 15) {
        $("#cell1").removeClass('hidden_item');
        $("#cell2").removeClass('hidden_item');
        $("#cell3").removeClass('hidden_item');
        $("#cell4").removeClass('hidden_item');
        $("#cell5").removeClass('hidden_item');
        $("#cell6").removeClass('hidden_item');
        $("#cell7").removeClass('hidden_item');
        $("#cell8").removeClass('hidden_item');
        $("#cell9").removeClass('hidden_item');
        $("#cell10").removeClass('hidden_item');
        $("#cell11").removeClass('hidden_item');
        $("#cell12").removeClass('hidden_item');
        $("#cell13").removeClass('hidden_item');
        $("#cell14").removeClass('hidden_item');
        $("#cell15").removeClass('hidden_item');
    }
}

// コイン枚数が15枚以上の場合、モーダルを表示
function SetGameClearAnimation(){
    let coinNumber = Number(sessionStorage.getItem('coinNmuber'));
    if (coinNumber >= 15) {
        // ゲームクリアモーダル
        $('#gameClearedModal').fadeIn();
        // セッション初期化
        sessionStorage.setItem('coinNmuber', '0');
        sessionStorage.setItem('lastTimeResult', '0');
        sessionStorage.setItem('timeBeforeLastResult', '0');
        $("#opponent_card").html('');
        $("#judgment").html('');
        $("#selected_rock").addClass('hidden_item');
        $("#selected_paper").addClass('hidden_item');
        $("#selected_scissors").addClass('hidden_item');
    } 
}

// 岩カード選択
function rockCardClick() {
    // 選択マーク表示
    $("#selected_rock").removeClass('hidden_item');
    $("#selected_paper").addClass('hidden_item');
    $("#selected_scissors").addClass('hidden_item');

    let num = Math.ceil(Math.random() * 3);
    let winFlg;

    if (num === 1) {
        $("#opponent_card").text(ROCK);
        $("#judgment").text(DRAW);
        // 引き分けフラグ：3
        winFlg = 3;
        SetCoinNumber(winFlg);
        SetLastTimeResult(winFlg);
    }
    else if (num === 2) {
        $("#opponent_card").text(SISSORS);
        $("#judgment").html(VICTORY_STYLE);
        // 勝ちフラグ：1
        winFlg = 1;
        SetCoinNumber(winFlg);
        SetLastTimeResult(winFlg);
    }
    else {
        $("#opponent_card").text(PAPER);
        $("#judgment").text(DEFEAT);
        // 負けフラグ：2
        winFlg = 2;
        SetCoinNumber(winFlg);
        SetLastTimeResult(winFlg);
    }
    DisplayCoins();
    SetGameClearAnimation();
}

// 紙カード選択
function paperCardClick(){
    // 選択マーク表示
    $("#selected_rock").addClass('hidden_item');
    $("#selected_paper").removeClass('hidden_item');
    $("#selected_scissors").addClass('hidden_item');

    let num = Math.ceil(Math.random() * 3);
    let winFlg;

    if (num === 1) {
        $("#opponent_card").text(ROCK);
        $("#judgment").html(VICTORY_STYLE);
        // 勝ちフラグ：1
        winFlg = 1;
        SetCoinNumber(winFlg);
        SetLastTimeResult(winFlg);
    }
    else if (num === 2) {
        $("#opponent_card").text(SISSORS);
        $("#judgment").text(DEFEAT);
        // 負けフラグ：2
        winFlg = 2;
        SetCoinNumber(winFlg);
        SetLastTimeResult(winFlg);
    }
    else {
        $("#opponent_card").text(PAPER);
        $("#judgment").text(DRAW);
        // 引き分けフラグ：3
        winFlg = 3;
        SetCoinNumber(winFlg);
        SetLastTimeResult(winFlg);
    }
    DisplayCoins();
    SetGameClearAnimation();
}

// ハサミカード選択
function sissorsCardClick(){
    // 選択マーク表示
    $("#selected_rock").addClass('hidden_item');
    $("#selected_paper").addClass('hidden_item');
    $("#selected_scissors").removeClass('hidden_item');

    let num = Math.ceil(Math.random() * 3);
    let winFlg;

    if (num === 1) {
        $("#opponent_card").text(ROCK);
        $("#judgment").text(DEFEAT);
        // 負けフラグ：2
        winFlg = 2;
        SetCoinNumber(winFlg);
        SetLastTimeResult(winFlg);
    }
    else if (num === 2) {
        $("#opponent_card").text(SISSORS);
        $("#judgment").text(DRAW);
        // 引き分けフラグ：3
        winFlg = 3;
        SetCoinNumber(winFlg);
        SetLastTimeResult(winFlg);
    }
    else {
        $("#opponent_card").text(PAPER);
        $("#judgment").html(VICTORY_STYLE);
        // 勝ちフラグ：1
        winFlg = 1;
        SetCoinNumber(winFlg);
        SetLastTimeResult(winFlg);
    }
    DisplayCoins();
    SetGameClearAnimation();
}