const services = [
  {
    code: "LC",
    title: "Lavagem Completa Premium",
    category: "Estética Automotiva de Luxo",
    duration: "1h",
    price: "R$ 90,00"
  },
  {
    code: "EN",
    title: "Enceramento Profundo com Cera de Carnaúba",
    category: "Estética Automotiva de Luxo",
    duration: "1h30min",
    price: "R$ 180,00"
  },
  {
    code: "PC",
    title: "Polimento Técnico de Carroceria",
    category: "Estética Automotiva de Luxo",
    duration: "2h",
    price: "R$ 250,00"
  },
  {
    code: "HI",
    title: "Higienização Interna com Ozônio",
    category: "Estética Automotiva de Luxo",
    duration: "1h15min",
    price: "R$ 150,00"
  },
  {
    code: "LE",
    title: "Lavagem + Enceramento Premium",
    category: "Estética Automotiva de Luxo",
    duration: "1h30min",
    price: "R$ 220,00"
  },
  {
    code: "VC",
    title: "Vitrificação de Pintura com Tecnologia Nanocerâmica",
    category: "Proteção e Acabamento",
    duration: "4h",
    price: "R$ 850,00"
  },
  {
    code: "CR",
    title: "Cristalização Hidrofóbica de Vidros",
    category: "Proteção e Acabamento",
    duration: "40min",
    price: "R$ 120,00"
  },
  {
    code: "RH",
    title: "Revitalização e Hidratação de Couro Premium",
    category: "Detalhamento de Interior",
    duration: "1h30min",
    price: "R$ 200,00"
  },
  {
    code: "DT",
    title: "Detalhamento Técnico Externo e Interno",
    category: "Detalhamento Completo",
    duration: "5h",
    price: "R$ 1.200,00"
  },
  {
    code: "FP",
    title: "Fluorinação de Pintura - Ultra Brilho e Proteção UV",
    category: "Proteção e Acabamento",
    duration: "3h",
    price: "R$ 650,00"
  },
  {
    code: "AE",
    title: "Aplicação de Película de Controle Solar",
    category: "Conforto e Estilo",
    duration: "2h",
    price: "R$ 350,00"
  }
];


function verificarPagina() {
  const path = window.location.pathname;
  const pagina = path.split('/').pop();
  return pagina;
}


function navegarPara(pagina) {
  window.location.href = pagina;
}


document.addEventListener('DOMContentLoaded', function() {
  const paginaAtual = verificarPagina();
  

  if (paginaAtual === 'index.html' || paginaAtual === '') {
    const container = document.getElementById("services");
    const btnNovoAgendamento = document.querySelector('.btn.amber');
    const btnMinhasReservas = document.querySelector('.btn.dark');
    
 
    if (btnNovoAgendamento) {
      btnNovoAgendamento.addEventListener('click', function() {
        navegarPara('agendamento.html');
      });
    }
    
    if (btnMinhasReservas) {
      btnMinhasReservas.addEventListener('click', function() {
        navegarPara('minhaReserva.html');
      });
    }
    
   
    if (container) {
      services.forEach(service => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div class="card-header">
            <div class="card-code">${service.code}</div>
            <button class="reserve-btn">Reservar</button>
          </div>
          <h3>${service.title}</h3>
          <p><strong>Categoria:</strong> ${service.category}</p>
          <p><strong>Duração:</strong> ${service.duration}</p>
          <p><strong>Preço:</strong> ${service.price}</p>
        `;
        container.appendChild(card);
        
       
        const reserveBtn = card.querySelector('.reserve-btn');
        reserveBtn.addEventListener('click', function() {
    
          localStorage.setItem('servicoSelecionado', service.code);
          navegarPara('agendamento.html');
        });
      });
    }
  }
  

  else if (paginaAtual === 'agendamento.html') {
    const voltarBtn = document.getElementById('voltarBtn');
    const formulario = document.getElementById('reservaForm');
    const servicoSelect = document.getElementById('servico');
    

    const servicoSelecionado = localStorage.getItem('servicoSelecionado');
    if (servicoSelecionado && servicoSelect) {
      servicoSelect.value = servicoSelecionado;

      localStorage.removeItem('servicoSelecionado');
    }
    

    if (voltarBtn) {
      voltarBtn.addEventListener('click', function() {
        navegarPara('index.html');
      });
    }
    

    if (formulario) {
      formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
   
        const formData = new FormData(formulario);
        const reserva = {
          nome: formData.get('nome'),
          telefone: formData.get('telefone'),
          servico: formData.get('servico'),
          data: formData.get('data'),
          horario: formData.get('horario'),
          veiculo: formData.get('veiculo'),
          observacoes: formData.get('observacoes')
        };
        
     
        const reservasAnteriores = JSON.parse(localStorage.getItem('reservas') || '[]');
        reservasAnteriores.push(reserva);
        localStorage.setItem('reservas', JSON.stringify(reservasAnteriores));
        
        alert('Reserva realizada com sucesso!');
        navegarPara('minhaReserva.html');
      });
    }
  }
  

  else if (paginaAtual === 'minhaReserva.html') {
    const voltarBtn = document.getElementById('voltarBtn');
    const novoAgendamentoBtn = document.getElementById('novoAgendamentoBtn');
    

    if (voltarBtn) {
      voltarBtn.addEventListener('click', function() {
        navegarPara('index.html');
      });
    }
    
    if (novoAgendamentoBtn) {
      novoAgendamentoBtn.addEventListener('click', function() {
        navegarPara('agendamento.html');
      });
    }
    

    const botoesReserva = document.querySelectorAll('.reserve-btn');
    botoesReserva.forEach(botao => {
      botao.addEventListener('click', function() {
        if (botao.textContent === 'Cancelar') {
          if (confirm('Deseja realmente cancelar esta reserva?')) {

            botao.closest('.card').remove();
          }
        } else if (botao.textContent === 'Agendar Novamente') {
          navegarPara('agendamento.html');
        }
      });
    });
  }
});
