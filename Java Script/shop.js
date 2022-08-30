function invalid(){
    let item = document.querySelector('#item')
    let item_error = document.querySelector('#item_error');

    item1 = item.value;

    if(item1 === ''){
        item_error.innerHTML = 'Please add item to cart!';
    }else{
        item_error.innerHTML = '';
        return{
            item1
        }
        
    }

}
function add(){
    let item_value = invalid();
   
    let div = document.createElement('div');
    let attr = div.setAttribute('class','list-group-item')
    let click = div.setAttribute('id','line')
    div.innerHTML =  item_value.item1
    document.body.appendChild(div)


}
let line = document.getElementById('line');
const myFunction = () => {
    console.log('Click')
    
}
line.addEventListener("click",myFunction)