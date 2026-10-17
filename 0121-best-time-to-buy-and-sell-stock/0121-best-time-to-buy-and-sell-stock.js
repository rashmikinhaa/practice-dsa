/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit = 0;
    // for(let i=0; i< prices.length-1; i++){
    //     for(let j=i+1;j<prices.length;j++){
    //         if(prices[j]>prices[i]){
    //             let diff= prices[j]-prices[i];
    //             if(diff>maxprofit){
    //                 maxprofit = diff;
    //             }
    //         }
    //     }
    // }

    let min = prices[0];
    for(let i=0;i<prices.length;i++){ 
        if(prices[i]<min){
            min=prices[i];
        }
        let profit = prices[i] - min;
        if(profit>maxprofit){
           maxprofit=profit;
        }
        
    }
    return maxprofit;
};