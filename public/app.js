
$(document).ready(function() {
  $(".board-card").click(function() {
    const id = $(this).data("id"); // pega o ID do card clicado
    window.location.href = `detalhes.html?id=${id}`; // redireciona com parâmetro
  });
});

