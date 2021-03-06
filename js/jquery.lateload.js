/**
 * jQuery Late Load plugin
 * 
 * Automatically loads remote content into divs via HTML attributes
 * 
 * @author Harold Asbridge <harold@shoebacca.com>
 * @version 0.1
 */
(function($){
    $.fn.lateLoad = function(options) {
        // Default Settings
        var settings = {
            loader: '<div class="remote-data-loading"><span>Loading...</span></div>'
        };
        
        if (options) {
            $.extend(settings, options);
        }
        
        // Init elements
        return this.each(function(){
            var el = $(this);
            var url = el.attr('data-src');
            el.html(settings.loader);
            $.ajax(url, {
                success: function(data) {
                    el.html(data);
                },
                error: function(xhr, status, message) {
                    el.html('Error: ' + message);
                }
            });
        })
    };
})( jQuery );