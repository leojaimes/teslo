import { Grid } from "@mui/material"
import { FC } from "react"
import { initialData } from "../../database/products"
import { Product } from "../../interfaces"
import { ProductCard } from "./ProductCard"

interface Props {
   products : Product[]
}
export const ProductList: FC<Props> = ({ products }) => {
    return (
        <Grid container spacing={4}>
            {
                initialData.products.map(
                    (product) =>
                    (
                        <ProductCard
                            product={product}
                        />
                    )
                )
            }
        </Grid>
    )
}
