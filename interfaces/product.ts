
export type ISizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type ITypes = 'shirts' | 'pants' | 'hoodies' | 'hats';


export interface IProduct {
    description: string
    images: string[]
    inStock: number
    price: number
    sizes: ISizes[]
    slug: string
    type: ITypes
    tags: string[]
    title: string
    gender: 'men' | 'women' | 'kid' | 'unisex'
}

