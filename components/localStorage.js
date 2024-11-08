export const getData = (key) =>{
    const res = JSON.parse(localStorage.getItem(key))
    return res ? res : []
}

export const setData = (key, arr) => {
    try{
        localStorage.setItem(key, JSON.stringify(arr))
    } 
    catch(error){
        console.log(error)
    }
}

export const deleteData = (key) => {
    localStorage.removeItem(key)
}

export const updateCounter = itemsData => {

    const coun = itemsData.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
    }, 0);

    return coun
}

export const removeElement = (arr, prodId) =>{
    const aux = arr.findIndex(({ id }) => id === prodId);

        if (aux !== -1) {
            if (arr[aux].quantity === 1) {
                arr = arr.filter(item => item.id !== prodId);
            } else {
                arr[aux].quantity -= 1;
            }
        }
    return arr
}