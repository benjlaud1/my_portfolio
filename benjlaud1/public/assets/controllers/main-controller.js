myApp.controller('mainController', ['$http', 'GithubAPI', function($http, GithubAPI){
    console.log('mainController loaded');
    var vm = this;

    GithubAPI.githubProfile().then(function(response){
        vm.profile = response;
        console.log('vm.profile:', vm.profile);
    }); // end githubProfile
    
}]); // end mainController