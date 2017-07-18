myApp.controller('mainController', ['$http', 'GithubAPI', function($http, GithubAPI){
    console.log('mainController loaded');
    var vm = this;

    GithubAPI.githubProfile().then(function(response){
        vm.profile = response;
        console.log('vm.profile:', vm.profile);
    }); // end githubProfile

    $http({
        method: 'GET',
        url: '/blog'
    }).then(function(response) {
        console.log('get blog:', response);
        vm.blogPosts = response.data;
    }); // end GET blog
    
}]); // end mainController