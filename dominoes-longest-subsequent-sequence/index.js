/*"Domino": We are given an S string, representing a domino tile chain. 
Each tile has an L-R format, where L and R are numbers from the 1..6 range. 
The tiles are separated by a comma. 
Some examples of a valid S chain are: 
1. "6-3" 
2. "4-3,5-1,2-2,1-3,4-4" 
3. "1-1,3-5,5-2,2-3,2-4" 
Devise a function that given an S string, returns the number of tiles in the longest matching group within S.
 A matching group is a set of tiles that match and that are subsequent in S. 
 Domino tiles match, if the right side of a tile is the same as the left side of the following tile.
  "2-4,4-1" are matching tiles, but "5-2,1-6" are not. domino("1-1,3-5,5-2,2-3,2-4") // should return 3.
*/
  function getLongest(arr){
    let longestChain = 0;
    arr.forEach((item, index) => {
      let chain = [];
      let currArray = arr.slice(0, index)
      chain.push(item); 
       
      let chainSize = getSequence(chain, currArray)
      if(chainSize > longestChain)
        longestChain = chainSize
    });
    
    
//   arr = arr.map(item => item.reverse())
    return longestChain
  }
  function getSequence(chain, array, chainSize = chain.length){
    array.forEach((item, index) => {
      if(canAppend(item, chain)){
        chain.push(item);
        array.splice(index, 1)
        let currSequenceSize = getSequence(chain, array)
        chain.splice(chain.length-1);
        array.push(item)
        if(currSequenceSize > chainSize)
            chainSize = currSequenceSize
      }
    })
    return chainSize;
  }

   function canAppend(dom, chain){
     return !chain.length || chain[chain.length-1][1] == dom[0]
   }

  let test = ["4-3","5-1","2-2","1-3","4-4"]
  //let test = ["1-1","3-5","5-2","2-3","2-4"]
  console.log(getLongest(test.map(item => item.split('-')))
)