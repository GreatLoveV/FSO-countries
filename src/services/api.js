import axios from "axios";

const baseUrl = 'http://localhost:3001/items'

const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject =>{
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject)  =>{
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response =>response.data)
}

const remove = (id) =>{
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data)
    
}

export default {getAll, create, update, remove};

// const baseUrl = "http://localhost:3001/items";

//     const getAll = async () =>{
//         try{
//             const response = await axios.get(baseUrl);
//             return response.data;
//         }catch(error){
//             console.error("Error fetching items:", error);
//             throw error;
//         }
//     }

// const create = async (newItem) =>{
//     try{
//         const response = await axios.post(baseUrl, newItem)
//         return response.data
//     }catch(error){
//         console.error("Error creating item:", error);
//         throw error;
//     }
    
// }

// const update = async(id, updatedItem) =>{
//     try{
//         const response = await axios.put(`${baseUrl}/${id}`, updatedItem);
//         return response.data
//     }catch(error){
//         console.error(`Error updating item with id ${id}:`, error);
//         throw error;
//     }
    
// }

// const remove = async(id) =>{
//     try{
//         const response = await axios.delete(`${baseUrl}/${id}`);
//         return response.data
//     }catch(error){
//         console.error(`Error deleting item with id ${id}:`, error);
//         throw error;
//     }
    
// }

// export default {getAll, create, update, remove};