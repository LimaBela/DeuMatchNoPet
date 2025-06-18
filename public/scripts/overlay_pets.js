async function abrirOverlay() 
{
    console.log('Iniciando abrirOverlay');

  console.log('Carregando espécies...');
  await carregarEspecies();
  console.log('Espécies carregadas!');

  console.log('Carregando raças...');
  await carregarRacas();
  console.log('Raças carregadas!');

  document.getElementById('overlayPet').classList.remove('d-none');
  console.log('Overlay aberto');
}

function fecharOverlay() 
{
    document.getElementById('overlayPet').classList.add('d-none');
}

async function carregarEspecies() 
{
    console.log('11111');
    const res = await fetch('/animal/especies', 
    { 
        credentials: 'include', 
        headers: 
        {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
        }
    });
    console.log('22222');
    const especies = await res.json();
    console.log('33333');

    new TomSelect('#select-especies', {
      create : false,
      valueField: 'id_especie',
      labelField: 'nome_especie',
      searchField: ['nome_especie'],
      options: especies,
      preload: true,
      placeholder: 'Digite ou escolha uma espécie',
    });

    console.log('Especies recebidas:', especies);
}

async function carregarRacas() 
{
    
    const res = await fetch('/animal/racas', { credentials: 'include'});
    console.log('2222');
    const racas = await res.json();
    console.log('33333');

    new TomSelect('#select-racas', {
      create : false,
      valueField: 'id_raca',
      labelField: 'nome_raca',
      searchField: ['nome_raca'],
      options: racas,
      preload: true,
      placeholder: 'Digite ou escolha uma raca',
    });

    console.log('Racas recebidas:', racas);
}

