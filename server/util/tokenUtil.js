const jwt = require('jwt-simple');

exports.createToken = function(request, response, user_id){
  let payload = {'user_id': user_id}
    , secret = 'mavmeerzrule'
    , token = jwt.encode(payload, secret);
  response.set('token', token).status(201).json({token: token});
};

exports.getUserIDFromToken = function(token){
  let secret       = 'mavmeerzrule'
    , decodedToken =  null
    , userID       =  null;

  if (token) {
    decodedToken = jwt.decode(token, secret);
    userID = decodedToken.user_id;
  }
  return userID;
};
