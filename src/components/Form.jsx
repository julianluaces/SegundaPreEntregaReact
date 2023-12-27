import React from 'react'
import { Input, Button } from '@chakra-ui/react'
const Form = () => {

    const handleSubmit = () => {


    }

    
  return (
    <div>
        
        <form action="" onSubmit={handleSubmit}>

            <Input placeholder='Nombre y Apellido'></Input>
            <Input placeholder='Correo Electronico'></Input>
            <Button colorScheme='linkedin' type='submit'>Enviar</Button>

        </form>

    </div>
  )
}

export default Form