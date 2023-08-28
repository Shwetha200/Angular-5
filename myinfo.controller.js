// myinfo.controller.js
angular.module('MenuApp')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService'];
function MyInfoController(UserService) {
    var myInfoCtrl = this;
    myInfoCtrl.userInfo = UserService.getUserInfo();
}
