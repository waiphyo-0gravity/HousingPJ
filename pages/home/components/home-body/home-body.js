import css from './home-body.module.css'
import HomeBodyLeft from './home-body-left'
import HomeBodyMiddle from './home-body-middle'
import HomeBodyRight from './home-body-right'

const HomeBody = _ => {
    return (
        <div className={css.container}>
            <HomeBodyLeft />
            <HomeBodyMiddle />
            <HomeBodyRight />
        </div>
    )
}

export default HomeBody;