const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// authentication middleware will check access token in
// authorization headers of a request
// Will verify access token against Auth0 JSON web key set
// **jwksUri = "https://" + auth0 project domain + "/.well-known/jwks.json"
// **audience = auth0 Api identifier token
// **issuer = "https://" + auth0 project domain + "/"
// ** ^ the "/" at the end above is VERY IMPORTANT

// exports.checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 10,
//         jwksUri: "https://rosborn92.us.auth0.com/.well-known/jwks.json",
//     }),
//     audience: "https://rosborn92.us.auth0.com/api/v2/",
//     issuer: "https://rosborn92.us.auth0.com/",
//     algorithms: ["RS256"],
// });

exports.checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 10,
        jwksUri: "https://rosborn92.us.auth0.com/.well-known/jwks.json",
    }),
    audience: "https://rosborn92.us.auth0.com/api/v2/",
    issuer: "https://rosborn92.us.auth0.com/",
    algorithms: ["RS256"],
});
