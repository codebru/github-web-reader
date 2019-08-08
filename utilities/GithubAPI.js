import Marked from 'marked';
import Fetch from 'isomorphic-unfetch';

const HOUR = 1000 * 60 * 60;
const dirCache = [];
const pageCache = [];

function checkCache(cache, path) {
  let entry = null;
  let index = 0;
  let foundIndex = null;
  let found = false;

  for (index = 0, found = false; index < cache.length && found === false; index += 1) {
    if (cache[index].path === path) {
      entry = cache[index];
      found = true;
      foundIndex = index;
    }
  }

  if (!entry) {
    return false;
  }
  if (entry.timestamp + HOUR < Date.now()) {
    cache.splice(foundIndex, 1); // Remove entry
    return false;
  }
  return entry.data;
}

function addCache(cache, path, data) {
  cache.push({ path, data, timestamp: Date.now() });
}

async function getPage(path) {
  const cacheResponse = checkCache(pageCache, path);
  if (cacheResponse) {
    return cacheResponse;
  }
  // Using the raw access rather than API due to the rate limiting
  const uri = `https://raw.githubusercontent.com/codebru/markdown-test-repo/master/${path}`;
  const res = await Fetch(uri);
  const data = await res.text();
  if (String(data) === '404: Not Found\n') {
    return false;
  }
  const contentMd = data;
  const contentHTML = Marked(contentMd);
  addCache(pageCache, path, contentHTML);
  return contentHTML;
}

async function getDirectory(path) {
  try {
    const cacheResponse = checkCache(dirCache, path);
    if (cacheResponse) {
      return cacheResponse;
    }
    const uri = `https://api.github.com/repos/codebru/markdown-test-repo/contents/${path}`;
    const res = await Fetch(uri);
    const data = await res.json();
    if (!data || !Array.isArray(data) || !Object.prototype.hasOwnProperty.call(data[0], 'path')) {
      throw new Error('Failed to fetch tree.');
    }
    const pathArray = data.map(entry => entry.path);
    addCache(dirCache, path, pathArray);
    return pathArray;
  } catch (e) {
    return `Unable to get data: ${e}`;
  }
}

export { getPage, getDirectory };
