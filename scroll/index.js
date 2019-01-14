class load {
  constructor() {
    this.n = 0
    this.container = document.querySelectorAll('.image')
    this.last = 0
    this.timer = null
  }

  /**
   * 频率控制 返回函数连续调用时，action 执行频率限定为 次 / delay
   * @param delay  {number}    延迟时间，单位毫秒
   */
  lazy_load(delay) {
    let curr = +new Date()
    clearTimeout(this.timer)
    if (curr - this.last > delay) {
      this.changImg()
      this.last = curr
    } else {
      this.timer = setTimeout(this.changImg.bind(this), delay)
      this.last = curr
    }
  }

  changImg() {
    console.log(1)
    const seeHeight = document.body.clientHeight
    for (let i = this.n; i < this.container.length; i++) {
      if (this.container[i].offsetTop < seeHeight + document.body.scrollTop) {
        this.container[i].src = this.container[i].getAttribute('data-url')
        this.n = i
      }
    }
  }
}

const load1 = new load()
load1.lazy_load(2000)
document.body.addEventListener(
  'scroll',
  load1.lazy_load.bind(load1, 2000),
  false
)
