const dados = [
  {
    id: 1,
    imagem: "img/clipboard-list.png",
    titulo: "Minha Lista",
    categoria: "Lista de Tarefas",
    data: "2025-03-30",
    autor: "Usuário 123",
    descricao: "Este template interativo te ajuda a organizar suas tarefas da forma mais dinâmica."
  },
  {
    id: 2,
    imagem: "img/people-group.png",
    titulo: "Projetos Pessoais",
    categoria: "Organização",
    data: "2025-04-10",
    autor: "Usuário 456",
    descricao: "Planeje e acompanhe o progresso de seus projetos pessoais."
  },
  {
    id: 3,
    imagem: "img/clipboard-list.png",
    titulo: "Estudos",
    categoria: "Acadêmico",
    data: "2025-05-01",
    autor: "Usuário 789",
    descricao: "Gerencie suas tarefas de estudo com praticidade."
  }
];

// Lê o valor de um parâmetro da URL
function getParametroUrl(nome) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nome);
}

$(document).ready(function () {
  // Página inicial (index.html)
  if ($("#cards-container").length) {
    const container = $("#cards-container");

    dados.forEach(item => {
      const card = `
        <div class="col-12 col-sm-6 col-md-4 mb-4">
          <div class="card board-card shadow-sm" data-id="${item.id}">
            <a href="detalhes.html?id=${item.id}">
              <img src="${item.imagem}" class="img-fluid board-img" alt="${item.titulo}">
            </a>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <span>${item.titulo}</span>
              <button class="btn btn-sm btn-outline-dark rounded-circle">★</button>
            </div>
          </div>
        </div>
      `;
      container.append(card);
    });
  }

  // Página de detalhes (detalhes.html)
  if ($("#item-titulo").length) {
    const id = parseInt(getParametroUrl("id"));
    const item = dados.find(d => d.id === id);

    if (item) {
      $("#item-imagem").attr("src", item.imagem);
      $("#item-titulo").text(item.titulo);
      $("#item-info").text(`${item.categoria} • ${item.data} • ${item.autor}`);
      $("#item-descricao").text(item.descricao);
    } else {
      $("main").html("<h4 class='text-center text-danger'>Item não encontrado.</h4>");
    }

    // Botão voltar
    $("#btn-voltar").on("click", function () {
      window.location.href = "index.html";
    });
  }
});