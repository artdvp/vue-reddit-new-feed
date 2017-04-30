
install node http-server

```
npm install http-server -g

use

http-server [path] [option]
```

```
Option

-p Port to use (defaults to 8080)
-a Address to use (defaults to 0.0.0.0)
-d Show directory listings (defaults to 'True')
-i Display autoIndex (defaults to 'True')
-e or --ext Default file extension if none supplied (defaults to 'html')
-s or --silent Suppress log messages from output
--cors Enable CORS via the Access-Control-Allow-Origin header
-o Open browser window after starting the server
-c Set cache time (in seconds) for cache-control max-age header, e.g. -c10 for 10 seconds (defaults to '3600'). To disable caching, use -c-1.
-U or --utc Use UTC time format in log messages.
-P or --proxy Proxies all requests which can't be resolved locally to the given url. e.g.: -P http://someurl.com
-S or --ssl Enable https.
-C or --cert Path to ssl cert file (default: cert.pem).
-K or --key Path to ssl key file (default: key.pem).
-r or --robots Provide a /robots.txt (whose content defaults to 'User-agent: *\nDisallow: /')
-h or --help Print this list and exit.
```
