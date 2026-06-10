
function getLocalCart() {
  return JSON.parse(localStorage.getItem("trailing_dreams_cart")) || [];
}

function saveLocalCart(cart) {
  localStorage.setItem("trailing_dreams_cart", JSON.stringify(cart));
}

function showToast(message) {
  const existingToast = document.getElementById("shop-toast-notification");
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement("div");
  toast.id = "shop-toast-notification";
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.right = "30px";
  toast.style.backgroundColor = "#386b49";
  toast.style.color = "#ffffff";
  toast.style.padding = "16px 28px";
  toast.style.borderRadius = "14px";
  toast.style.boxShadow = "0 10px 30px rgba(56, 107, 73, 0.15)";
  toast.style.fontFamily = '"Montserrat", sans-serif';
  toast.style.fontSize = "14px";
  toast.style.fontWeight = "700";
  toast.style.zIndex = "2000";
  toast.style.transition =
    "opacity 0.3s ease, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
  toast.style.opacity = "0";
  toast.style.transform = "translateY(20px)";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 10);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      menuToggle.checked = false;
    }
  });
}

const shopContainer = document.querySelector(".shop-layout");
if (shopContainer) {
  const searchInput = document.getElementById("shop-search-input");
  const emptyState = document.getElementById("shop-empty-state");
  const categoryButtons = document.querySelectorAll(".category-btn");
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const link = product.querySelector("a");
    if (link) {
      const urlParams = new URLSearchParams(
        link.getAttribute("href").split("?")[1],
      );
      const plantKey = urlParams.get("name");
      if (plantKey && plantDatabase[plantKey]) {
        product.setAttribute("data-category", plantDatabase[plantKey].category);
      }
    }
  });

  function filterCatalog() {
    const searchText = searchInput
      ? searchInput.value.toLowerCase().trim()
      : "";
    const activeCategoryBtn = document.querySelector(".category-btn.active");
    const selectedCategory = activeCategoryBtn
      ? activeCategoryBtn.getAttribute("data-category")
      : "all";
    let visibleCount = 0;

    products.forEach((product) => {
      const title = product.querySelector("h2").textContent.toLowerCase();
      const productCategory = product.getAttribute("data-category") || "";

      const matchesSearch = title.includes(searchText);
      const matchesCategory =
        selectedCategory === "all" || productCategory === selectedCategory;

      if (matchesSearch && matchesCategory) {
        product.style.display = "block";
        visibleCount++;
      } else {
        product.style.display = "none";
      }
    });

    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.style.display = "flex";
      } else {
        emptyState.style.display = "none";
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterCatalog);
  }

  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      categoryButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      filterCatalog();
    });
  });

  const shopAddButtons = document.querySelectorAll(".shop-add-btn");
  shopAddButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const plantKey = this.getAttribute("data-id");
      const plantData = plantDatabase[plantKey];

      if (plantData) {
        let cart = getLocalCart();
        const existingItem = cart.find((item) => item.id === plantKey);

        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({
            id: plantKey,
            title: plantData.title,
            price: parseInt(plantData.price.replace('$', '')),
            img: plantData.img,
            quantity: 1,
          });
        }

        saveLocalCart(cart);
        showToast(`${plantData.title} added to cart!`);
      }
    });
  });
}

const productDetailTemplate = document.getElementById("main-product-img");
if (productDetailTemplate) {
  const urlParams = new URLSearchParams(window.location.search);
  const plantKey = urlParams.get("name") || "darlingtonia";
  const plantData = plantDatabase[plantKey];

  if (plantData) {
    document.title = `${plantData.title} – Trailing Dreams`;
    document.getElementById("product-title").textContent = plantData.title;
    document.getElementById("product-price").textContent = plantData.price;
    document.getElementById("product-desc").textContent = plantData.desc;
    document.getElementById("product-height").textContent = plantData.height;
    document.getElementById("product-pot").textContent = plantData.pot;
    document.getElementById("product-light").textContent = plantData.light;
    document.getElementById("product-water").textContent = plantData.water;

    const mainImg = document.getElementById("main-product-img");
    const thumbnails = document.querySelectorAll(".thumb-img");

    thumbnails.forEach((thumb) => {
      thumb.src = plantData.img;
      thumb.alt = plantData.title;
    });
    mainImg.src = plantData.img;
    mainImg.alt = plantData.title;
  }

  const mainImg = document.getElementById("main-product-img");
  const thumbnails = document.querySelectorAll(".thumb-img");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      mainImg.src = this.src;
      mainImg.style.filter = this.style.filter;
      thumbnails.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const qtyInput = document.getElementById("product-qty");
  const btnMinus = document.getElementById("qty-minus");
  const btnPlus = document.getElementById("qty-plus");

  if (qtyInput && btnMinus && btnPlus) {
    btnMinus.addEventListener("click", () => {
      let val = parseInt(qtyInput.value) || 1;
      if (val > 1) qtyInput.value = val - 1;
    });

    btnPlus.addEventListener("click", () => {
      let val = parseInt(qtyInput.value) || 1;
      qtyInput.value = val + 1;
    });
  }

  const addToCartBtn = document.getElementById("add-to-cart-btn");
  if (addToCartBtn && plantData) {
    addToCartBtn.addEventListener("click", () => {
      const qtyInput = document.getElementById("product-qty");
      const quantityToAdd = parseInt(qtyInput.value) || 1;
      let cart = getLocalCart();

      const existingItem = cart.find((item) => item.id === plantKey);
      if (existingItem) {
        existingItem.quantity += quantityToAdd;
      } else {
        cart.push({
          id: plantKey,
          title: plantData.title,
          price: parseInt(plantData.price.replace('$', '')),
          img: plantData.img,
          quantity: quantityToAdd,
        });
      }

      saveLocalCart(cart);
      showToast(`${plantData.title} added to cart!`);
    });
  }
}

const cartContainerLayout = document.getElementById("cart-main-layout");
if (cartContainerLayout) {
  const cartItemsList = document.getElementById("cart-items-list");
  const emptyState = document.getElementById("cart-empty-state");
  const subtotalText = document.getElementById("cart-subtotal");
  const shippingText = document.getElementById("cart-shipping");
  const totalText = document.getElementById("cart-total");

  function updateCartTotals(cart) {
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += item.price * item.quantity;
    });

    let shipping = subtotal > 0 ? 10 : 0;
    let total = subtotal + shipping;

    if (subtotalText) subtotalText.textContent = `$${subtotal}`;
    if (shippingText) shippingText.textContent = `$${shipping}`;
    if (totalText) totalText.textContent = `$${total}`;
  }

  // Modularized component for Cart Item HTML
  function createCartItemHTML(item) {
    return `
      <div class="cart-item-image">
        <img src="${item.img}" alt="${item.title}" />
      </div>
      <div class="cart-item-details">
        <h2>${item.title}</h2>
        <p class="cart-item-price">$${item.price}</p>
      </div>
      <div class="cart-item-quantity">
        <div class="quantity-selector">
          <button type="button" class="qty-btn item-minus">—</button>
          <input type="number" class="item-qty" value="${item.quantity}" min="1" readonly />
          <button type="button" class="qty-btn item-plus">+</button>
        </div>
      </div>
      <div class="cart-item-total">
        <p class="item-total-price">$${item.price * item.quantity}</p>
      </div>
      <div class="cart-item-remove">
        <button type="button" class="remove-btn" aria-label="Remove item">&times;</button>
      </div>
    `;
  }

  function renderCart() {
    let cart = getLocalCart();

    if (cart.length === 0) {
      if (cartContainerLayout) cartContainerLayout.style.display = "none";
      if (emptyState) emptyState.style.display = "flex";
      return;
    }

    if (cartContainerLayout) cartContainerLayout.style.display = "";
    if (emptyState) emptyState.style.display = "none";
    if (!cartItemsList) return;

    cartItemsList.innerHTML = "";

    cart.forEach((item) => {
      const itemRow = document.createElement("article");
      itemRow.className = "cart-item";
      itemRow.setAttribute("data-product-id", item.id);

      itemRow.innerHTML = createCartItemHTML(item);

      const minusBtn = itemRow.querySelector(".item-minus");
      const plusBtn = itemRow.querySelector(".item-plus");
      const qtyField = itemRow.querySelector(".item-qty");
      const rowTotalText = itemRow.querySelector(".item-total-price");
      const removeBtn = itemRow.querySelector(".remove-btn");

      minusBtn.addEventListener("click", () => {
        let currentCart = getLocalCart();
        const activeItem = currentCart.find((i) => i.id === item.id);
        if (activeItem && activeItem.quantity > 1) {
          activeItem.quantity -= 1;
          qtyField.value = activeItem.quantity;
          rowTotalText.textContent = `$${activeItem.price * activeItem.quantity}`;
          saveLocalCart(currentCart);
          updateCartTotals(currentCart);
        }
      });

      plusBtn.addEventListener("click", () => {
        let currentCart = getLocalCart();
        const activeItem = currentCart.find((i) => i.id === item.id);
        if (activeItem) {
          activeItem.quantity += 1;
          qtyField.value = activeItem.quantity;
          rowTotalText.textContent = `$${activeItem.price * activeItem.quantity}`;
          saveLocalCart(currentCart);
          updateCartTotals(currentCart);
        }
      });

      removeBtn.addEventListener("click", () => {
        let currentCart = getLocalCart();
        currentCart = currentCart.filter((i) => i.id !== item.id);
        saveLocalCart(currentCart);
        renderCart();
      });

      cartItemsList.appendChild(itemRow);
    });

    updateCartTotals(cart);
  }

  renderCart();

  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      showToast("Proceeding to checkout...");
    });
  }
}

const careCards = document.querySelectorAll(".care-card-item");
if (careCards.length > 0) {
  careCards.forEach((card) => {
    const trigger = card.querySelector(".care-summary-trigger");
    if (trigger) {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        card.classList.toggle("active");
      });
    }
  });
}
