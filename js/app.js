const plantDatabase = {
  darlingtonia: {
    title: "Darlingtonia californica",
    price: "$100",
    img: "img/Darlingtonia.jpg",
    category: "carnivorous",
    desc: "Unique carnivorous plant with a cobra-like shape. Native to Northern California and Oregon, this striking species captures the imagination with its hollow hooded leaves and translucent fangs that trap foraging insects naturally.",
    height: '10" - 14" tall',
    pot: '6" Diameter',
    light: "Full Sun / Partial",
    water: "Distilled / Damp",
  },
  "hoya-carnosa": {
    title: "Hoya Carnosa",
    price: "$100",
    img: "img/hoya-carnosa.jpg",
    category: "indoor",
    desc: "Classic indoor trailing plant known as the porcelain flower. It produces beautiful, wax-like star clusters of sweetly scented pinkish flowers and features thick, deep green ornamental foliage perfect for hanging baskets.",
    height: '12" - 24" vine',
    pot: '6" Diameter',
    light: "Bright Indirect",
    water: "Allow to dry out",
  },
  philodendron: {
    title: "Philodendron",
    price: "$100",
    img: "img/philodendrom.jpeg",
    category: "tropical",
    desc: "Lush tropical plant featuring large, highly decorative heart-shaped leaves. Exceptionally easy to grow indoors, it brings a vibrant jungle ambiance to any living room corner while effectively purifying indoor air.",
    height: '14" - 20" tall',
    pot: '8" Diameter',
    light: "Medium Indirect",
    water: "Keep lightly moist",
  },
  syngonium: {
    title: "Pink Syngonium",
    price: "$100",
    img: "img/syngonium-rosa.jpg",
    category: "indoor",
    desc: "Eye-catching indoor plant displaying stunning arrowhead leaves flushed with pastel pink hues. Compact as a young plant, it gracefully begins to trail over time, offering incredible contrast against green collections.",
    height: '8" - 12" tall',
    pot: '4" Diameter',
    light: "Bright Indirect",
    water: "Dry top inch",
  },
  "monstera-borsigiana": {
    title: "Monstera Borsigiana",
    price: "$100",
    img: "img/Monstera-Borsigiana.jpg",
    category: "tropical",
    desc: "Fast-growing and iconic tropical climber highly popular worldwide. Its dramatic, large fenestrated leaves develop quickly when provided vertical support like a moss pole, creating an undeniable architectural statement.",
    height: '20" - 30" tall',
    pot: '10" Diameter',
    light: "Bright Indirect",
    water: "Water thoroughly",
  },
  "aloe-aristata": {
    title: "Aloe aristata",
    price: "$100",
    img: "img/Aloe-aristata.jpg",
    category: "succulents",
    desc: "Hardy and beautifully patterned rosette succulent ideal for small indoor surfaces. Features deep green spear-shaped leaves covered in white raised bumps and soft lace-like spines along its geometric borders.",
    height: '5" - 7" tall',
    pot: '4" Diameter',
    light: "Direct / Bright",
    water: "Soak and dry completely",
  },
  maranta: {
    title: "Lemon Lime Maranta",
    price: "$100",
    img: "img/maranta-lima-naranja.jpg",
    category: "indoor",
    desc: "Stunning ornamental prayer plant with spectacular bright green neon veins running across its patterned foliage. Its leaves fold upwards during night hours, resembling hands folded together in a quiet prayer posture.",
    height: '6" - 10" spreading',
    pot: '6" Diameter',
    light: "Low to Medium Indirect",
    water: "Consistently moist",
  },
  sansevieria: {
    title: "Sansevieria",
    price: "$100",
    img: "img/sansevieria.jpg",
    category: "indoor",
    desc: "Unbeatably resilient snake plant characterized by rigid, sword-like jagged leaves growing upright. Renowned for surviving minimal care routines, it is the absolute perfect choice for novice plant parents.",
    height: '16" - 24" tall',
    pot: '6" Diameter',
    light: "Any light condition",
    water: "Every 2-3 weeks",
  },
  dracaena: {
    title: "Dracaena",
    price: "$100",
    img: "img/Dracaena.jpg",
    category: "indoor",
    desc: "Elegant and architectural ornamental tree-like houseplant featuring narrow arched ribbon leaves clustered over a slender woody stalk. Excellent for filling vertical structural gaps inside modern offices or empty rooms.",
    height: '24" - 36" tall',
    pot: '8" Diameter',
    light: "Moderate Indirect",
    water: "Allow top half to dry",
  },
  "helecho-boston": {
    title: "Boston Fern",
    price: "$100",
    img: "img/Helecho-Boston.jpg",
    category: "indoor",
    desc: "Classic lush green fern with soft arching fronds that produce a waterfall effect. Thrives beautifully in high humidity spaces like bathrooms and needs protection against harsh dry drafts to maintain its soft foliage.",
    height: '12" - 18" drop',
    pot: '8" Basket',
    light: "Filtered / Shaded",
    water: "Never allow to fully dry",
  },
  haworthia: {
    title: "Haworthia",
    price: "$100",
    img: "img/Haworthia.jpg",
    category: "succulents",
    desc: "Charmingly petite zebra-striped succulent forming tight rosettes of thick pointed leaves. Highly valued for remaining small and manageable, making it fantastic for sunny desktop configurations or terrariums.",
    height: '3" - 5" tall',
    pot: '3" Diameter',
    light: "Bright Indirect / Direct",
    water: "Minimal moisture",
  },
  "sedum-rubrotinctum": {
    title: "Sedum Rubrotinctum",
    price: "$100",
    img: "img/Sedum.jpg",
    category: "succulents",
    desc: "Whimsical creeping succulent famously referred to as the jelly bean plant. Its glossy rounded leaves display bright jade colors that dramatically blush into deep crimson tips when exposed to strong open sunshine.",
    height: '4" - 6" trail',
    pot: '4" Diameter',
    light: "Full direct sun",
    water: "Dry desert style",
  },
  alocasia: {
    title: "Alocasia Polly",
    price: "$100",
    img: "img/Alocasia-Polly.jpg",
    category: "tropical",
    desc: "Striking tropical species showcasing shield-shaped leaves accented by heavy metallic silver veins and wavy margins. An exotic centerpiece that immediately draws visual focus in high-end interiors.",
    height: '12" - 16" tall',
    pot: '6" Diameter',
    light: "Bright filtered light",
    water: 'Water when top 1" dries',
  },
  "nepenthes-rajah": {
    title: "Nepenthes Rajah",
    price: "$100",
    img: "img/Nepenthes-Rajah.jpg",
    category: "carnivorous",
    desc: "Magnificent exotic carnivorous pitcher plant highly sought after by premium collectors. It develops spectacular crimson traps hanging off leaf tendrils designed to hold fluids and capture insects in damp terrarium setups.",
    height: '8" - 12" wide',
    pot: '6" Net basket',
    light: "Filtered bright light",
    water: "Pure pure water only",
  },
  "begonia-amphioxus": {
    title: "Begonia Amphioxus",
    price: "$100",
    img: "img/Begonia-Amphioxus.jpg",
    category: "tropical",
    desc: "Rare exotic specimen displaying narrow pointed butterfly leaves completely speckled with vivid crimson dots. Requires enclosed humid atmospheres like glass domes or vivariums to successfully flourish.",
    height: '6" - 10" tall',
    pot: '4" Diameter',
    light: "Medium dappled shade",
    water: "Constant light dampness",
  },
  "calathea-musaica": {
    title: "Calathea Musaica",
    price: "$100",
    img: "img/Calathea-Musaica.jpg",
    category: "tropical",
    desc: "Intricate tropical foliage plant possessing a highly unusual network of fine mosaic checkerboard line patterns on light green leaves. Far sturdier than typical calatheas, it gracefully elevates plant shelves.",
    height: '10" - 14" tall',
    pot: '6" Diameter',
    light: "Medium shade indirect",
    water: "Keep uniformly damp",
  },
  "euphorbia-tirucalli": {
    title: "Euphorbia tirucalli",
    price: "$100",
    img: "img/Euphorbia-tirucalli.jpg",
    category: "succulents",
    desc: "Striking succulent shrub composed of coral-like cylindrical pencil branches growing upwards. Turns bright shades of yellow, orange, and fiery red at the tips when given intense, unfiltered direct greenhouse light.",
    height: '18" - 24" tall',
    pot: '6" Diameter',
    light: "Intense direct sun",
    water: "Sparingly adaptive",
  },
  tillandsia: {
    title: "Tillandsia",
    price: "$100",
    img: "img/Tillandsia.jpg",
    category: "tropical",
    desc: "Fascinating true air plant that grows naturally without soil substrates. Absorbs moisture directly through tiny silver scales covering its sculptural leaves. Simply dunk in filtered containers once a week.",
    height: '4" - 6" size',
    pot: "Mounted / Free",
    light: "Bright indirect air",
    water: "Weekly bath dunk",
  },
  fockea: {
    title: "Fockea",
    price: "$100",
    img: "img/Fockea.jpg",
    category: "succulents",
    desc: "Unique caudiciform plant forming a rough swelling base structure designed to retain precious moisture reserves. Slender vine branches spill outwards from the top center, making it a masterpiece choice for collectors.",
    height: '8" - 12" base tall',
    pot: '6" Shallow clay',
    light: "Bright sun focus",
    water: "Dry down completely",
  },
};

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
            price: 100,
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
          price: 100,
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

      itemRow.innerHTML = `
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
