export function moviesList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:'Avengers'},
            {id:2,name:'MadMax'},
            {id:3,name:'Jab We Met'}
        ]
    }
}