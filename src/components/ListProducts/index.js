import React from 'react';
import edit from '../../images/edit.svg';
import deleteItem from '../../images/deleteItem.svg';

const arr = [
  { 
    'id': 1234,
    'name': 'Advansept Gliconato de Clorexidina 1%', 
    'qtdEstoque': 200, 
    'qtdMin': 50
  },
  { 
    'id': 1234,
    'name': 'Advansept Gliconato de Clorexidina 1%', 
    'qtdEstoque': 200, 
    'qtdMin': 50
  },
  { 
    'id': 1234,
    'name': 'Advansept Gliconato de Clorexidina 1%', 
    'qtdEstoque': 200, 
    'qtdMin': 50
  },
  { 
    'id': 1234,
    'name': 'Advansept Gliconato de Clorexidina 1%', 
    'qtdEstoque': 200, 
    'qtdMin': 50
  },
  { 
    'id': 1234,
    'name': 'Advansept Gliconato de Clorexidina 1%', 
    'qtdEstoque': 200, 
    'qtdMin': 50
  },
  { 
    'id': 1234,
    'name': 'Advansept Gliconato de Clorexidina 1%', 
    'qtdEstoque': 200, 
    'qtdMin': 50
  },
  { 
    'id': 1234,
    'name': 'Advansept Gliconato de Clorexidina 1%', 
    'qtdEstoque': 200, 
    'qtdMin': 50
  },
  { 
    'id': 1234,
    'name': 'Advansept Gliconato de Clorexidina 1%', 
    'qtdEstoque': 200, 
    'qtdMin': 50
  },
  { 
    'id': 1234,
    'name': 'Advansept Gliconato de Clorexidina 1%', 
    'qtdEstoque': 200, 
    'qtdMin': 50
  },
  { 
    'id': 1234,
    'name': 'Advansept Gliconato de Clorexidina 1%', 
    'qtdEstoque': 200, 
    'qtdMin': 50
  }
]

class ListProducts extends React.Component {
  
  render() {
    return (
      <>
        {
          arr.map((prod) => {
            return (
              <div className={`diagram-project pb16`}>
              <div className={`bl br bt bb b--light-silver flex br3 items-center pa12`}>

                <div className={`w-10 pr16 br b--light-silver pb7 pt7`}>
                  <div className={`f10 light-silver`}>ID</div>
                  <div className={`f16 mine-shaft`}>{prod.id}</div>
                </div>

                <div className={`w-50 pr16 pl16 br b--light-silver pb7 pt7`}>
                  <div className={`f10 light-silver`}>Nome do produto</div>
                  <div className={`f16 mine-shaft`}>{prod.name}</div>
                </div>

                <div className={`w-15 pl16 pb7 pt7`}>
                  <div className={`f10 light-silver`}>Quantidade em estoque:</div>
                  <div className={`f16 mine-shaft`}>{prod.qtdEstoque}</div>
                </div>

                <div className={`w-15 pl16 bl b--light-silver pb7 pt7`}>
                  <div className={`f10 light-silver`}>Quantidade mínima:</div>
                  <div className={`f16 mine-shaft`}>{prod.qtdMin}</div>
                </div>

                <div className={`flex w-15 justify-around pl16 bl b--light-silver`}>
                  <div className={`pointer`}><img src={edit} alt="Editar"/></div>
                  <div className={`pointer`}><img src={deleteItem} alt="Deletar"/></div>
                </div>

              </div>
            </div>
          )
        }
      )
    }
    </>
    );
  }
}

export default ListProducts;