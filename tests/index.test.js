// const { default: test } = require("node:test");
const index = require("../src/index");

const imgData = {
  width: 2,
  height: 2,
  data: [
        255, 33, 2, 255,
        200, 140, 12, 255, 
        165, 243, 54, 255, 
        38, 11, 204, 255
      ]
};

test("Test testImgData", () => {
  expect(imgData.width).toBe(2);
  expect(imgData.height).toBe(2);
  expect(imgData.data.length).toBe(imgData.width * imgData.height * 4);
});

test("Test getTotalRGB", () => {
  expect(index.getTotalRGB(imgData).r).toBe(658);
  expect(index.getTotalRGB(imgData).g).toBe(427);
  expect(index.getTotalRGB(imgData).b).toBe(272);
  expect(index.getTotalRGB(imgData).total).toBe(imgData.width * imgData.height);
})

test("Test getPercentRGB", () => {
  // rounds incorrectly
  expect(index.getPercentRGB(imgData).r).toBe(0.48);
  expect(index.getPercentRGB(imgData).g).toBe(0.31);
  expect(index.getPercentRGB(imgData).b).toBe(0.2);
})

test("Test getAverageColor", () => {
  expect(index.getAverageColor(imgData).r).toBe(164);
  expect(index.getAverageColor(imgData).g).toBe(106);
  expect(index.getAverageColor(imgData).b).toBe(68);
})
