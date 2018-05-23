
(function ($) {
    $.fn.wmTab = function( tabArr ){
        var mainClass = $(this).attr('class').split(" ")[0];
        var itemNum =  $('.' + mainClass + ' .wm-tab-nav-item').length;
        var itemWidth = $('.' + mainClass + ' .wm-tab-box').width();
        var index = 0;

        $('.' + mainClass + ' .wm-tab-nav-item:nth-child(1)').addClass('wm-nav-active');

        for (var i = 1; i <= itemNum; i++){
            $( '.' + mainClass + ' .wm-tab-nav-item:nth-child(' + i + ')' ).attr('data', i);
        }

        $('.' + mainClass + ' .wm-tab-view').css("width", itemWidth * itemNum + "px");
        $('.' + mainClass + ' .wm-tab-item').css("width", itemWidth);

        $('.' + mainClass + ' .wm-tab-nav-item').click(function(){
            $(this).addClass('wm-nav-active').siblings('.wm-tab-nav-item').removeClass('wm-nav-active');
            index = $(this).attr('data') - 1;
            $('.' + mainClass + ' .wm-tab-view').css('margin-left', -(index * itemWidth));
        });
    }
})(window.jQuery)
