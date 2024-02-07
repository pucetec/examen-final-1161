import React,{useState} from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import './publicationtype.css'
const SelectPublicationType=({onChange})=>{
    const [publicationtype, setPublicationType] = useState(null);
    const handlePublicationTypeonChange=(value)=>{
        if(publicationtype === value){  
            setPublicationType(null);
        }else{
            setPublicationType(value);
            onChange(value);
        }
    }
    return(
        <ButtonGroup spacing={10}> 
        <span>
            <span>Arriendo</span>
        <Button onClick={()=>handlePublicationTypeonChange("arriendo")}
        variant={publicationtype === "arriendo" ? "solid":"outline"} 
        colorScheme={publicationtype==="arriendo" ? "blue":"gray"}
            size={"sm"}
            p={0}
            w={"30px"}
            h={"30px"}
            _hover={{bg:"blue.300"}}
            >
                </Button>
            <span>Venta</span> 
            <Button onClick={()=>handlePublicationTypeonChange("venta")}
            variant={publicationtype === "venta" ? "solid":"outline"}

        colorScheme={publicationtype==="venta" ? "blue":"gray"}
            size={"sm"}
            p={0}
            w={"30px"}
            h={"30px"}
            _hover={{bg:"blue.300"}}
            >
                </Button> 
        </span>
             
        </ButtonGroup>
    
    );

}
export default SelectPublicationType;