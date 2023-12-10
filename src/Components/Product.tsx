import styled from "styled-components";

function Product(props: {
  pictures: string[];
  pictureswitch: number;
  setPictureswitch: any;
  productCount: number;
  setProductCount: any;
  products: number[];
  setProducts: any;
  setpictureOpen: any;
  pictureOpen: boolean;
}) {
  console.log(props.productCount);

  function saveProduct() {
    props.setProducts([...props.products, props.productCount]);
  }

  function ChangeProductCount(act: boolean) {
    if (act) {
      props.setProductCount(props.productCount + 1);
    } else {
      if (props.productCount != 0) {
        props.setProductCount(props.productCount - 1);
      }
    }
  }

  function ChangePicture(act: boolean) {
    if (act) {
      if (props.pictureswitch != props.pictures.length - 1) {
        props.setPictureswitch(props.pictureswitch + 1);
      }
    } else {
      if (props.pictureswitch != 0) {
        props.setPictureswitch(props.pictureswitch - 1);
      }
    }
  }

  return (
    <div className="lg:mt-[90px] lg:flex lg:w-[100%] justify-between">
      <div>
        <Images
          pictures={props.pictures}
          pictureswitch={props.pictureswitch}
          onClick={() => props.setpictureOpen(true)}
        >
          <div className="w-[40px] h-[40px] rounded-[50%] bg-[#FFF] flex items-center justify-center lg:hidden">
            <img
              className="w-[8px] h-[12px] "
              src="/public/images/icon-previous.svg"
              onClick={() => ChangePicture(false)}
            />
          </div>
          <div className="w-[40px] h-[40px] rounded-[50%] bg-[#FFF] flex items-center justify-center lg:hidden">
            <img
              className="w-[8px] h-[12px] "
              src="/public/images/icon-next.svg"
              onClick={() => ChangePicture(true)}
            />
          </div>
        </Images>
        <div className="hidden lg:block lg:flex lg:w-[445px] lg:items-center lg:justify-between lg:gap-[31px] lg:ml-[46px] lg:mt-[32px]">
          {props.pictures.map((item, index) => {
            return (
              <img
                className="w-[88px] h-[88px] rounded-[10px] hover:opacity-50 hover:border-[2px] hover:border-solid hover:border-[#FF7E1B] cursor-pointer	"
                key={index}
                src={`${item}`}
                onClick={() => props.setPictureswitch(index)}
              />
            );
          })}
        </div>
      </div>
      <div className="px-[24px] pt-[24px] pb-[88px] lg:w-[445px] lg:h-[446px] lg:mr-[47px] lg:p-0 lg:mt-[62px]">
        <h2 className="text-[#FF7E1B] text-[12px] font-bold tracking-[1.846px] lg:text-[13px] lg:tracking-[2px]">
          SNEAKER COMPANY
        </h2>
        <h1 className="text-[#1D2026] text-[28px] font-bold leading-[32px] mt-[19px] lg:text-[44px] lg:leading-[48px]">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-[#69707D] text-[15px] leading-[25px] mt-[15px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex items-center justify-start mt-[28px] lg:flex-col lg:items-start">
          <div className="flex items-center justify-start">
            <p className="text-[#1D2026] text-[28px] font-bold">$125.00</p>
            <div className="flex items-center justify-center w-[51px] h-[27px] bg-[#FFEEE2] rounded-[6px] text-[#FF7E1B] text-[16px] font-bold ml-[16px]">
              50%
            </div>
          </div>
          <p className="text-[#B6BCC8] text-[16px] font-bold leading-[26px] line-through ml-[90px] lg:ml-[0]">
            $250.00
          </p>
        </div>
        <div className="lg:flex lg:items-center lg:justify-bewteen lg:w-[445px]">
          <div className="flex items-center justify-around w-[327px] h-[56px] bg-[#F6F8FD] rounded-[10px] mt-[24px] lg:w-[157px]">
            <img
              className="w-[12px] h-[3.332px] cursor-pointer	"
              src="/public/images/icon-minus.svg"
              onClick={() => ChangeProductCount(false)}
            />
            <p className="text-[#1D2026] text-[16px] font-bold">
              {props.productCount}
            </p>
            <img
              className="w-[12px] h-[12px] cursor-pointer	"
              src="/public/images/icon-plus.svg"
              onClick={() => ChangeProductCount(true)}
            />
          </div>
          <button
            style={{ boxShadow: "0px 20px 50px -20px #FF7E1B" }}
            className="flex justify-center items-center gap-[15.5px] w-[327px] h-[56px] bg-[#FF7E1B] rounded-[10px] mt-[16px] hover:opacity-50 lg:w-[272px] lg:mt-[24px] lg:ml-[16px] cursor-pointer	"
            onClick={() => saveProduct()}
          >
            <img
              className="w-[17.457px] h-[16px] opacity-100 "
              src="/public/images/icon-cart-white.svg"
            />
            <p className="text-[#FFF] text-[16px] font-bold">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

interface Images {
  pictures: string[];
  pictureswitch: number;
}

const Images = styled.div<Images>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  background-image: ${({ pictures, pictureswitch }) =>
    `url(${pictures[pictureswitch]})`};
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;

  @media (min-width: 1024px) {
    height: 445px;
    width: 445px;
    margin-left: 46px;
    border-radius: 15px;
    padding: 0;
    cursor: pointer;
  }
`;
