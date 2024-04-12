import NameBox from '../components/NameBox'
import EmailBox from '../components/EmailBox'
import ContactBox from '../components/ContactBox'
import ImageField from '../components/ImageField'
export default Home = () => {
  return (
    // Drawer of Components
    <div className = 'fixed bg-stone-50 max-w-fit mt-[3rem] py-[1.5rem] px-[1rem] rounded-md'>
      <h1 className = 'font-semibold text-xl pb-[0.5rem] text-center text-cyan-700'> Components </h1>
      <NameBox/>
      <EmailBox/>
      <ContactBox/>
      <ImageField/>
    </div>
  )
}