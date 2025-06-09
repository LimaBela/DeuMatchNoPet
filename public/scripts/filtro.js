function adicionarFiltro() {
    const filtro = document.getElementById('filtroSelect').value;
    const filtroTexto = document.getElementById('filtroSelect').selectedOptions[0]?.text;
    const valor = document.getElementById('valorInput').value.trim();

    if (!filtro || !valor) {
        alert('Selecione um filtro e informe um valor.');
        return;
    }

    const container = document.getElementById('filtrosSelecionados');

    const badge = document.createElement('div');
    badge.className = 'badge-filtro';

    badge.innerHTML = `
    <span><strong>${filtroTexto}:</strong> ${valor}</span>
    <span class="remove" onclick="this.parentElement.remove()">✖</span>
    <input type="hidden" name="filtros[]" value="${filtro}:${valor}">
  `;

    container.appendChild(badge);

    // Limpa o input
    document.getElementById('valorInput').value = '';
    document.getElementById('filtroSelect').value = '';
}
