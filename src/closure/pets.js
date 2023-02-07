function createPetList() {
    // Tu código aquí 👈
    let petList = []
    function pushPetsList(pet) {
      if (pet){
      petList.push(pet);
      return petList;
      }
      return petList;
    }
    return pushPetsList
  }

  
const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();