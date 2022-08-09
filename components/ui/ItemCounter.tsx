import { AccountCircleOutlined, AddCircleOutlineOutlined, RemoveCircleOutlineOutlined } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"
import { textAlign } from "@mui/system"
import { FC } from "react"



interface Props {
    value: number
    onClickMinus: () => void
    onClickPlus: () => void
}
export const ItemCounter: FC<Props> = ({ value = 1, onClickMinus, onClickPlus }) => {
    return (
        <Box
            display={'flex'}
            alignItems='center'


        >
            <IconButton
                onClick={onClickMinus}
            >
                <RemoveCircleOutlineOutlined />
            </IconButton>

            <Typography
                sx={{
                    width: '40px',
                    textAlign: 'center',

                }}
            > {value} </Typography>

            <IconButton
                onClick={onClickPlus}
            >
                <AddCircleOutlineOutlined />
            </IconButton>

        </Box>
    )
}
