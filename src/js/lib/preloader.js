/**
 * Image Preloader module
 *
 * Loads Image and stores in own cache
 *
 * @usage preloader.load(url)
 * @usage preloader.load([url1, url2])
 * @usage preloader.get(url) -> Image
 *
 */

export default class Preloader {
  constructor() {
    /**
         * Internal cache
         * @type {{src: Image}}
         */
    this.images = {};
  }

  /**
     * Loads Image
     * @param {string|string[]} urls - one or several URL to prelaod
     */
  load(urls) {
    console.log('Preloader: start to load', urls);
    if (Array.isArray(urls)) {
      urls.forEach( url => {
        this.loadOne(url);
      });
    } else {
      this.loadOne(urls);
    }
  }

  /**
     * Loads single image
     * @param {string} url
     */
  loadOne(url) {
    if (this.images[url]) {
      console.log('Preloader: already loaded %o', url);
      return;
    }

    let image = new Image();

    image.src = url;

    console.time(url);

    image.onload = () => {
      console.timeEnd(url);
    };

    image.onerror = () => {
      console.timeEnd(url);
      console.warn('image [%o] was not loaded', url);
    };

    this.images[url] = image;
  }

  /**
     * Return loaded image
     */
  get(url) {
    if (!this.images[url]) {
      this.loadOne(url);
    }

    return this.images[url];
  }
}