import { Input } from '@chakra-ui/react'

const CustomTextInput =({value,onChange,placeholder})=>{
    return(
        <Input htmlSize={20} width='auto' mb={6} ml={6} mt={1}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}/>
    );
}

export default CustomTextInput;