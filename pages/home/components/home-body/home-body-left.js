import css from './home-body.module.css';

const HomeBodyLeft = _ => {
    const data = [
        {
            name: '1',
            data: Array(2).fill``
        }, 
        {
            name: '2',
            data: Array(3).fill``
        },
        {
            name: '3',
            data: Array(9).fill``
        },
        {
            name: '4',
            data: Array(3).fill``
        },
        {
            name: '5',
            data: Array(5).fill``
        },
        {
            name: '6',
            data: Array(6).fill``
        },
        {
            name: '7',
            data: Array(4).fill``
        },
        {
            name: '8',
            data: Array(3).fill``
        },
        {
            name: '9',
            data: Array(4).fill``
        },
    ];
    return (
        <div className={css.leftContainer}>
            {
                data.map((i, index)=><HomeLeftList key={index} listData={i}/>)
            }
        </div>
    )
}

const HomeLeftList = ({ listData }) => {
    return (
        <div className={css.leftList}>
            <h1 className={`text-1xl font-extrabold sm:text1xl`}>
                Title {listData.name}
            </h1>
            <ul>
                {
                    listData.data.map((_, index)=><li key={index}>{index}</li>)
                }
            </ul>
        </div>
    )
}

export default HomeBodyLeft;