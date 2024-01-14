import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        outline: none;
    }

    ::-webkit-scrollbar {
    width: 12px; /* Largura da barra de rolagem */
    }

    ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #d62400, #e75018, #ff8b00, #ffac00, #ffc733); /* Efeito degradê com 5 cores */
    border-radius: 6px; /* Borda arredondada do "ponteiro" */
    box-shadow: 6px 6px 10px #d62400; /* Brilho com sombra da mesma cor */
    }

    ::-webkit-scrollbar-thumb:hover {
    background-color: #f22e07;
    }

    ::-webkit-scrollbar-track {
    background-color: #461c0e; /* Cor da trilha da barra de rolagem */
    }

    /* Para navegadores Gecko (Firefox) */
  ::-moz-scrollbar {
    width: 12px; /* Largura da barra de rolagem */
    }

    ::-moz-scrollbar-thumb {
    background-color: #3498db; /* Cor do "ponteiro" da barra de rolagem */
    border-radius: 6px; /* Borda arredondada do "ponteiro" */
  }


  ::-moz-scrollbar-track {
    background-color: #f1f1f1; /* Cor da trilha da barra de rolagem */
  }

  /* Estilos para dispositivos móveis */
@media screen and (max-width: 767px) {
  ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem reduzida para dispositivos móveis */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d62400; /* Cor do "ponteiro" da barra de rolagem */
    border-radius: 4px; /* Borda arredondada do "ponteiro" reduzida para dispositivos móveis */
    box-shadow: 0 0 4px #d62400; /* Brilho com sombra da mesma cor */
  }

  ::-webkit-scrollbar-track {
    background-color: #461c0e; /* Cor da trilha da barra de rolagem */
  }

  ::-moz-scrollbar {
    width: 8px; /* Largura da barra de rolagem reduzida para dispositivos móveis */
  }

  ::-moz-scrollbar-thumb {
    background-color: #3498db; /* Cor do "ponteiro" da barra de rolagem */
    border-radius: 4px; /* Borda arredondada do "ponteiro" reduzida para dispositivos móveis */
  }

  ::-moz-scrollbar-track {
    background-color: #f1f1f1; /* Cor da trilha da barra de rolagem */
  }

}
`
