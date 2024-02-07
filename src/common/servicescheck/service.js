import { Checkbox, CheckboxGroup,Stack } from '@chakra-ui/react'
const CheckServices=()=>{
    return(
        <Stack spacing={5} direction='row'>
  <Checkbox colorScheme='green' defaultChecked>
    Imternet
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    Telefono
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    Agua Potable
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    Guardia24h
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    Electricidad
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    TvCable
  </Checkbox>
</Stack>

    );
}
export default CheckServices;