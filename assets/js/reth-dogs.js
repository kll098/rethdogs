  var main = function () {
            "use strict";

            $('.btn-group li').on("click", function () {
                $('.btn-group li').removeClass("solid");
                $(this).addClass("solid");

                var data = $(this).data('content');
               
                var contentClass = $("." + data);

                $('.pension').addClass("hidden");
                contentClass.removeClass("hidden");

            })
        };

        $("document").ready(main);