/* you are given an array "prices" where "prices[i]"" is the price of the given stock item on the ith day and an integer representing a transaction fee

Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again). 

Example 1:
Input: prices = [1,3,2,8,4,9], fee = 2
Output: 8

Example 2:
Input: prices = [1,3,7,5,10,3], fee = 3
Output: 6

*/ 

let maxStocksProfit = function(prices, fee) {
    let prevProfit, currentProfit, maxProfit = 0;
    let prevEffectBuying, currentEffectiveBuying, minEffectiveBuying = 0;
    let i = 0;
    while (i<prices.length) {
        if (i==0){
            // initially profit will be 0
            prevProfit = 0;
            // initially effective buying will be the price of buying the stock since you are giving it from your own pocket
            prevEffectBuying = prices[i];
        }
        else{
            currentProfit = prices[i] - minEffectiveBuying - fee;
            // profit should be max
            maxProfit = Math.max(prevProfit, currentProfit);
            currentEffectiveBuying = prices[i] - maxProfit;
            // effective buying should be min
            minEffectiveBuying = Math.min(prevEffectBuying, currentEffectiveBuying);
            // updating prevProfit and prevEffectBuying each time
            prevProfit = maxProfit;
            prevEffectBuying = minEffectiveBuying;
        }
        i++;
    }
    return maxProfit;
}

let prices = [1,3,7,5,10,3], fee = 3
console.log(maxStocksProfit(prices, fee));