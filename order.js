let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];


let globalOrderDetails = {
  subtotal: 0,
  discountValue: 0,
  total: 0,
};
const allProducts = [
  { itemCode: "B1001", itemName: "Classic Burger (Large)", image: "img/OIP.jpeg", price: "750.00", discount: 0, Qty: 50, category: "Burgers" },
  { itemCode: "B1002", itemName: "Classic Burger (Regular)", image: "img/OIP.jpeg", price: "1500.00", discount: "15%", Qty: 50, category: "Burgers" },
  { itemCode: "B1003", itemName: "Turkey Burger", image: "img/OIP.jpeg", price: "1600.00", discount: 0, Qty: 50, category: "Burgers" },
  { itemCode: "B1004", itemName: "Chicken Burger (Large)", image: "img/OIP.jpeg", price: "1400.00", discount: 0, Qty: 50, category: "Burgers" },
  { itemCode: "B1005", itemName: "Chicken Burger (Regular)", image: "img/OIP.jpeg", price: "800.00", discount: "20%", Qty: 50, category: "Burgers" },
  
  // Drinks
  { itemCode: "B1044", itemName: "Pepsi (330ml)",image :"img/vecteezy_ai-generated-a-glass-of-cola-with-ice-on-a-transparent_37796599.png", price: "990.00", discount: "5%", Qty: 50, category: "Beverages" },
  { itemCode: "B1045", itemName: "Coca-Cola (330ml)",image :"img/vecteezy_ai-generated-a-glass-of-cola-with-ice-on-a-transparent_37796599.png", price: "1230.00", discount: 0, Qty: 50, category: "Beverages" },
  { itemCode: "B1046", itemName: "Sprite (330ml)",image :"img/vecteezy_ai-generated-a-glass-of-cola-with-ice-on-a-transparent_37796599.png", price: "1500.00", discount: "3%", Qty: 50, category: "Beverages" },
  { itemCode: "B1047", itemName: "Mirinda (330ml)",image :"img/vecteezy_ai-generated-a-glass-of-cola-with-ice-on-a-transparent_37796599.png", price: "850.00", discount: "7%", Qty: 50, category: "Beverages" },

  // // Chicken Items
  // { itemCode: "B1038", itemName: "Fried Chicken (Small)", price: "1200.00", discount: 0, Qty: 50, category: "Chicken" },
  // { itemCode: "B1039", itemName: "Fried Chicken (Regular)", price: "2300.00", discount: "10%", Qty: 50, category: "Chicken" },
  // { itemCode: "B1040", itemName: "Fried Chicken (Large)", price: "3100.00", discount: "5%", Qty: 50, category: "Chicken" },
  // { itemCode: "B1041", itemName: "Hot Wings (Large)", price: "2400.00", discount: 0, Qty: 50, category: "Chicken" },

  // Pasta
  { itemCode: "B1031", itemName: "Chicken n Cheese Pasta",image:"img/vecteezy_spaghetti-italian-pasta-with-tomato-sauce_9887173.png", price: "1600.00", discount: "15%", Qty: 50, category: "Pasta" },
  { itemCode: "B1032", itemName: "Chicken Penne Pasta",image:"img/vecteezy_spaghetti-italian-pasta-with-tomato-sauce_9887173.png", price: "1700.00", discount: 0, Qty: 50, category: "Pasta" },
  { itemCode: "B1033", itemName: "Ground Turkey Pasta Bake",image:"img/vecteezy_spaghetti-italian-pasta-with-tomato-sauce_9887173.png", price: "2900.00", discount: "10%", Qty: 50, category: "Pasta" },
  { itemCode: "B1034", itemName: "Creamy Shrimp Pasta",image:"img/vecteezy_spaghetti-italian-pasta-with-tomato-sauce_9887173.png", price: "2000.00", discount: 0, Qty: 50, category: "Pasta" },
  { itemCode: "B1035", itemName: "Lemon Butter Pasta", image:"img/vecteezy_spaghetti-italian-pasta-with-tomato-sauce_9887173.png",price: "1950.00", discount: 0, Qty: 50, category: "Pasta" },
  { itemCode: "B1036", itemName: "Tagliatelle Pasta",image:"img/vecteezy_spaghetti-italian-pasta-with-tomato-sauce_9887173.png", price: "2400.00", discount: "1%", Qty: 50, category: "Pasta" },
  { itemCode: "B1037", itemName: "Baked Ravioli",image:"img/vecteezy_spaghetti-italian-pasta-with-tomato-sauce_9887173.png", price: "2000.00", discount: "1%", Qty: 50, category: "Pasta" },

  // Fries
  { itemCode: "B1025", itemName: "Steak Fries (Large)",image :"img/fries-6.png", price: "1200.00", discount: 0, Qty: 50, category: "Fries" },
  { itemCode: "B1026", itemName: "Steak Fries (Medium)",image :"img/fries-6.png", price: "600.00", discount: 0, Qty: 50, category: "Fries" },
  { itemCode: "B1027", itemName: "French Fries (Large)",image :"img/fries-6.png", price: "800.00", discount: 0, Qty: 50, category: "Fries" },
  { itemCode: "B1028", itemName: "French Fries (Medium)",image :"img/fries-6.png", price: "650.00", discount: 0, Qty: 50, category: "Fries" },
  { itemCode: "B1029", itemName: "French Fries (Small)",image :"img/fries-6.png", price: "450.00", discount: 0, Qty: 50, category: "Fries" },
  { itemCode: "B1030", itemName: "Sweet Potato Fries (Large)",image :"img/fries-6.png", price: "600.00", discount: 0, Qty: 50, category: "Fries" },

  // Submarines
  { itemCode: "B1020", itemName: "Grinder Submarine",image:"img/sandwich-transparent-14 (1).png", price: "2300.00", discount: 0, Qty: 50, category: "Submarines" },
  { itemCode: "B1021", itemName: "Cheese Submarine",image:"img/sandwich-transparent-14 (1).png", price: "2300.00", price: "2200.00", discount: 0, Qty: 50, category: "Submarines" },
  { itemCode: "B1022", itemName: "Double Cheese n Chicken Submarine",image:"img/sandwich-transparent-14 (1).png", price: "2300.00", price: "1900.00", discount: "16%", Qty: 50, category: "Submarines" },
  { itemCode: "B1023", itemName: "Special Horgie Submarine",image:"img/sandwich-transparent-14 (1).png", price: "2300.00", price: "2800.00", discount: 0, Qty: 50, category: "Submarines" },
  { itemCode: "B1024", itemName: "MOS Special Submarine",image:"img/sandwich-transparent-14 (1).png", price: "2300.00", price: "3000.00", discount: 0, Qty: 50, category: "Submarines" }
];


if (!localStorage.getItem('allProducts')) {
  localStorage.setItem('allProducts', JSON.stringify(allProducts));
}


function displayTable(category) {
  let productData = JSON.parse(localStorage.getItem('allProducts')) || [];

 
  if (category !== 'All') {
      productData = productData.filter(product => product.category === category);
  }

  const tableBody = document.getElementById("burgerTableBody");
  tableBody.innerHTML = ""; 

  
  productData.forEach((product, index) => {
      const row = tableBody.insertRow();
      row.insertCell(0).textContent = product.itemCode;
      row.insertCell(1).textContent = product.itemName;
      row.insertCell(2).textContent = product.price;
      row.insertCell(3).textContent = product.Qty;
      row.insertCell(4).textContent = product.discount === 0 ? '-' : product.discount;

      const editCell = row.insertCell(5);
      editCell.innerHTML = `<button class="edit-button" >Edit</button>`;
      const deleteCell = row.insertCell(6);
      deleteCell.innerHTML = `<button class="delete-button" onclick="deleteProduct(${index})">Delete</button>`;
  });
}


displayTable('All');



function addProductCardsByCategory(category) {
  const allProducts = JSON.parse(localStorage.getItem('allProducts')) || [];
  const productGrid = document.querySelector('.product-grid');

  productGrid.innerHTML = '';

  
  allProducts.forEach(product => {
    if (category === 'All' || product.category === category) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.setAttribute('data-id', product.itemCode);
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.itemName}">
        <h2>${product.itemName}</h2>
        <p>Rs. ${product.price}</p>
      `;
      productCard.addEventListener('click', () => handleCardClick(product));
      productGrid.appendChild(productCard);
    }
  });
}

function handleCardClick(product) {
  console.log('Clicked product:', product);

  let index = selectedProducts.findIndex(item => item.itemCode === product.itemCode);
  console.log(index);
  if (index > -1) {
    selectedProducts[index].quantity += 1; 
  } else {
    selectedProducts.push({ ...product, quantity: 1 }); 
  }

  console.log('Updated selectedProducts:', selectedProducts);

  updateOrderSummary();
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
}
function updateOrderSummary() {
  const orderDetails = document.querySelector('.order-details');
  orderDetails.innerHTML = '';  

  let subtotal = 0;

  
  selectedProducts.forEach((item, index) => {
    const productPrice = parseFloat(item.price);
    const productTotal = productPrice * item.quantity;
    subtotal += productTotal;

    const orderItem = document.createElement('div');
    orderItem.classList.add('order-item');
    orderItem.innerHTML = `
      <p>${item.itemName} (Rs. ${item.price})</p>
      <div class="quantity-control">
        <button onclick="adjustQuantity(${index}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="adjustQuantity(${index}, 1)">+</button>
        Rs. ${productTotal.toFixed(2)}
        <button onclick="removeItem(${index})">&#128465;</button>
      </div>
    `;

    orderDetails.appendChild(orderItem);
  });

  
  document.getElementById('subTotal').textContent = `SubTotal: Rs. ${subtotal.toFixed(2)}`;
  globalOrderDetails.subtotal = subtotal;

  applyDiscount();
}


function adjustQuantity(index, amount) {
  selectedProducts[index].quantity += amount;

  
  if (selectedProducts[index].quantity < 1) {
    selectedProducts.splice(index, 1);
  }

  updateOrderSummary();  
  saveToLocalStorage();
}


function removeItem(index) {
  selectedProducts.splice(index, 1);  
  updateOrderSummary();  
  saveToLocalStorage();
}


function saveToLocalStorage() {
  localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
}


function applyDiscount() {
  const discountInput = document.getElementById('discountInput').value;
  let discountValue = parseFloat(discountInput) || 0;  // Get discount value, default 0

  let subtotal = globalOrderDetails.subtotal;
  let total = subtotal - discountValue;

  document.getElementById('discount').textContent = `Discount: Rs. ${discountValue.toFixed(2)}`;
  document.getElementById('total').textContent = `Total: Rs. ${total.toFixed(2)}`;
  globalOrderDetails.discountValue = discountValue;
  globalOrderDetails.total = total;
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('paymentModal');
  const btn = document.getElementById('pay'); 
  

  btn.onclick = function() {
    modal.style.display = "block";
    populateOrderSummary();
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}); 


document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('paymentModal');
  const btn = document.getElementById('pay'); 
  

  btn.onclick = function() {
    modal.style.display = "block";
    populateOrderSummary();
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('addItemModal');
  const btn = document.getElementById('addItem');
  const mainContent = document.querySelector('.main-content-container'); 

  btn.onclick = function() {
    modal.style.display = "block";
    mainContent.classList.add('blur');
    populateOrderSummary(); 
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      mainContent.classList.remove('blur'); 
    }
  };
});


function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);

  const today = new Date();
  const dateStr = today.toLocaleDateString();
  doc.text(dateStr, 190, 20, { align: 'right' });

  doc.text('Thank You ', 105, 20, null, null, 'center'); 

  doc.setFontSize(10);
  doc.text('From: MOS Burgers', 10, 30);
  doc.text('62, Mathara Road, Galle, Sri Lanka 80000', 10, 40);
  doc.text('Email: mosburgers@gmail.com', 10, 50);
  doc.text('Phone: +94 74 54 43 456', 10, 60);

  
  doc.text('#', 10, 80);
  doc.text('Item', 20, 80);
  doc.text('Price', 100, 80);
  doc.text('Qty', 140, 80);
  doc.text('Total', 160, 80);

  let yPos = 90;
  let subtotal = 0;
  let totalDiscount = 0;

  selectedProducts.forEach((item, index) => {
    
    const itemName = item.itemName 
    const itemPrice = parseFloat(item.price) || 0;
    const itemQty = item.quantity || 1;  

    let discountRate = parseFloat(document.getElementById('discountInput').value) / 100 || 0;
    let itemTotal = itemPrice * itemQty;
    let discountAmount = itemTotal * discountRate;
    let netTotal = itemTotal - discountAmount;

    subtotal += itemTotal;
    totalDiscount += discountAmount;

    
    yPos = yPos || 90 + (index * 10);

    doc.text((index + 1).toString(), 10, yPos);  
    doc.text(itemName, 20, yPos);              
    doc.text(`Rs. ${itemPrice.toFixed(2)}`, 100, yPos);  
    doc.text(itemQty.toString(), 140, yPos);    
    doc.text(`Rs. ${netTotal.toFixed(2)}`, 160, yPos);   

    yPos += 10;
  });

  
  doc.text("Subtotal:", 140, yPos + 10);
  doc.text(`Rs. ${subtotal.toFixed(2)}`, 160, yPos + 10);

  doc.text("Discount:", 140, yPos + 20);
  doc.text(`-Rs. ${totalDiscount.toFixed(2)}`, 160, yPos + 20);

  let finalTotal = subtotal - totalDiscount;
  doc.text("Total:", 140, yPos + 30);
  doc.text(`Rs. ${finalTotal.toFixed(2)}`, 160, yPos + 30);

  doc.save('invoice.pdf');
}




function addItem() {
  const itemCode = document.getElementById("product-code").value;
  const itemName = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const discount = document.getElementById("product-discount").value;
  const category = document.getElementById("categories").value;

  const allProducts = JSON.parse(localStorage.getItem('allProducts')) || [];
  let image;

 
  if (category === 'Burgers') {
      image = 'img/OIP.jpeg';
  } else if (category === 'Beverages') {
      image = 'img/vecteezy_ai-generated-a-glass-of-cola-with-ice-on-a-transparent_37796599.png'; 
  } else if (category === 'Pasta') {
      image = 'img/vecteezy_spaghetti-italian-pasta-with-tomato-sauce_9887173.png'; 
  } else if (category === 'Fries') {
      image = 'img/fries-6.png'; 
  } else if (category === 'Submarines') {
      image = 'img/sandwich-transparent-14 (1).png'; 
  } else {
      image = 'img/default-image.jpg'; 
  }

  const newItem = { itemCode, itemName, image, price, discount: discount || "-", category };
  allProducts.push(newItem);
  localStorage.setItem('allProducts', JSON.stringify(allProducts));

  displayTable();
  addProductCardsByCategory(category);
}



function deleteProduct(index) {
  const   allProducts= JSON.parse(localStorage.getItem('allProducts')) || [];
   
   if (index > -1 && index <  allProducts.length) {
        allProducts.splice(index, 1); 
       localStorage.setItem('allProducts', JSON.stringify(allProducts));
       
       alert("Item deleted successfully.");
   } 
   displayTable();
    addProductCardsByCategory();
}


const editFormProductID = document.getElementById('edit-product-code'); 
const editFormProductTitle = document.getElementById('edit-product-name'); 
const editFormProductPrice = document.getElementById('edit-product-price'); 
const editFormProductDiscount = document.getElementById('edit-product-discount'); 
const editFormProductCategory = document.getElementById('edit-categories'); 
const mainContent = document.getElementById('mainContent'); 


document.getElementById('burgerTableBody').addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('edit-button')) {
    const rowIndex = e.target.closest('tr').rowIndex - 1; 
    fillItemInfo(rowIndex);  
    
    document.getElementById('updateItemModal').style.display = 'block';
    mainContent.classList.add('blur'); 
  }
});


function fillItemInfo(index) {
    let itemInfoParsed = JSON.parse(localStorage.getItem("allProducts"));
    
    if (index !== -1 && index < itemInfoParsed.length) {
        let info = itemInfoParsed[index];
        editFormProductID.value = info.itemCode; 
        editFormProductTitle.value = info.itemName;
        editFormProductPrice.value = info.price;
        editFormProductDiscount.value = info.discount;
        editFormProductCategory.value = info.category;
    } else {
        alert("Item not found in the database.");
    }
}


function updateItemInfo() {
    let itemInfoParsed = JSON.parse(localStorage.getItem("allProducts"));
    let indexOfItem = itemInfoParsed.findIndex((value) => value.itemCode == editFormProductID.value); 

    if (indexOfItem !== -1) {
        if (!editFormProductTitle.value || !editFormProductPrice.value || !editFormProductCategory.value) {
            alert("Please fill in all required fields.");
            return;
        }

        let info = itemInfoParsed[indexOfItem];
        info.itemName = editFormProductTitle.value;
        info.price = editFormProductPrice.value;
        info.discount = editFormProductDiscount.value;
        info.category = editFormProductCategory.value;

        localStorage.setItem("allProducts", JSON.stringify(itemInfoParsed));

        alert('Item information updated successfully!');
        clearForm();
        displayTable('All');  
        closeModal(); 
    } else {
        alert("Cannot find the item. Please do not change the product code.");
    }
}

function clearForm() {
    editFormProductID.value = '';
    editFormProductTitle.value = '';
    editFormProductPrice.value = '';
    editFormProductDiscount.value = '';
    editFormProductCategory.value = '';
}


function closeModal() {
  const modal = document.getElementById('updateItemModal');
  modal.style.display = "none";
  mainContent.classList.remove('blur'); 
}

window.onclick = function(event) {
  const modal = document.getElementById('updateItemModal');
  if (event.target === modal) {
    closeModal();
  }
};
