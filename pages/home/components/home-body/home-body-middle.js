import css from './home-body.module.css';

const HomeBodyMiddle = _ => {
    const data = [
        {
            type: 1,
            title: 'Type 1',
            data: Array(5).fill({
                img: '/images/type1.png',
                title: 'Head',
                body: 'Id aliquip eu eiusmod commodo deserunt duis consectetur laborum aliqua ipsum mollit dolor nisi. Velit minim officia et aliqua. Laborum dolor elit culpa dolore fugiat labore non. Pariatur incididunt anim amet fugiat occaecat voluptate minim sit. Consectetur ipsum laboris id elit. Sunt eu irure mollit ad dolore ut ex aliqua esse dolor tempor. Tempor dolore do reprehenderit aliqua elit cillum do Lorem voluptate velit ipsum.'
            })
        },
        {
            type: 2,
            title: 'Type 2',
            data: Array(3).fill({
                img: '/images/type2.png',
                title: 'Head',
                body: 'Id aliquip eu eiusmod commodo deserunt duis consectetur laborum aliqua ipsum mollit dolor nisi. Velit minim officia et aliqua. Laborum dolor elit culpa dolore fugiat labore non. Pariatur incididunt anim amet fugiat occaecat voluptate minim sit. Consectetur ipsum laboris id elit. Sunt eu irure mollit ad dolore ut ex aliqua esse dolor tempor. Tempor dolore do reprehenderit aliqua elit cillum do Lorem voluptate velit ipsum.'
            })
        },
        {
            type: 3,
            title: 'Type 3',
            data: Array(6).fill``.map((_, b)=>{
                return {
                    step: b+1,
                    img: '/images/type2.png',
                    title: 'Head',
                    body: 'Id aliquip eu eiusmod commodo deserunt duis consectetur laborum aliqua ipsum mollit dolor nisi. Velit minim officia et aliqua. Laborum dolor elit culpa dolore fugiat labore non. Pariatur incididunt anim amet fugiat occaecat voluptate minim sit. Consectetur ipsum laboris id elit. Sunt eu irure mollit ad dolore ut ex aliqua esse dolor tempor. Tempor dolore do reprehenderit aliqua elit cillum do Lorem voluptate velit ipsum.'
                }
            })
        },
        {
            type: 4,
            title: 'Type 4',
            phoneno: '0120-000-000',
            mail: 'waiphyo.pyxistech@gmail.com'
        }
    ]

    return (
        <div className={css.middleContainer}>
            {
                data.map((listData, key)=> {
                    if(listData.type == 1) return <MiddleListType1 key={key} listData={listData}/>
                    if(listData.type == 2) return <MiddleListType2 key={key} listData={listData}/>
                    if(listData.type == 3) return <MiddleListType3 key={key} listData={listData}/>
                    if(listData.type == 4) return <MiddleListType4 key={key} data={listData}/>
                    return <></>
                })
            }
        </div>
    )
}

const MiddleListType1 = ({ listData }) => {
    const Item = ({ data, isFirst }) => (
        <div className={`${css.middleListItemType1} ${isFirst ? css.firstItem : ''}`}>
            <img src={data.img}/>
            <div className={css.middleListItemType1Body}>
                <h2 className='text-1xl font-bold sm:text1xl'>{ data.title }</h2>
                <span className='text-1xl font-regular sm:text1xl'>{ data.body }</span>
                <button>Click me</button>
            </div>
        </div>
    ) 

    return (
        <div className={css.middleListType1}>
            <h1 className={`text-2xl font-extrabold sm:text2xl`}>
                {listData.title}
            </h1>
            {
                listData.data.map((data, key)=><Item key={key} data={data} isFirst={!key}/>)
            }
        </div>
    )
}

const MiddleListType2 = ({ listData }) => {
    const Item = ({ data }) => {
        return (
            <div className={css.middleListItemType2}>
                <img src={data.img}/>
                <h2 className='text-1xl font-bold sm:text1xl'>{ data.title }</h2>
                <span className='text-1xl font-regular sm:text1xl'>{ data.body }</span>
                <button>Click me</button>
            </div>
        )
    }

    return (
        <div className={css.middleListType2}>
            <h1>
                {listData.title}
            </h1>
            {
                listData.data.map((data, key)=>{
                    return <Item key={key} data={data}/>
                })
            }
        </div>
    )
}

const MiddleListType3 = ({ listData }) => {
    const Item = ({ data }) => {
        return (
            <div className={css.middleListItemType2}>
                <div className={css.stepContainer}>
                    <span>STEP{ data.step }</span>
                    <div className={css.arrow}></div>
                </div>
                <img src={data.img}/>
                <h2 className='text-1xl font-bold sm:text1xl'>{ data.title }</h2>
                <span className='text-1xl font-regular sm:text1xl'>{ data.body }</span>
            </div>
        )
    }

    return (
        <div className={css.middleListType2}>
            <h1>
                {listData.title}
            </h1>
            {
                listData.data.map((data, key)=>{
                    return <Item key={key} data={data}/>
                })
            }
        </div>
    )
}

const MiddleListType4 = ({ data }) => {
    return (
        <div className={css.middleListType4}>
            <h1>
                {data.title}
            </h1>
            <div className={css.middleListItemType4}>
                <div>
                    <span>{ data.phoneno }</span>
                </div>
                <button>Mail</button>
                <button>Action</button>
            </div>
        </div>
    )
}

export default HomeBodyMiddle;