import Rendy from '../../public/rendy.jpeg'
const Photo = () => {
  return (
    <figure className="relative circle w-52 h-52 sm:w-60 sm:h-60 md:w-[18rem] md:h-[18rem] lg:w-[24rem] lg:h-[24rem] border-yellow-500 border-2 dark:border-sky-500">
      <img
        src={Rendy.src}
        width={500}
        height={500}
        alt="profile"
        className="w-full h-full object-contain"
      />
    </figure>
  )
}

export default Photo
