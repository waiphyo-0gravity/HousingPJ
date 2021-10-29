import css from './navbar.module.css';

const Navbar = _ => {
    return (
        <div className={css.navbar}>
            <div className={`${css.container} flex lg:justify-between`}>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Logo</span>
                </h2>
                <h2 className={`${css.telNo} text-3xl font-bold tracking-tight text-gray-900`}>
                    <span className="block">000000000000</span>
                </h2>
            </div>
        </div>
    )
}

export default Navbar;