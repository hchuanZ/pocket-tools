export default {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 16, // 基准值，可以根据设计稿调整
        propList: ['*'], // 需要转换的属性，* 表示所有属性都转换
        selectorBlackList: [], // 忽略转换的选择器
        minPixelValue: 1, // 最小的转换单位，低于这个值不转换
      },
    },
  };
  