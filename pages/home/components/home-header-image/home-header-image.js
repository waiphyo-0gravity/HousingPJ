import css from './home-header-image.module.css';
 
const HomeHeaderImages = _ => {
    const data = Array(3).fill``
    return (
        <div className={css.container}>
            <div className={css.list}>
                {
                    data.map((_, index)=><img key={index} src={ `/images/cardboard${index+1}.png` } className={css.img}/>)
                }
            </div>
            <div className={css.pageControlContainer}>
                {
                    data.map((_, index) =><span key={index} className={css.pageControl}></span>)
                }
            </div>
        </div>
    )
}

 export default HomeHeaderImages;