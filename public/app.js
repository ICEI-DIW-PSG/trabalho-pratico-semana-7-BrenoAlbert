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

$(document).ready(function () {
  const container = $("#cards-container");

  dados.forEach(item => {
    const card = `
      <div class="col-12 col-sm-6 col-md-4 mb-4">
        <div class="card board-card shadow-sm" data-id="${item.id}">
          <a href="#">
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

  $(document).on("click", ".board-card", function () {
    const id = $(this).data("id");
    window.location.href = `detalhes.html?id=${id}`;
  });
});