import Dropdown from 'react-bootstrap/Dropdown';
import './DropdownB.css'

function DropdownB() {
  return (
    <>
    <Dropdown className='dropdown-container'>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Boton de Despliegue
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Opcion 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Opcion 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Opcion 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
     <Dropdown className='dropdown-container'>
     <Dropdown.Toggle variant="success" id="dropdown-basic">
       Boton de Despliegue
     </Dropdown.Toggle>

     <Dropdown.Menu>
       <Dropdown.Item href="#/action-1">Opcion 1</Dropdown.Item>
       <Dropdown.Item href="#/action-2">Opcion 2</Dropdown.Item>
       <Dropdown.Item href="#/action-3">Opcion 3</Dropdown.Item>
     </Dropdown.Menu>
   </Dropdown></>
  );
}

export default DropdownB;