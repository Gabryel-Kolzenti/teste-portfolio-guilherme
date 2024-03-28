const sobreMim1 = document.querySelector('#sobreMim');
const projetos1 = document.querySelector('#projetos');
const contato1 = document.querySelector('#contato');

const buttonSobreMim = document.querySelector('#sobreMim1')
const buttonProjetos = document.querySelector('#projetos1')
const buttonContato = document.querySelector('#contato1')

buttonSobreMim.addEventListener('click', () => {
  sobreMim1.classList.remove('desaparecer');
  sobreMim1.classList.add('aparecer');

  projetos1.classList.add('desaparecer');
  contato1.classList.add('desaparecer');
  projetos1.classList.remove('aparecer');
  contato1.classList.remove('aparecer');
})

buttonProjetos.addEventListener('click', () => {
  projetos1.classList.remove('desaparecer');
  projetos1.classList.add('aparecer');

  sobreMim1.classList.add('desaparecer');
  contato1.classList.add('desaparecer');
  sobreMim1.classList.remove('aparecer');
  contato1.classList.remove('aparecer');
})

buttonContato.addEventListener('click', () => {
  contato1.classList.remove('desaparecer');
  contato1.classList.add('aparecer');

  sobreMim1.classList.add('desaparecer');
  projetos1.classList.add('desaparecer');
  projetos1.classList.remove('aparecer');
  sobreMim1.classList.remove('aparecer');
})
