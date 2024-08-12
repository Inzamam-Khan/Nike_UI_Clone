export const Button=({label,iconURL,backgroundColor,borderColor,textColor})=>{
    return(
        <button className={`
            flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none rounded-full 
        ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}`  :
          "bg-coral-red text-white border-coral-red " } `}
        >
            {label}
           
           
           { iconURL && <img src={iconURL} className="ml-2 rounded-full w-5 h-5"  />}
        </button>
    )
}