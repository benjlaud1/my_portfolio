myApp.service('GithubAPI', function($http) {
  //Enter your token and username here:
  var oauthToken = 'b3c47d02506afd94a76d60c618a52b512f1bc115'; // b3c47d02506afd94a76d60c618a52b512f1bc115
  var username = 'benjlaud1';

  //Call to Github API to fetch user's profile info
  this.githubProfile = function(){

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username,
      headers: {
        'Authorization': 'token '+ oauthToken}
      }
    ).then(function(response) {
      console.log(response.data);
      return response.data;
    }); // end GET

  }; // end githubProfile

  //Call to Github API to fetch list of user's repos
  this.githubRepos = function(){

    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/' + username + '/repos',
      headers: {
        'Authorization': 'token '+ oauthToken}
      }
    ).then(function(response) {
      console.log(response.data);
      return response.data;
    }); // end GET

  }; // end githubRepos

}); // end GithubApi
