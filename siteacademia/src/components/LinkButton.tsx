
interface LinkButtonProps {
    title?: string;
    className: string
    
}


       
export const LinkButton:React.FC<LinkButtonProps> = (({title})=>{
    return(
        <>
        <a >
            <p>{title}</p>
        </a>
        </>        
    )
})