myApp.controller('codeController', ['$http', 'GithubAPI', function($http, GithubAPI){
    console.log('codeController loaded');
    var vm = this;
    vm.code = GithubAPI.githubRepos();
    console.log('vm.code:', vm.code)
    
}]); // end codeController