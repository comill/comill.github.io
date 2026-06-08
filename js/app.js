// Minimal client app: render header/footer, sample products, and WhatsApp integration
(function () {
    const headerHtml = `
    <header class="site-header">
      <div class="container" style="display:flex;align-items:center;justify-content:space-between;gap:1rem">
        <a href="/"><span class="logo">Citco</span></a>
        <nav class="nav"><a href="./about.html">About</a> | <a href="./products.html">Products</a> | <a href="./manufacturing.html">Process</a> | <a href="./certifications.html">Certifications</a> | <a href="./contact.html">Contact</a></nav>
      </div>
    </header>`;

    const footerHtml = `<footer><div class="container">© CITCO Coconut Oil — Traditional Kerala Coconut Oil Since 1954</div></footer>`;

    document.getElementById('header') && (document.getElementById('header').innerHTML = headerHtml);
    document.getElementById('footer') && (document.getElementById('footer').innerHTML = footerHtml);

    const products = [
        { id: 'p1', name: '500 ml PET Bottle', cap: '500 ml', img: './assets/product-images/product-500ml-bottle.png' },
        { id: 'p2', name: '500 ml Pouch', cap: '500 ml', img: './assets/product-images/product-500ml-pouch.png' },
        { id: 'p3', name: '900 ml PET Bottle', cap: '900 ml', img: './assets/product-images/product-1l-bottle.png' },
        { id: 'p4', name: '900 ml Pouch', cap: '900 ml', img: './assets/product-images/product-1l-pouch.png' },
        { id: 'p5', name: '2 Litre PET Bottle', cap: '2 L', img: './assets/product-images/product-2l-bottle.png' },
        { id: 'p5', name: '2 Litre Plastic Container', cap: '2 L', img: './assets/product-images/product-2l-container.png' },
        { id: 'p6', name: '3 Litre Plastic Container', cap: '3 L', img: './assets/product-images/product-3l-container.png' },
        { id: 'p7', name: '5 Litre Plastic Container', cap: '5 L', img: './assets/product-images/product-2l-container.png' }
    ];

    function renderProducts(el) {
        if (!el) return;
        el.innerHTML = products.map(p => `<article class="product-card"><img class="product-img" src="${p.img}" alt="${p.name}" /><h3>${p.name}</h3><p>Capacity: ${p.cap}</p><p><button data-name="${p.name}" class="btn primary order">Order on WhatsApp</button></p></article>`).join('');
        el.querySelectorAll('.order').forEach(btn => btn.addEventListener('click', () => openWhatsApp(btn.dataset.name)));
    }

    function openWhatsApp(productName) {
        const phone = '+919447030159';
        const text = encodeURIComponent(`Hello CITCO,\nI would like to enquire about ${productName}.`);
        const url = `https://wa.me/${phone.replace(/\D/g, '')}?text=${text}`;
        window.open(url, '_blank');
    }

    renderProducts(document.getElementById('featured-products'));
    renderProducts(document.getElementById('product-list'));

    // Floating WhatsApp button
    const wa = document.createElement('a');
    wa.className = 'whatsapp-float';
    wa.href = 'https://wa.me/919447030159?text=' + encodeURIComponent('Hello CITCO, I would like to enquire about your coconut oil products.');
    wa.target = '_blank';
    wa.rel = 'noopener noreferrer';
    wa.innerText = 'WhatsApp';
    document.body.appendChild(wa);

    // Hook for header order button
    const orderBtn = document.getElementById('whatsapp-order');
    if (orderBtn) orderBtn.addEventListener('click', (e) => { e.preventDefault(); wa.click(); });
})();
