import { useState } from "react";
import styled from "styled-components";

function Head(props: {
  MenuHeads: string[];
  setMenu: any;
  menu: boolean;
  products: number[];
  setProducts:any
  cart: boolean;
  setCart: any;
}) {

  const [page,setPage] = useState<undefined|number>()

  function deleteProduct(index:number){
    props.products.splice(index,1)
    props.setProducts([...props.products])

  }

  return (
    <header className="flex items-center justify-between pt-[19px] pb-[25px] px-[24px] z-0 lg:px-0 lg:py-0 lg:border-b lg:border-b-solid lg:border-b-[#E4E9F2]">
      <div className="flex items-center">
        <img
          className="w-[16px] h-[15px] mb-[-4px] lg:hidden"
          src="/public/images/icon-menu.svg"
          onClick={() => props.setMenu(true)}
        />
        <img
          className="w-[137.5px] h-[20px] ml-[16px] lg:ml-0"
          src="/public/images/logo.svg"
        />
        <div className="lg:flex lg:justify-between lg:w-[397px] lg:ml-[56.5px]">
          {props.MenuHeads.map((item, index) => {
            return <MenuHeads key={index} index={index} page={page} onClick={() => setPage(index)} >{item}</MenuHeads>;
          })}
        </div>
      </div>
      <div className="flex items-center">
        <img
          className="w-[22px] h-[20px] mr-[22.18px] lg:mr-[46px] cursor-pointer	"
          src="/images/icon-cart.svg" // src shevcvale
          onClick={() => props.setCart(!props.cart)}
        />
        <img
          className="rounded-[50%] w-[24px] h-[24px] lg:w-[50px] lg:h-[50px] lg:hover:border-[2px] lg:hover:border-solid lg:hover:border-[#FF7E1B] cursor-pointer	"
          src="/images/image-avatar.png" // src shevcvale
        />
        {props.products.length != 0?
        <div className="flex justify-center items-center w-[19px] h-[13px] rounded-[6.5px] bg-[#FF7E1B] text-[#FFF] text-[10px] font-bold absolute top-[16px] right-[64px] lg:top-[38px] lg:right-[255px]" >{props.products.length}</div>:
        null}
      </div>
      {props.cart?
      <div style={{ boxShadow: "0px 20px 50px -20px black"}} className="w-[360px] bg-[#FFF] rounded-[10px] overflow-hidden	 absolute top-[76px] right-[8px] lg:top-[94px] lg:right-[89px]" >
        <header className="pt-[24px] pl-[24px] pb-[27px] border-b-[#E4E9F2] border border-b-solid" ><h1 className="text-[#1D2026] text-[16px] font-bold" >Cart</h1></header>
        <div className={`w-[360px] min-h-[188px] max-h-[264px] flex flex-col ${props.products.length == 0?"items-center":null} justify-center px-[24px] pt-[24px] pb-[32px]`} >
            {props.products.length == 0? 
                <h1 className="text-[#69707D] text-[16px] font-bold leading-[26px]" >Your cart is empty.</h1>:
                <>
                    <div className="flex flex-col gap-[16px] max-h-[128px] overflow-scroll overflow-x-hidden " >
                        {props.products.map((item , index) => {
                            return(
                                <div className="flex items-center justify-between w-[100%] "  >
                                    <img className="w-[50px] h-[50px] rounded-[4px] " src="/public/images/image-product-1.jpg"/>
                                    <div>
                                        <h1 className="text-[#69707D] text-[16px] leading-[26px]" >Fall Limited Edition Sneakers</h1>
                                        <span className="text-[#69707D] text-[16px] leading-[26px]" >$125.00 x {item}<a className="text-[#1D2026] text-[16px] leading-[26px] font-bold ml-[5px]"  >${125*item}.00</a></span>
                                    </div>
                                    <img className="w-[14px] h-[16px] cursor-pointer	" src="/public/images/icon-delete.svg" onClick={() => deleteProduct(index)} />                                    
                                </div>
                            )
                        })}
                    </div>
                    <button  className="w-[312px] h-[56px] bg-[#FF7E1B] rounded-[10px] text-[#FFFFFF] text-[16px] font-bold mt-[24px] cursor-pointer" >Checkout</button>
                </>
            }
        </div>
      </div>:null
      }
    </header>
  );
}

export default Head;

interface MenuHeads{
    page:number|undefined
    index:any
}

const MenuHeads = styled.h1<MenuHeads>`
  display: none;
  @media (min-width:1024px) {
    margin-top:41px;
    height: 71px;
    display: block;
    color: #69707D;
    font-size:15px;
    line-height: 26px;
    border-bottom:${({page,index}) => page == index?"4px solid #FF7E1B":null} ;
    cursor: pointer;
  }
  
`;
