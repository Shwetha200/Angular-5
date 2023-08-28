// signup.controller.js
angular.module('MenuApp')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuDataService', '$http'];
function SignUpController(MenuDataService, $http) {
    var signUpCtrl = this;
    signUpCtrl.user = {};
    signUpCtrl.invalidFavoriteMenuItem = false;
    signUpCtrl.submissionMessage = '';

    signUpCtrl.checkFavoriteMenuItem = function() {
        var menuNumber = signUpCtrl.user.favoriteMenuItem;
        $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json')
            .then(function(response) {
                if (!response.data || !response.data[menuNumber]) {
                    signUpCtrl.invalidFavoriteMenuItem = true;
                } else {
                    signUpCtrl.invalidFavoriteMenuItem = false;
                }
            });
    };

    signUpCtrl.submitForm = function() {
        // Process form submission, save user info
        signUpCtrl.submissionMessage = 'Your information has been saved.';
    };
}
