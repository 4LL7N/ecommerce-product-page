import { useState } from 'react'
import Head from './Components/Head'
import Menu from './Components/Menu' 
import Product from './Components/Product'
import Openpicture from './Components/Opnepicture'

function App() {

  const MenuHeads = ["Collections","Men","Women","About","Contact"]
  const [menu, setMenu] = useState<boolean>(false)
  
  const pictures = ["/public/images/image-product-1.jpg","/public/images/image-product-2.jpg","/public/images/image-product-3.jpg","/public/images/image-product-4.jpg"]
  const [pictureswitch,setPictureswitch] = useState<number>(0)

  const [openedPictureSwitch,setOpendPictureswitch] = useState<number>(0)

  const [productCount,setProductCount] = useState<number>(0)

  const [products , setProducts] = useState<number[]>([])

  const [cart, setCart] = useState<boolean>(false)

  const [pictureOpen, setpictureOpen] = useState<boolean>(false)

  return (
    <>
      
      <div className={`${menu?" duration-700  bg-[rgba(0, 0, 0, 0.5)] opacity-50 ":"duration-700 bg-transparent"} ${pictureOpen?"lg:duration-700  lg:bg-[rgba(0, 0, 0, 0.5)] lg:opacity-50":"lg:duration-700 lg:bg-transparent"}  w-[100%] h-[100%] absolute top-[0] bg-[black] bg-opacity-80 z-100 lg:px-[165px]`} >
        <Head MenuHeads={MenuHeads} setMenu={setMenu} menu={menu} products={products} setProducts={setProducts} cart={cart} setCart={setCart} />
        <Product pictures={pictures} pictureswitch={pictureswitch} setPictureswitch={setPictureswitch} productCount={productCount} setProductCount={setProductCount} products={products} setProducts={setProducts} setpictureOpen={setpictureOpen} pictureOpen={pictureOpen} />
      </div>
      <Menu MenuHeads={MenuHeads} setMenu={setMenu} menu={menu} />
      <Openpicture   pictures={pictures} setOpendPictureswitch={setOpendPictureswitch} openedPictureSwitch={openedPictureSwitch} pictureOpen={pictureOpen} setpictureOpen={setpictureOpen} />
    </>
  )
}

export default App
