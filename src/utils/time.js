export default {
  /**
  * Promise 等待指定時間
  * @param {Number} ms 等待時間
  * @return {Promise} 多久後 resolve
  */
  wait (ms) {
    return new Promise(resolve => {
      window.setTimeout(resolve, ms)
    })
  }
}
