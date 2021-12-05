/* Leetcode #121 - Best Time to Buy and Sell Stock

https://leetcode.com/problems/best-time-to-buy-and-sell-stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Examples ....

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/
//BruteForce, Naive, Time Limit Exceeded
//TC: O(n*n), SC: O(1)
const maxProfitSlow = (prices) => {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let currProfit = prices[j] - prices[i];
      if (currProfit > maxProfit) maxProfit = currProfit;
      //or ... maxProfit = Math.max(maxProfit, currProfit);
    }
  }
  return maxProfit;
};

//Better 
//TC: O(n), SC: O(1)
//https://www.youtube.com/watch?v=mmIMpgh67vg&t=521s -- TerribleWhiteBoard
//https://www.youtube.com/watch?v=mj7N8pLCJ6w - KevinJr
const maxProfit4 = (prices) => {
  let maxprofit = 0;
  let minPrice = Number.MAX_VALUE;
  for (let priceThisDay of prices) {
    let currProfit = priceThisDay - minPrice
    if (priceThisDay < minPrice)
      minPrice = priceThisDay;
    else if (currProfit > maxprofit)
      maxprofit = currProfit;
    //or .. maxProfit = Math.max(maxProfit, currProfit);
  }
  return maxprofit;
}

//Mostly same as above .. establish min each time 
//compare currProfit to maxProfit
//TC: O(n), SC: O(1)
//https://www.youtube.com/watch?v=mj7N8pLCJ6w
const maxProfit3 = (prices) => {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;
  for (let priceThisDay of prices) {
    //if the price we are on is the smallest update min
    if (priceThisDay < minPrice)
      minPrice = priceThisDay;
    else {
      //compare maxProfit so far to what we would make if we sold today
      let currProfit = priceThisDay - minPrice;  //currProfit
      maxProfit = Math.max(maxProfit, currProfit);
      //or .. if (currProfit > maxProfit) maxProfit = currProfit;

    }
  }
  return maxProfit;
}
//
// Same as above, just condensed (CRUX of the logic ..
//set max to ZERO in case the prices are always going down
//on each pass find establish currMinPrice then the currProfit
//if current Profit is grater tha max profit then update maxProfit
const maxProfit2 = (prices) => {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;
  for (let priceThisDay of prices) {
    minPrice = Math.min(minPrice, priceThisDay);
    let currProfit = priceThisDay - minPrice;
    maxProfit = Math.max(maxProfit, currProfit);
  }
  return maxProfit;
}

//This one is different .. but very cool
//Two pointer solution
//https://www.youtube.com/watch?v=1pkOgXD63yU -neetCode
//TC: O(n)  SP: O(1)
const maxProfit1 = (prices) => {
  let l = 0, r = 1; //Left=day we buy, right=day we sell (future)
  let maxProfit = 0;
  while (r < prices.length) {
    //Profitable? if so calc currProfit
    if (prices[l] < prices[r]) {
      let currProfit = prices[r] - prices[l];  //currProfit
      maxProfit = Math.max(maxProfit, currProfit)
    } else {
      //we only move left when not profitable p[l] > p[r])
      l = r;
    }
    r++; //right-fast pointer, incrments regardless
  }
  return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4]
let expected = 5
let actual = maxProfit1(prices)
const status = actual.toString() == expected.toString() ? "CORRECT" : "INCORRECT"
console.log(`${status} ANSWER - Expected: ${expected} | Actual: ${actual}`)

