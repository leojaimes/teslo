import { AccountCircleOutlined, AddCircleOutlineOutlined, RemoveCircleOutlineOutlined } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"
import { textAlign } from "@mui/system"
import { FC } from "react"



interface Props {

}
export const ItemCounter: FC<Props> = () => {
    return (
        <Box
            display={'flex'}
            alignItems='center'


        >
            <IconButton>
                <RemoveCircleOutlineOutlined />
            </IconButton>

            <Typography
                sx={{
                    width: '40px',
                    textAlign: 'center',

                }}
            > 1 </Typography>

            <IconButton>
                <AddCircleOutlineOutlined />
            </IconButton>

        </Box>
    )
}
