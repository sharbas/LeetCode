// Count Pairs Whose Sum is Less than Target



var countPairs = function(nums, target) {
    //here we declaring count to find our target
    let count=0
    //here we are making to loop to iterate and find our target
    for(let i=0;i<nums.length;i++){
  for(let j=i+1;j<nums.length;j++){
     //here we are checking the condintion is satisfied, if it satisfied , 
     //we will start increment the count
        if(  nums[j] + nums[i] < target){
            count++
        }
  }
    }
  
    return count
};
