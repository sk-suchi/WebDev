const products=[
    {id:1,model:'xiaomi',price:19000},
    {id:1,model:'xiaomi laptop',price:49000},
    {id:1,model:'nokia 5e',price:35500},
    {id:1,model:'lenovo laptop',price:78500},
    {id:1,model:'asus laptop',price:69000},
];
function matchedProducts(products,search){
    const matched=[];
    for(const product of products){
        if(product.model.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result=matchedProducts(products,'laptop');
console.log(result);