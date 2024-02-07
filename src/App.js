import React,{useState} from 'react';
import { Heading, Button } from '@chakra-ui/react';
import CustomTextInput from './common/text/texinput';
import SelectPublicationType from './common/tipeselect/publicationtype';
import CheckServices from './common/servicescheck/service';
import ModalComponet from './common/modal/modal';

const  App=()=> {
  const [title, setTitle] = useState('');
  const [metros, setMetros] = useState('');
  const [precio, setPrecio] = useState('');
  const [banio, setBanio] = useState('');
  const [antiguedad, setAntiguedad] = useState('');
  const [number, setNumber] = useState('');
  const [image, setImage] = useState('');
  const [image2, setImage2] = useState('');
  const [direction, setDirection] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [publicationtype, setPublicationType] = useState('');
  const [isOpen,SetIsOpen]=useState(false);
  const handlePublicationTypeonChange=(value)=>{
    setPublicationType(value);
  }
  const handleOpenModal=()=>{
    SetIsOpen(true);
  }
  const handleCloseModal=()=>{
    SetIsOpen(false);
  }
  return (
      <div>
      <Heading textAlign='center'>Formulario de Propiedad</Heading>
    
    Titulo <CustomTextInput
    placeholder='Ingrese titulo'
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    ></CustomTextInput>
    <br></br>
    Metros Cuadrados<CustomTextInput
    placeholder='Ingrese metros'
    value={metros}
    onChange={(e)=>setMetros(e.target.value)}
    ></CustomTextInput>
    <br></br>
    Precios<CustomTextInput
    placeholder='Ingrese precio'
    value={precio}
    onChange={(e)=>setPrecio(e.target.value)}
    ></CustomTextInput>
    <br></br>
    Baños<CustomTextInput
    placeholder='Ingrese cantidad'
    value={banio}
    onChange={(e)=>setBanio(e.target.value)}
    ></CustomTextInput>
    <br></br>
    Años de Antiguedad<CustomTextInput
    placeholder='Ingrese años'
    value={antiguedad}
    onChange={(e)=>setAntiguedad(e.target.value)}
    ></CustomTextInput>
    <br></br>
    Telefono de Contacto<CustomTextInput
    placeholder='Ingrese numero telefonico'
    value={number}
    onChange={(e)=>setNumber(e.target.value)}
    ></CustomTextInput>
    <br></br>
    Imagen 1<CustomTextInput
    placeholder='Ingrese link imagen 1'
    value={image}
    onChange={(e)=>setImage(e.target.value)}
    ></CustomTextInput>
    <br></br>
    Imagen 2<CustomTextInput
    placeholder='Ingrese link imagen 2'
    value={image2}
    onChange={(e)=>setImage2(e.target.value)}
    ></CustomTextInput>
    <br></br>
    Direccion<CustomTextInput
    placeholder='Direccion'
    value={direction}
    onChange={(e)=>setDirection(e.target.value)}
    ></CustomTextInput>
    <br></br>
    Tipo   <SelectPublicationType 
    onChange={handlePublicationTypeonChange}/>
    <br></br>
    Descripcion<CustomTextInput
    placeholder='descripcion'
    value={descripcion}
    onChange={(e)=>setDescripcion(e.target.value)}
    ></CustomTextInput>
    <br></br>
    Servicios <CheckServices/>
    <br></br>
    <Button colorScheme='blue'onClick={handleOpenModal}>ver</Button>
    <ModalComponet isOpen={isOpen} onClose={handleCloseModal}></ModalComponet>
    </div> 
       
  );
}

export default App;
