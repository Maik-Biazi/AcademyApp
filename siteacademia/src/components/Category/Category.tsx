import { useEffect } from "react"
import { Container } from "react-bootstrap";
import './category.css'
import ScrollReveal from "scrollreveal";


interface CategoryProps{
    title: string;
    id?:string
}

export const Category:React.FC<CategoryProps> = ({title,id})=>{
  
 
    useEffect(() => {
        ScrollReveal().reveal(".line", {
          duration: 1000,
          reset: true,
          distance: "1200px",
          origin: "left",
        });
    
      }, []);

    return(
        <Container fluid className="container-category" >
        <div id={id}>
            <h2>{title}</h2>
            <div className="line"></div>
        </div>
        </Container>
    )
}