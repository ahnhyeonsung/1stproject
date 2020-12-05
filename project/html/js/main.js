$(function () {
    $(document).ready(function () {
        $(".notice-area h4").click()
    });
    $(document).ready(function () {
        $(".time-desc h4").click()
    });
    $(".notice-wrap h4").click(function () {
        $(".notice-wrap ul").stop().hide()
        $(this).next().stop().show()
    });
    $(".notice-area h4").click(function () {
        $(this).stop().css({
            'color': '#555'
        })
        $(this).stop().css({
            'border-bottom': '3px solid #ff8f2e'
        });
        $(".employ-area h4").stop().css({
            'border-bottom': '0px solid #ffffff'
        });
        $(".employ-area h4").stop().css({
            'color': '#bbb'
        });
    });
    $(".employ-area h4").click(function () {
        $(this).stop().css({
            'color': '#555'
        })
        $(this).stop().css({
            'border-bottom': '3px solid #ff8f2e'
        });
        $(".notice-area h4").stop().css({
            'border-bottom': '0px solid #ffffff'
        });
        $(".notice-area h4").stop().css({
            'color': '#bbb'
        })
    });
    $(".notice-area h4").click(function () {
        $(".employ-area>a").stop().hide()
        $(".notice-area>a").stop().show()
    });
    $(".employ-area h4").click(function () {
        $(".notice-area>a").stop().hide()
        $(".employ-area>a").stop().show()
    });
    $(".rest-desc h4").click(function () {
        $(".time-desc ul").stop().hide()
        $(this).next().stop().show()
    });
    $(".time-desc h4").click(function () {
        $(".rest-desc ul").stop().hide()
        $(this).next().stop().show()
    });
    $(".time-desc h4").click(function () {
        $(this).stop().css({
            'color': '#555'
        })
        $(this).stop().css({
            'border-bottom': '3px solid #ff8f2e'
        });
        $(".rest-desc h4").stop().css({
            'border-bottom': '0px solid #ffffff'
        });
        $(".rest-desc h4").stop().css({
            'color': '#bbb'
        });
    });
    $(".rest-desc h4").click(function () {
        $(this).stop().css({
            'color': '#555'
        })
        $(this).stop().css({
            'border-bottom': '3px solid #ff8f2e'
        });
        $(".time-desc h4").stop().css({
            'border-bottom': '0px solid #ffffff'
        });
        $(".time-desc h4").stop().css({
            'color': '#bbb'
        })
    });
})
