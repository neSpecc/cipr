export default class Auth {
  /**
   * @param {string} url - /auth/vk
   * @param callback  - callback that will be called after auth
   */
  constructor(url, callback){
    this.url = url;
    this.callback = callback;
    window.addEventListener('storage', () => {
      this.storageChangeHandler();
    });

    this.open();
  }

  /**
   * Open auth popup
   */
  open(){
    let left = (window.screen.width / 2) - (800 / 2);
    let top = (window.screen.height / 2) - (570 / 2);

    window.localStorage.removeItem('logged_in');
    console.log('now will open');
    window.open(this.url, 'displayWindow', `width=720,height=440,left=${left},top=${top},location=no,directories=no,status=no,toolbar=no,menubar=no`);
  }

  /**
   * Watch for local storage changing
   **/
  storageChangeHandler() {
    /** Если появился ключ, означающий успешную авторизацию... */
    if (parseInt(window.localStorage.logged_in) === 1) {
      window.localStorage.removeItem('logged_in');

      this.callback();
    }
    /** Если появился ключ, означающий проваленную авторизацию, делаем что-то (если нужно) */
    if (window.localStorage.auth_error) {
      console.log('Auth error', window.localStorage.auth_error);
      window.localStorage.removeItem('auth_error');
    }
  };
};