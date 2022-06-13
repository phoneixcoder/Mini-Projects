const prices = [200 , 300, 350 , 400 , 450 , 500 , 600];

const findLMS = (prices.find((currVal) => currVal < 400));

// console.log(findLMS);

//Filter Method

const newPriceTag = prices.filter((elem , index) => {

    return elem < 400;

});

// console.log(newPriceTag);

//How to sort and compare the array

  
