myApp.service('GithubAPI', function($http) {

  //Call to Github API to fetch user's profile info
  this.githubProfile = function(){

    return $http({
      method: 'GET',
      url: '/profile'
    }).then(function(response) {
      console.log(response.data);
      return response.data;
    }); // end GET

  }; // end githubProfile

  //Call to Github API to fetch list of user's repos
  this.githubRepos = function(){

    return $http({
      method: 'GET',
      url: '/repos'
    }).then(function(response) {
      console.log(response.data);
      return response.data;
    }); // end GET

  }; // end githubRepos

}); // end GithubApi
