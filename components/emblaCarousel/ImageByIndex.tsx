import image1 from './images/downloadcopy.jpg'
import image2 from './images/download.jpg'
import image3 from './images/download1copy.jpg'
import image4 from './images/download1.jpg'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index: number)=> images[index % images.length]

export default imageByIndex
