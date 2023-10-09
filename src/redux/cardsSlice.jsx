import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name:'cards',
    initialState:[
        {
            id:1,
            title:'Feedbacks',
            body:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .'        
        },
        {
            id:2,
            title:'Weely Task',
            body:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .'    
        },
        {
            id:3,
            title:'Lyrics',
            body:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .'    
        }
    ],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
            state.pop(action.payload)
        },
        edit:(state,action)=>{
            const editedCard = state.findIndex((card)=> card.id === action.payload.id);
            if(editedCard !== -1){
                state[editedCard] = {...state[editedCard], ...action.payload.updateddata };
            }
        },
        toggle:(state,action)=>{
            
        }
    }
})

export const {add,remove,edit,toggle} = cardsSlice.actions
export default cardsSlice.reducer
