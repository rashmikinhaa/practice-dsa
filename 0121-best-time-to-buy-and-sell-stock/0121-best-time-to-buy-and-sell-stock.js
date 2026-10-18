/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // this is brute force which take 0(n^2) time which is not optimal
    // let maxProfit =0;
    // for(let i=0;i<prices.length-1;i++){
    //     for(let j=i+1;j<prices.length;j++){
    //         if(prices[j]-prices[i]>maxProfit){
    //             maxProfit=prices[j]-prices[i];
    //         }
    //     }
    // }
    // return maxProfit;

    let maxProfit = 0;
    let min=prices[0];
    for(let i=1;i<prices.length;i++){
        if(min>prices[i]){
            min=prices[i];
        }else{
            let diff = prices[i]-min;
            if(diff > maxProfit){
                maxProfit=diff;
            }
        }
    }
    return maxProfit;
};