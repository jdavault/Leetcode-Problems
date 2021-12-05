/* LeetCode #733 - Flood Fill

https://leetcode.com/problems/flood-fill

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

*/

//DFS .. recursive solution
//https://www.youtube.com/watch?v=RwozX--B_Xs -- TechDose
//https://www.youtube.com/watch?v=TClRuEZ-uDg -- KevinJr
//https://www.youtube.com/watch?v=aehEcTEPtCs&t=1s -- NickW
const floodFill = (image, sr, sc, newColor) => {
  if (newColor == image[sr][sc])
    return image
  let rowLen = image.length;
  let colLen = image[0].length;
  let sourceColor = image[sr][sc];
  dfsFill(image, sr, sc, newColor, rowLen, colLen, sourceColor)
  return image
};

const dfsFill = (image, sr, sc, newColor, rowLen, colLen, sourceColor) => {
  //Base cases, check to ensure we in the bounds?
  if (sr < 0 || sr >= rowLen || sc < 0 || sc >= colLen)
    return;
  //Check to ensure the pixel we travel too is different from source color  
  if (image[sr][sc] != sourceColor)
    return;
  //change color of current pix
  image[sr][sc] = newColor;
  //Continue changing colors - top, down, left, right
  dfsFill(image, sr - 1, sc, newColor, rowLen, colLen, sourceColor); //TOP
  dfsFill(image, sr + 1, sc, newColor, rowLen, colLen, sourceColor); //DOWN
  dfsFill(image, sr, sc - 1, newColor, rowLen, colLen, sourceColor); //LEFT
  dfsFill(image, sr, sc + 1, newColor, rowLen, colLen, sourceColor); //RIGHT
}

let image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]],
  sr = 1, sc = 1, newColor = 2

let expected = [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
let actual = floodFill(image, sr, sc, newColor);
actual = JSON.stringify(actual)
expected = JSON.stringify(expected)
const theStatus = expected == actual ? "CORRECT" : "INCORRECT"
console.log(`${theStatus} ANSWER - Expected: ${expected} | Actual: ${actual}`)
