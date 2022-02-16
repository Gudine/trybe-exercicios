import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    const getKey = ({conteudo, bloco, status}) => `${conteudo}|${bloco}|${status}`;

    const listMap = (elem) => (<li key={getKey(elem)}>
      <div className='list-content'>O conteúdo é: {elem.conteudo}</div>
      <div className='list-status'>Status: {elem.status}</div>
      <div className='list-block'>Bloco: {elem.bloco}</div>
    </li>);

    return (<ul className='list'>
      {conteudos.map(listMap)}
    </ul>);
  }
}

export default Content;
