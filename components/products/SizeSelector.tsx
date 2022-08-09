import { Box, Button } from "@mui/material";
import { FC, MouseEventHandler } from "react"
import { ISize } from '../../interfaces/product';

interface Props {
    selectedSize?: ISize
    sizes: ISize[]
    onClick:  (size: ISize) => void 
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes, onClick }) => {
    return (
        <Box>
            {
                sizes.map((size) =>
                (

                    <Button
                        key={size}
                        size='small'
                        color={selectedSize == size ? 'primary' : 'info'}
                        onClick={()=> { onClick( size ) }}

                    >
                        {size}  
                    </Button>

                ))
            }
        </Box>
    )
}
