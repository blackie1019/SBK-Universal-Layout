(function($) {

    jQuery(document).ready(function() {

        Panel.init();

        $(document).on('click', '.tab-controller', function() {
             Panel.togglePanel();
        });

    });

    var Panel = {
        isVisible : true,
        showMessage : null,
        hideMessage : null,
        animationDuration : 100,
        animationEasing : 'linear',

        init : function() {
            this.hidePanel();
        },

        hidePanel : function() {
            $('.panel-wrapper').animate({
                bottom : -(Panel.getAnimationOffset())
            }, Panel.animationDuration, Panel.animationEasing, function() {
                Panel.isVisible = false;
            });
        },

        showPanel : function() {
            $('.panel-wrapper').animate({
                bottom : 0
            }, Panel.animationDuration, Panel.animationEasing, function() {
                Panel.isVisible = true;
            });
        },

        togglePanel : function() {
            ((this.isVisible) ? this.hidePanel : this.showPanel)();
        },


        getAnimationOffset : function() {
            return $('.panel-content').height();
        }

    }

})(jQuery);