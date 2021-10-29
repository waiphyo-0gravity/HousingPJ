import css from './sub-header.module.css';

const SubHeader = _ => {
    const data = Array(4).fill``;

    return (
        <div className={css.container}>
            {
                data.map((_ , index)=> {
                    return(
                        <div key={index} className={css.listItem}>
                            <div className={css.cardInner}>
                            <span>{index == 0 ? 'a' : 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf'}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SubHeader;