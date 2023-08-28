// user.service.js
angular.module('MenuApp')
.service('UserService', UserService);

function UserService() {
    var service = this;
    var userInfo = null;

    service.saveUserInfo = function(user) {
        userInfo = user;
    };

    service.getUserInfo = function() {
        return userInfo;
    };
}
