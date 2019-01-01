# Authentication Service
This is the central authentication service for Photowatch. We can obtain a token from logging in against the authentication api and we can verify a token against the api.

## Getting a token
We can get an authentication token by hitting the `/authentication` endpoint with basic auth. 

```bash
curl -u username:password api_endpoint/authentication
```

## Verifying a token
We can verify a token by hitting the `/verify` endpoint with the token provided in the `X-Auth-Token` header field.

```bash
curl --header "X-Auth-Token: <auth_token>" api_endpoint/verify
```