// 在 Worker 线程执行上下文会全局暴露一个 `worker` 对象，直接调用 worker.onMeesage/postMessage 即可
let result = 0
worker.onMessage(function(res) {
  result = res.num * res.num

  worker.postMessage({
    result
  })
})