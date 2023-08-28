// routes.js
// ...
.state('signup', {
    url: '/signup',
    templateUrl: 'signup.template.html',
    controller: 'SignUpController as signUpCtrl'
})
.state('myinfo', {
    url: '/myinfo',
    templateUrl: 'myinfo.template.html',
    controller: 'MyInfoController as myInfoCtrl'
});
// ...
