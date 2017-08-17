 var array = [1,2,3,4,5,6,7,8,9,10];
 var target = 8;
 var currentElement;
 var currentIndex;
 var maxIndex = array.length-1;
 var minIndex = 0;
 console.log(target);

 while(minIndex <= maxIndex){
 	//finding the middle element index
 	currentIndex = Math.floor((minIndex + maxIndex));

    //get element in the array using index
 	currentElement = array[currentIndex];

 if(currentElement < target){

    // if it's less than we are looking for, look right of the array.
   minIndex = currentIndex + 1;
 	}
  // if it's less than we are looking for, look left of the array
 
  else if(currentElement > target){
    maxIndex = currentIndex -1;
   
 	}
  else{
 	console.log('Current Index: '+ currentIndex);
    console.log('Current Element'+ array[currentIndex]);
    console.log(" ------- ");
 }


 return false;
}


