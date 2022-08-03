import React, { FC } from 'react'
import { Slide } from 'react-slideshow-image';
import { getImage } from '../../utils/get-image';
import   styles from './ProductSlideShow.module.css'
import 'react-slideshow-image/dist/styles.css'


interface Props {
    images: string[]
}
export const ProductSlideShow: FC<Props> = ({ images }) => {
    return (
        <Slide
            easing='ease'
            duration={7000}
            indicators
        >
            {images.map((image, index) => (
                <div className={styles['each-slide']} key={image}>
                    <div
                        style={{
                            backgroundImage: `url(${getImage(image)})`,
                            backgroundSize: 'cover'


                        }}
                    >

                    </div>
                </div>
            ))}
        </Slide>
    )
}
