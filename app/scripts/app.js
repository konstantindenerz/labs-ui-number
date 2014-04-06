(function(scope){
  scope.labs = scope.labs || {};
  scope.labs.ui = scope.labs.ui || {};
  scope.labs.ui.number = {
    init: function(containerSelector){
      var $container = $(containerSelector);
      if($container && $container.animate){
        $container.animate({value:100},{
          easing: 'easeOutQuad',
          duration: 1500,
          step: function(now, tween){
            var $self = $(this);
            var value = parseInt($self.attr('data-value'));
            var newValue = parseInt(now * value / 100);
            $self.text(newValue);

          }
        });

      }
    }
  };

})(window)
