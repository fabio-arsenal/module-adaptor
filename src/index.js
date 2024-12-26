const join = require('url-join');
const mime = require('mime');

export const urlJoin = (...args) => join(...args);
export const getMimeType = (path) => mime.getType(path);
