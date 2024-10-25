(async () => {
  const getFingerprint = async () => {
    // canvas指纹
    const canvasFingerprintHashStr = await getHash(getCanvasFingerprint());
    // 一些基本的信息
    // 获取用户代理
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

  window.__fingerprint = await getFingerprint()
})();
