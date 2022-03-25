function mergeArrays(arr1, arr2) {
    if (arr1 == [] && arr2 == []){
      return []
    } 
    console.log(arr1)
    console.log(arr2)
    let uniqMerge = [...arr1, ...arr2]
    let sortMerge = uniqMerge.sort((a,b)=> a-b)
    let finalMerge = []
    sortMerge.forEach((n)=> {
      if (!finalMerge.includes(n)) {
         finalMerge.push(n)
      }
    })
    
    return finalMerge
}