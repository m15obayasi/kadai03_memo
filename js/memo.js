var number = 1; // 問題数

// $(".question").hide();
// $(".form").hide();
// $("h2").hide();

// １つ目の要素だけ取り出したい……。
var questions = [
    ["AAAA","0"],
    ["BBBB","0"]
];

/* スタートを押したときのアクション */
$(".answer-button").on("click", function () {
    $(".question").show();
    $(".form").show();
    $("h2").show();
    $(".answer").html("回答");
    var random = Math.floor(Math.random()*questions.length);
    $(".question").html(questions[random]);
});

/* 入力した「年」を取得 */
$(".answer-button").on("click", function () {
    const year1 = $("#y-1").val();
    const year2 = $("#y-2").val();
    const year3 = $("#y-3").val();
    const year4 = $("#y-4").val();
    const yearAll = year1 + year2 + year3 + year4;
    console.log(yearAll)
});

// 問題数を表示
$(".answer-button").click(function () {
    var noq = number ++;
    $("h2").html("第" + noq + "問");
});