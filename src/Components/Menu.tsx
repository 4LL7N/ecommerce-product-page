function Menu(props:{MenuHeads:string[],menu:boolean , setMenu:any}){
    
    return(
        <div className={`w-[250px] h-[100%] bg-[#FFF] flex flex-col gap-[54px] absolute top-[0] left-[-250px] pt-[25px] pl-[25px] ${props.menu?"ease-out duration-700 left-[0]":"ease-in duration-700 left-[-250px]"}  `} >
            <img className="w-[13.55px] h-[13.5px]" src="/images/icon-close.svg" onClick={() => props.setMenu(false) } />
            <div className="flex flex-col gap-[20px]" >
            {props.MenuHeads.map((items,index) => {
                return(
                    <h1 key={index} className="text-[#1D2026] text-[18px] font-bold leading-[25px]" onClick={() => props.setMenu(false) } >{items}</h1>
                )
            })}
            </div>
        </div>
    )
}

export default Menu