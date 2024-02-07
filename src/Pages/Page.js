import { useInfoContext } from '../context/InfoContext';
import SelectButton from '../common/Buttons/RadioButton';
import ServicesCheckBox from '../component/Service/CheckBox';
import PopUpView from '../component/Modal/PopUP';


const Page = () => {
  const {formData, selectOption, setSelectOption, selectedServices, setSelectedServices, handleInputChange, handleImageChange} = useInfoContext();

  return (
    <div style={{ paddingLeft: '20px' }}>
      <h1>Formulario de Propiedad</h1>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Titulo: </h3>
        <input name="titulo" value={formData.titulo} onChange={handleInputChange}></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Metros<br></br>cuadrados: </h3>
        <input name="metrosCuadrados" value={formData.metrosCuadrados} onChange={handleInputChange}></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Precio: </h3>
        <input name="precio" value={formData.precio} onChange={handleInputChange}></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Baños: </h3>
        <input name="baños" value={formData.baños} onChange={handleInputChange}></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Año de<br></br>Antiguedad: </h3>
        <input name="antiguedad" value={formData.antiguedad} onChange={handleInputChange}></input>
      </div> 
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Telefono<br></br>de contacto: </h3>
        <input name="telefonoContacto" value={formData.telefonoContacto} onChange={handleInputChange}></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Imagen 1: </h3>
        <input type="file" onChange={(e) => handleImageChange(e, 'imagen1')} ></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Imagen 2: </h3>
        <input type="file" onChange={(e) => handleImageChange(e, 'imagen2')} ></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Direccion: </h3>
        <input name="direccion" value={formData.direccion} onChange={handleInputChange}></input>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Tipo de<br></br>Publicacion: </h3>
        <SelectButton selectOption={selectOption} setSelectOption={setSelectOption}></SelectButton>
      </div>
      <br></br>
      <div style={{ display: "flex" }}>
        <h3 style={{ minWidth: "150px" }}>Descripcion: </h3>
        <input name="descripcion" value={formData.descripcion} onChange={handleInputChange}></input>
      </div>
      <br></br>
      <ServicesCheckBox selectedServices={selectedServices} setSelectedServices={setSelectedServices}></ServicesCheckBox>
      <br></br>
      <PopUpView formData={formData} selectOption={selectOption} selectedServices={selectedServices}></PopUpView>
    </div>
  );
}

export default Page;