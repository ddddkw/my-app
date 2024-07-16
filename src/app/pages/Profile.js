// function Item({isTrue}){
//     let content = null
//     if(isTrue){
//         content=(
//             <div>
//                 使用content
//             </div>
//         );
//
//     } else {
//         return (
//             <div>false</div>
//         );
//     }
//     return content;
// }

// function PeopleItem(){
//     const people = [
//         {
//             id: 0,
//             name: '凯瑟琳·约翰逊',
//             profession: '数学家',
//         },
//         {
//             id: 1,
//             name: '马里奥·莫利纳',
//             profession: '化学家',
//         },
//         {
//             id: 2,
//             name: '穆罕默德·阿卜杜勒·萨拉姆',
//             profession: '物理学家',
//         },
//         {
//             name: '珀西·莱温·朱利亚',
//             profession: '化学家',
//         },
//         {
//             name: '苏布拉马尼扬·钱德拉塞卡',
//             profession: '天体物理学家',
//         },
//     ];
//     // 将数组中的每个元素都转换为 JSX 节点
//     const listItems = people.map(person => <li key={person.id}>{person.name}</li>);
//     return (
//         <ul>{listItems}</ul>
//     );
// }

function handleClick() {
    alert('你点击了我！');
}

function BtnItem(){
    return(
        // <button onClick={handleClick}>点击按钮</button>
        <button onClick={()=>{
            alert('你点击了我！');
        }}>点击按钮</button>
    );
}

export default function Profile({person}){
    return (
        <>
            <div style={{color:"red"}}>我是列表中的{person.name}</div>
            <BtnItem/>
            {/*<Item isTrue={true}/>*/}
            {/*<Item isTrue={false}/>*/}
        </>
    );
}
