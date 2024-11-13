var number = 1; // 問題数
var miss = 5; // 不正解

$(".question, .form, .answer, h2, h3, .judge, .reload").hide();

// 問題一覧
var questions = [
    ["「ニンテンドーDS」発売", "2004"],
    ["「ドラえもん」の声優が一新","2005"],
    ["ソフトバンクがボーダフォンを買収","2006"],
    ["電子マネー「nanaco」開始","2007"],
    ["そばにいるね（青山テルマ）","2008"],
    ["1Q84（村上春樹）発売", "2009"],
    ["お・も・て・な・し", "2013"],
    ["STAP細胞はあります！", "2014"],
    ["国立競技場　ザハ案の廃止","2015"],
    ["PPAP（ピコ太郎）","2016"],
    ["旅行会社「てるみくらぶ」が倒産","2017"],
    ["日大アメフト部の「危険タックル」","2018"],
    ["消費税が「10％」になる", "2019"],
    ["PlayStation5　発売", "2020"],
    ["うっせぇわ（Ado）", "2021"],
    ["三苫の1mm", "2022"],
    ["「猫ミーム」がちょっと流行る", "2023"],
];

/* スタートボタンを押したときのアクション */
$(".start-button").on("click", function () {
    $(".question, .form, .answer, h2, h3").show();
    $(".start-button").hide();
    $("h2").html("第" + number + "問");

    /* 問題文を表示 */
    var random = Math.floor(Math.random() * questions.length);
    $(".question").html(questions[random][0]);
    $(".heart").html(miss);
    console.log("問題の正解 = " + questions[random][1])

    /* 回答ボタンを押したときのアクション */
    $(".answer-button").on("click", function () {
        $(".question, .form, h2").show();
        $(".answer").html("回答");

    /* 回答内容を送信 */
    const ansYear = $("#y-1").val() + $("#y-2").val() + $("#y-3").val() + $("#y-4").val();
    console.log("あなたの回答 = " + ansYear)

    /* 正誤判定 */
    if (ansYear === questions[random][1]) {
    console.log("正解！！")
    console.log("-----------")
    random = Math.floor(Math.random() * questions.length);
    $(".question").html(questions[random][0]);
    console.log("問題の正解 = " + questions[random][1])
    $(".judge").hide();
        /* 正解したら次の問題へ…… */
        number++;
        $("h2").html("第" + number + "問");
    } else {
    console.log("不正解")
    console.log("-----------")
    console.log("問題の正解 = " + questions[random][1])
    miss--;
    $(".heart").html(miss);
    console.log(miss)    
    $(".judge").fadeOut();
    $(".judge").fadeIn();

        /* ５問ミスで終了！ */
        if (miss == 0) {
        $(".start-button, .form, .answer, h2, h3").hide();
        $(".judge").fadeOut();
        $(".reload").show();
        $(".question").html("クリアならず。残念！");
        }
    }
    });
});

$(".reload-button").on("click", function () {
    location.reload();
});