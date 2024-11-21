(async () => {
  const getFingerprint = async () => {
    // canvas指纹
    const canvasFingerprintHashStr = await getHash(getCanvasFingerprint());
    // 一些基本的信息
    // 获取用户UA
    const userAgent = navigator.userAgent;

    // 获取屏幕分辨率
    const screenResolution = `${window.screen.width}x${window.screen.height}`;

    // 获取语言
    const language = navigator.language;

    // 获取时区
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return [
      canvasFingerprintHashStr,
      userAgent,
      screenResolution,
      language,
      timeZone,
    ].join("_");
  };

  const getCanvasFingerprint = () => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    // 设置画布尺寸
    canvas.width = 200;
    canvas.height = 50;

    // 绘制文本
    context.textBaseline = "top";
    context.font = "16px Arial";
    context.fillStyle = "black";
    context.fillText("Hello, world!", 10, 10);

    // 绘制矩形
    context.strokeStyle = "red";
    context.strokeRect(5, 5, 190, 40);

    return canvas.toDataURL();
  };

  const getHash = async (dataURL) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(dataURL);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  };
  // 拿到指纹
  window.__fingerprint = await getFingerprint();
  // 还要拿着指纹去找服务器要token：
  // 1、如果服务器没有token，返回空
  // 2、如果服务器有这个指纹对应的token，服务器预请求一下，通了就返回token，没通就返回空
  const fingerprintUrl = ''
  const sendPostRequestAsync = async (url, data) => {
    // 返回一个新的 Promise
    return new Promise((resolve, reject) => {
      // 创建一个 XMLHttpRequest 对象
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.responseType = "json";

      // 当请求完成时处理响应
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          // 请求成功，解决 Promise
          resolve(xhr.response);
        } else {
          // 请求失败，拒绝 Promise
          reject(
            new Error(`Failed with status: ${xhr.status} ${xhr.statusText}`)
          );
        }
      };

      // 处理网络错误
      xhr.onerror = function () {
        reject(new Error("Network Error"));
      };

      // 将数据转换为 JSON 字符串并发送
      var jsonData = JSON.stringify(data);
      xhr.send(jsonData);
    });
  };
  const res = await sendPostRequestAsync(fingerprintUrl, { fingerprint: window.__fingerprint })
  if (res?.data?.token) window.__pToken = res?.data?.token
})();
