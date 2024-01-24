let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};


const product = [
    {
      id: 0,
      images: 'images/p1.png',
      title: 'title ewan',
      price: 120,
    },
    {
      id: 1,
      images: 'images/p2.png',
      title: 'edi product 2',
      price: 60
    },
    {
      id: 2,
      images: 'images/p3.png',
      title: 'edi product 3',
      price: 60
    },
    {
        id: 3,
        images: 'images/p4.png',
        title: 'edi product 4',
        price: 60
    },  
    {
        id: 4,
        images: 'images/p5.png',
        title: 'edi product 5',
        price: 60
    },  
    {
        id: 5,
        images: 'images/p6.png',
        title: 'edi product 6',
        price: 60
    },  
    {
        id: 6,
        images: 'images/p6.png',
        title: 'edi product 6',
        price: 60
    },  
    {
        id: 7,
        images: 'images/p8.png',
        title: 'edi product 8',
        price: 60
    },
    {
        id: 8,
        images: 'images/p9.png',
        title: 'edi product 9',
        price: 60
    },
    {
        id: 9,
        images: 'images/p10.png',
        title: 'edi product 10',
        price: 60
    },
    {
        id: 10,
        images: 'images/p11.png',
        title: 'edi product 11',
        price: 60
    },
    {
        id: 11,
        images: 'images/p12.png',
        title: 'edi product 12',
        price: 60
    },
    {
        id: 12,
        images: 'images/p13.png',
        title: 'edi product 13',
        price: 60
    },
    {
        id: 13,
        images: 'images/p14.png',
        title: 'edi product 14',
        price: 60
    },
    {
        id: 14,
        images: 'images/p15.png',
        title: 'edi product 15',
        price: 60
    },
    {
        id: 15,
        images: 'images/p16.png',
        title: 'edi product 16',
        price: 60
    },
    {
        id: 16,
        images: 'images/p17.png',
        title: 'edi product 17',
        price: 60
    },
    {
        id: 17,
        images: 'images/p18.png',
        title: 'edi product 18',
        price: 60
    }
  ];
  
  const categories = [...new Set(product.map((item) => item.title))];
  
  document.getElementById('root').innerHTML = categories.map((title) => {
    const item = product.find((productItem) => productItem.title === title);
  
    return `
      <div class='box'>
        <img class='images' src=${item.images}></img>
        <div class='bottom'>
          <p>${item.title}</p>
          <h2>$ ${item.price}.00</h2>
          <button onclick='addToCart(${item.id})'> Add to cart </button>
        </div>
      </div>`;
  }).join('');
  
  var cart = [];
  
  function addToCart(a) {
    cart.push({ ...product[a] });
    displaycart();
  }
  
  function delElement(a) {
    cart.splice(a, 1);
    displaycart();
  }
  
  function displaycart(a) {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
      document.getElementById("cartItem").innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ " + 0 + ".00"
    } else {
      document.getElementById("cartItem").innerHTML = cart.map((items) => {
        var { images, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
        return (
          `<div class='cart-item'>
            <div class='rowing' src=${images}></div>
            <p style='font-size: 12px;'> ${title}</p>
            <h2 style='font-size: 15px;'>$ ${price}.00</h2>
            <i class='bx bx-x' onclick='delElement(${j++})'></i>
          </div>`
        );
      }).join('');
    }
  }
  