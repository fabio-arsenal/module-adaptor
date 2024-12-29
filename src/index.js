import join from 'url-join';
import mime from 'mime';

export const urlJoin = (args) => join(...args);
export const getMimeType = (path) => mime.getType(path);
