// Lista de produtos
const PRODUCTS = [
  {
    id: "pack-01",
    title: "📦 Pack Astra Designer – Edição Exclusiva",
    description: `O Pack Astra Designer é o recurso ideal para quem busca elevar a qualidade das suas artes com praticidade e variedade. São mais de 2GB de materiais organizados em categorias exclusivas, prontos para uso em banners, logos, posts, capas e muito mais.

✨ O que você vai encontrar no pack:
- Brushes, efeitos e texturas de alta qualidade
- PNGs, fundos e elementos prontos para edição
- Pastas bem organizadas para agilizar seu fluxo de trabalho
- GIFs, rabiscos, papéis, nuvens, tintas e muito mais

⚡ Vantagens:
- Conteúdo exclusivo e completo em um só lugar
- Organização que facilita a criação rápida e eficiente
- Compatível com softwares como Photoshop, Photopea, GIMP e similares

⚠️ Avisos importantes:
- Uso exclusivo do comprador (proibido repasse ou revenda)
- A Astra Designer não se responsabiliza por uso indevido
- Após a compra, o pack é seu para sempre`,
    img: "https://cdn.discordapp.com/attachments/1387260913551151264/1408484292698308711/1755699104634.png?ex=68a9e8b7&is=68a89737&hm=502feab8a006a7feac55270cea7af4af8c26ab1c4605f29ec80fce6b8c5b2d5c&",
    pixId: "0aae73b2-fe81-4b54-813b-3834834c725e",
    qrcodeUrl: "https://public-blob.squarecloud.dev/852603072026247220/29834512706_men5nk0j-ecc5.png",
    price: "R$ 7,00"
  },
  {
    id: "pack-02",
    title: "🔤 Pack de Fontes Astra",
    description: `O Pack de Fontes Astra reúne mais de 840 fontes exclusivas em diversos estilos e formatos (TTF, OTF, FON, WOFF, SVG). Uma coleção completa para designers que buscam variedade e praticidade em projetos como logos, banners, capas e identidades visuais.

✨ Destaques:
- +840 fontes modernas, criativas e profissionais
- Estilos variados: manuscritas, minimalistas, futuristas e muito mais
- Instalação simples e compatível com qualquer software de design
- Organização prática para agilizar seu trabalho

⚠️ Importante:
- Uso exclusivo do comprador (proibido repasse/revenda)
- Após a compra, o pack é seu para sempre`,
    img: "https://cdn.discordapp.com/attachments/1387260913551151264/1408485237649834075/1755741708691.png?ex=68a9e999&is=68a89819&hm=c0bec424807ffa649bb80aa4824e0678ee0b78dc54d91ef82c11e620539ce829&",
    pixId: "0aae73b2-fe81-4b54-813b-3834834c725e",
    qrcodeUrl: "https://public-blob.squarecloud.dev/852603072026247220/29834512706_men5nk0j-ecc5.png",
    price: "R$ 2,50"
  },
  {
    id: "pack-03",
    title: "Pack Bolha Astra Designer",
    description: `O Pack Bolha Astra Designer traz mais de 1GB de recursos exclusivos para criação de banners no estilo bolha, com tudo que você precisa para agilizar e profissionalizar suas artes.

✨ Destaques do Pack:
- Arcos, bolhas prontas e quase feitas
- Personagens, PNGs e ícones privados
- Textos, efeitos, brilhos e iluminações
- Logos e elementos variados para compor artes únicas

⚡ Vantagens:
- Organização prática em pastas temáticas
- Conteúdo pronto para uso em softwares de design
- Ideal para criação de banners criativos e chamativos

⚠️ Importante:
- Uso exclusivo do comprador (proibido repasse ou revenda)`,
    img: "https://cdn.discordapp.com/attachments/1387260913551151264/1408486081686540368/1755731305300.png?ex=68a9ea62&is=68a898e2&hm=7aaabdf2c87a5c9966b052280d1486918472b2d6d0e69dc5ff49fd4658285c5a&",
    pixId: "0aae73b2-fe81-4b54-813b-3834834c725e",
    qrcodeUrl: "https://public-blob.squarecloud.dev/852603072026247220/29834512706_men5nk0j-ecc5.png",
    price: "R$ 4,50"
  },
  {
    id: "pack-04",
    title: "🔤 Pack Completo",
    description: `✨ O que vem incluso:
🎨 Pack Astra Designer: brushes, fundos, texturas, efeitos, PNGs, iluminações e muito mais.
🔤 Pack de Fontes Astra: +840 fontes modernas, criativas e organizadas em diversos estilos.
💎 Pack Bolha Astra Designer: arcos, bolhas, brilhos, personagens e elementos prontos para banners.
⚡ Vantagens:
Mais de 3.000 recursos prontos para uso
Organização prática em pastas temáticas
Compatível com os principais softwares de design
Um dos pacotes mais completos do mercado
⚠️ Importante:
Uso exclusivo do comprador (proibido repasse ou revenda).`,
    img: "https://cdn.discordapp.com/attachments/1387260913551151264/1408486232836669561/1755743072257.png?ex=68a9ea86&is=68a89906&hm=b0961bc8444acd68c281618ab08125233856f8d344c3ad35285641254fd83611&",
    pixId: "0aae73b2-fe81-4b54-813b-3834834c725e",
    qrcodeUrl: "https://public-blob.squarecloud.dev/852603072026247220/29834512706_men5nk0j-ecc5.png",
    price: "R$ 10,00"
  }
];

// Renderizar produtos na grid
const grid = document.querySelector(".grid");
grid.innerHTML = PRODUCTS.map(p => `
  <div class="card">
    <div class="card__img" style="background-image:url('${p.img}')"></div>
    <div class="card__title">${p.title}</div>
    <p style="color:var(--muted);font-size:.9rem;margin:.2em 0 .6em">${p.description}</p>
    <div class="card__price">${p.price}</div>
    <div class="card__actions">
      <button class="btn btn--primary" data-buy="${p.id}">Comprar Agora</button>
    </div>
  </div>
`).join("");

// Abrir modal Pix
document.querySelectorAll("[data-buy]").forEach(btn => {
  btn.addEventListener("click", () => {
    const product = PRODUCTS.find(p => p.id === btn.dataset.buy);
    openPixModal(product);
  });
});

function openPixModal(product) {
  const el = document.getElementById("pix-content");

  // Gera a key única para o usuário
  const generatedKey = cryptoRandom(12);

  el.innerHTML = `
    <h3>${product.title}</h3>
    <div class="pix__grid">
      <div class="pix__qr">
        <img src="${product.qrcodeUrl}" alt="QR Code Pix">
      </div>
      <div class="pix__data">
        <p><strong>Chave Pix (UUID):</strong> ${product.pixId}</p>
        <p class="pix__hint">Após concluir o pagamento, clique abaixo:</p>
        <button class="btn btn--primary" id="confirm-pix">Já paguei</button>
        <div id="post-confirm" style="display:none; margin-top:10px;">
          <p>🔑 Sua Key: <code id="key-value">${generatedKey}</code></p>
          <p class="pix__hint">Abra um ticket no nosso Discord e informe sua Key para receber o produto.</p>
        </div>
      </div>
    </div>
  `;

  document.getElementById("pix-modal").classList.remove("hidden");

  // Evento de confirmação
  document.getElementById("confirm-pix").addEventListener("click", async () => {
    document.getElementById("post-confirm").style.display = "block";

    // Envia os dados para o webhook do Discord
    const webhookUrl = "https://discord.com/api/webhooks/1408521414067228742/fJyuBtT0k7Kha87K24H4pv3wny7w_Xu-zFgclbl6lpb6csh6jw7rknFh9HzLCNoaFKfS"; // Substitua pelo seu webhook
    const data = {
      content: `📦 Nova compra confirmada!\nProduto: **${product.title}**\nPreço: **${product.price}**\nKey do usuário: \`${generatedKey}\`\nTimestamp: ${new Date().toISOString()}`
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error("Erro ao enviar webhook");
      console.log("Webhook enviado com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Ocorreu um erro ao enviar os dados para o Discord.");
    }
  });
}

// Fechar modal
document.querySelector(".modal__close").addEventListener("click", () => {
  document.getElementById("pix-modal").classList.add("hidden");
});

// Função para gerar Key aleatória
function cryptoRandom(length){
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for(let i=0;i<length;i++){result+=chars.charAt(Math.floor(Math.random()*chars.length));}
  return result;
}