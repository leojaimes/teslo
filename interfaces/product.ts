
export type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';


export interface Product {
    description: string
    images: string[]
    inStock: number
    price: number
    sizes: string[]
    slug: string
    type: string
    tags: string[]
    title: string
    gender: 'men'|'women'|'kid'|'unisex'
}

 