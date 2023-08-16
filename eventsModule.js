const EventEmitter=require('node:events');
const eventEmitter=new EventEmitter();


// Gives non blocking functionality
// Can use multiple listner for same event

eventEmitter.on("order-pizza",(size, topping)=>{
    console.log(`Order Received for ${size} with ${topping} topping.. Baking a pizza`)
})

eventEmitter.on("order-pizza",(size, topping)=>{
    if(size==="large"){
     console.log("Serving the complimentary drink")
    }
 })

console.log("This is before emitting the event")
eventEmitter.emit('order-pizza',"large","cheeze")


