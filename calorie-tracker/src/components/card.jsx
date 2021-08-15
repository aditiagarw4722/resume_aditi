import Box from "./box"
const Card=(props)=>{
    const {item,setItem}=props
    
    const cards=item.map((todo,index)=>
       
       <Box key={index}
            id={index}
            title={todo.title}
            amount={todo.amount}
            setItem={setItem}
            item={item}
       />
    )
    
    return(
        <div className="card-added">
            {cards}
        </div>
    )
}
export default Card