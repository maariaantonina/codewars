function domainName(url) {
  if (url.indexOf('www.') > -1) {
    return url.split('.')[1];
  } else {
    if (url.indexOf('http://') > -1 || url.indexOf('https://') > -1) {
      return url.split('/')[2].split('.')[0];
    } else {
      return url.split('.')[0];
    }
  }
}
