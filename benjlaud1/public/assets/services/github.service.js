myApp.service('GithubAPI', function($http) {
  //Enter your token and username here:
  var oauthToken = process.env.GITHUB_OAUTH_TOKEN;
  var username = process.env.GITHUB_USERNAME;

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
