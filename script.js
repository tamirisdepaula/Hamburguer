const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.botao-tudo')
const buttonMapAll = document.querySelector('.map-all')
const buttonSunAll = document.querySelector('.Sun-All')
const buttonfilterAll = document.querySelector('.filter-All')
let myli = ''

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { 
        style: 'currency', 
        currency: 'BRL' 
    });
 return newValue
}



function botaotudo(productsArray) {
    myli = ''
    productsArray.forEach(product => {
        myli += `
              <li>
                 <img src= ${product.src} >
                 <p> ${product.name} </p>
                <p class="item-price">R$ ${formatCurrency(product.price)} </p>
               </li>
        `
    })

    list.innerHTML = myli
}


function mapAllItems() {
    const newprice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // 10% de desconto


    }))

    botaotudo(newprice)

}


function SunAllItens() {
    const totalvalue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
               <li>
                 <p> O valor total dos itens é R$ ${formatCurrency(totalvalue)} </p>
               </li>
     `
}


function filterAllItens() {
    filterjustvegan = menuOptions.filter((product) => product.vegan === true)
    botaotudo(filterjustvegan)
}








buttonShowAll.addEventListener('click', () => botaotudo(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSunAll.addEventListener('click', SunAllItens)
buttonfilterAll.addEventListener('click', filterAllItens)

