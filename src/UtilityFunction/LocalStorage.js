const getReadList = () => {
    const getId = localStorage.getItem('read-list')
    if(getId){
        const readList = JSON.parse(getId)
        return readList
    }else{
        return [];
    }
}

const addToStore = (id) =>{
    const storeedList = getReadList()
    if(storeedList.includes(id)){
        
    }else{
        storeedList.push(id)
        const stroedLists = JSON.stringify(storeedList)
        localStorage.setItem('read-list', stroedLists)
    }
}
export {addToStore}