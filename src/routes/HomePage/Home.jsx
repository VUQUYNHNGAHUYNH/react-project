import categories from '../../assets/categoties.json'
import './Home.scss'

const Home = () => {
    return(
        <div className='categories-container'>
             {categories.map( ({title, imageUrl, id}) => (
                     <div key={id} className='category-container'>
                     <div className='background-image' 
                         style = {{backgroundImage: `url(${imageUrl})`}}
                     />
                     <div className='category-body'>
                         <h2>{title}</h2>
                         <p>Shop Now</p>
                     </div>
                     
                 </div>
             ))}
       
        </div> 
    )
   
}

export default Home;
