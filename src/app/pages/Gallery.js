import Profile from "./Profile"
const person ={
    name: 'Lin Lanying',
}

export default function Gallery() {
    return (
        // section标签表示对Gallery组件内部结构的定义
        <section>
            <div>我是一个list</div>
            <Profile person={person}/>
            <Profile person={person}/>
            <Profile person={person}/>
        </section>
    );
}
