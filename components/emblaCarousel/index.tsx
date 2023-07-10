'use client'
import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import imageByIndex from './ImageByIndex'
import styles from './carousel.module.css'
import Image from 'next/image'
import { Movies } from '@/types'

type PropType = {
  slides:   Movies[],
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  console.log(props)

  return (
    <div className={styles.carousel_container}>
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => {
            // console.log(index)
            return(
            <div className={styles.embla__slide} key={index.id}>
              <Image
              
                loader={({src})=>{
                  return `${index.large_cover_image}`;
                }}
                className={styles.embla__slide__img}
                src={index.medium_cover_image}
                width={1200}
                height={500}              
                alt="Your alt text"
              />
            </div>
          )})}
        </div>
      </div>
    </div>
    </div>
  )
}

export default EmblaCarousel
