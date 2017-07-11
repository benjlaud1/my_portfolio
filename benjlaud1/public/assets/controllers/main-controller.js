myApp.controller('mainController', ['$http', 'GithubAPI', function($http, GithubAPI){
    console.log('mainController loaded');
    var vm = this;

    vm.profile = GithubAPI.githubProfile();
    console.log('vm.profile:', vm.profile);
    
}]); // end mainController