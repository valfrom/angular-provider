/**
 * server.js
 *
 * Author: Ivanov Valerii
 * Date: 03/23/2015
 *
 */

var port = process.env.PORT || 3000;

var server = new (require('http-server').HTTP_SERVER);

server.startWithHostAndPort('localhost', port);

