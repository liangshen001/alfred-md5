import md5 from 'md5';
import alfred from "@liangshen/alfred";

const output = md5(alfred.input);

alfred.output({
    items: [
        {
            title: output,
            arg: output
        }
    ]
});
// const data = await alfy.fetch('https://jsonplaceholder.typicode.com/posts');
//
// const items = alfy
//     .inputMatches(data, 'title')
//     .map(element => ({
//         title: element.title,
//         subtitle: element.body,
//         arg: element.id
//     }));
// alfy.output(items)