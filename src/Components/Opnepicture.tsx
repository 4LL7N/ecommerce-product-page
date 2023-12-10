import styled from "styled-components";

function Openpicture(props: {
  openedPictureSwitch: number;
  setOpendPictureswitch: any;
  pictures: string[];
  pictureOpen: boolean;
  setpictureOpen: any;
}) {
  function ChangePicture(act: boolean) {
    if (act) {
      if (props.openedPictureSwitch != props.pictures.length - 1) {
        props.setOpendPictureswitch(props.openedPictureSwitch + 1);
      }
    } else {
      if (props.openedPictureSwitch != 0) {
        props.setOpendPictureswitch(props.openedPictureSwitch - 1);
      }
    }
  }

  return (
    <>
      <div
        className={`hidden ${
          props.pictureOpen ? "lg:flex" : null
        } lg:flex-col lg:items-end lg:absolute lg:top-[60px] lg:left-[470px] lg:z-300 lg:opacity-100 `}
      >
        <div
          className={`lg:w-[20px] lg:h-[20px] lg:bg-no-repeat lg:bg-cover lg:bg-[url("/images/icon-close.svg")] lg:hover:bg-[url("/images/icon-close-orange.svg")] lg:mb-[24px]`}
          onClick={() => props.setpictureOpen(false)}
        />
        <Images pictures={props.pictures} pictureswitch={props.openedPictureSwitch}>
          <div className="w-[56px] h-[56px] rounded-[50%] bg-[#FFF] flex items-center justify-center lg:relative lg:top-center lg:left-[-20px]" onClick={() => ChangePicture(false)} >
            <div
              className='w-[8px] h-[12px] lg:bg-no-repeat lg:bg-cover lg:bg-[url("/images/icon-previous.svg")] lg:hove:bg-[url("/images/icon-previous.svg")] '
              
            />
          </div>
          <div className="w-[56px] h-[56px] rounded-[50%] bg-[#FFF] flex items-center justify-center lg:relative lg:top-center lg:right-[-20px]" onClick={() => ChangePicture(true)}>
            <div
              className='w-[8px] h-[12px] lg:bg-no-repeat lg:bg-cover lg:bg-[url("/images/icon-next.svg")] lg:hove:bg-[url("/images/icon-next.svg")] '
              
            />
          </div>
        </Images>
        <div className="hidden lg:block lg:flex lg:w-[445px] lg:items-center lg:justify-around lg:gap-[31px] lg:mt-[32px] lg:mr-[52px]">
          {props.pictures.map((item, index) => {
            return (
              <img
                className="w-[88px] h-[88px] rounded-[10px] hover:border-[2px] hover:border-solid hover:border-[#FF7E1B]"
                key={index}
                src={`${item}`}
                onClick={() => props.setOpendPictureswitch(index)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Openpicture;

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
    height: 550px;
    width: 550px;
    border-radius: 15px;
    padding: 0;
    position: relative;
  }
`;
