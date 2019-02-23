function sortUsernames(names) {
    let result = new Set;
    for(let username of names){
        result.add(username);
    }

    function nameComparator(nameA, nameB) {
      if(nameA.length < nameB.length){
          return -1;
      }
      if(nameA.length > nameB.length){
          return 1;
      }

      return nameA.localeCompare(nameB);
    }
    console.log([...result].sort(nameComparator).join('\n'));
}