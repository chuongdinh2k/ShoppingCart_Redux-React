var initialState = [
    {
        id:1,
        name:'I phone 7 plus',
        image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description:'Apple',
        price:500,
        inventory:10,
        rate:3,
        max_rate:5,
        quantity:1
    },
        {
        id:2,
        name:'I phone 12 plus',
        image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description:'Apple',
        price:550,
        inventory:10,
        rate:1,
        max_rate:5,
        quantity:1
    },
    {
        id:3,
        name:'I phone 10 plus',
        image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description:'Apple',
        price:900,
        inventory:10,
        rate:4,
        max_rate:5,
        quantity:1
    }

];
const products = (state=initialState,action)=>{
    switch(action.type){
        
        default:return[...state];
    }
}
export default products;
