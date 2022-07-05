function findItemsOver20(itemList){
    var sum = [];
    
    for(var i=0;i<itemList.length;i++){
      var itemname = itemList[i];
      if(itemname.qty>20){
       sum.push(itemname);
      }
     
    }
    return sum; 
  }