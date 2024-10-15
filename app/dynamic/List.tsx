const demo =  {
    "userId": 10,
    "id": 94,
    "title": "qui qui voluptates illo iste minima",
    "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
}


export default async function List() {
    const data: typeof demo[] = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    await new Promise(resolve => setTimeout(resolve, 3000));
    return <div>
        {[...data,demo].map(item => <div key={item.id}>
            {item.title}<br />
            {item.body}
        </div>)}
    </div>
}