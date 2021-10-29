import css from './home-body.module.css';

const HomeBodyRight = _ => {
    const data = [
        {
            type: 1,
            data: Array(7).fill``.map((_, a)=> {
                return {
                    id: a+1,
                    img: '/images/right-type1.png'
                }
            })
        },
        {
            type: 2,
            title: 'Type 2',
            data: Array(20).fill``.map((_, a)=> {
                return {
                    id: a+1,
                    img: '/images/right-type2.png'
                }
            })
        }
    ]

    return (
        <div className={css.rightContainer}>
            {
                data.map((a, key)=> {
                    if(a.type == 1) return <RightListType1 key={key} listData={ a.data } />
                    if(a.type == 2) return <RightListType2 key={key} listData={ a } />
                    return <></>
                })
            }
        </div>
    )
}

const RightListType1 = ({ listData }) => {
    const Item = ({ data }) => {
        return (
            <div className={css.cardContainer}>
                <div className={css.cardInner}>
                    <img src={ data.img }/>
                    <h2>Item { data.id }</h2>
                </div>
            </div>
        )
    }

    return (
        <div className={css.rightListType1}>
            {
                listData.map(data=> <Item key={data.id} data={data}/>)
            }
        </div>
    )
}

const RightListType2 = ({ listData }) => {
    return (
        <div className={css.rightListContainer}>
            <h2>{ listData.title }</h2>
            <div className={css.rightListType2}>
            {
                listData.data.map(data=> <img key={data.id} src={data.img}/>)
            }
        </div>
        </div>
    )
}

export default HomeBodyRight;