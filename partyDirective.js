angular.module('myApp')
.directive('partyTime', function() {
    function startTheParty() {
        var colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow'];
        return colors[Math.floor(Math.random() * colors.length)]
    }
    return {
        restrict: 'AE',
        template: '<div>Start the party</div>',
        link: function(scope, element, attributes) {
            element.on('click', function() {
                setInterval(function() {
                    element.children().css('background-color', startTheParty());
                }, 3000)
            })
        }
    }
})