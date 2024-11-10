$(".question").hide();
$(".form").hide();

/* スタートを押したときのアクション */
$(".answer-button").on("click", function () {
    $(".question").show();
    $(".form").show();
    $(".answer").html("回答");
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

