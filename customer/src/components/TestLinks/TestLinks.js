import React  from 'react';

import links from "./TestLinks.module.css";
import {Link} from "react-router-dom";

const TestLinks = () => {
    // let [items, setItem] = useState([]);
    //
    // useEffect(() => {
    //     let error = (bool) => {
    //         return bool;
    //     };
    //     let loading = (bool) => {
    //         return bool;
    //     };
    //     loading(true);
    //     fetch(`http://localhost:3002/business`)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error("HTTP error " + response.status);
    //             }
    //             return response.json();
    //         })
    //         .then(value => {
    //             let arr = [];
    //             loading(false);
    //             error(false);
    //             for(let i = 0; i < value.length; i++){
    //                 let item = value[i];
    //                 for(let j = 0; j < item.points.length; j++){
    //                     arr.push({business: item.id, point: item.points[j].id, name: item.name});
    //                 }
    //             }
    //             setItem(arr);
    //         })
    //         .catch(err => {
    //             // console.log(err);
    //             loading(false);
    //             error(true);
    //         });
    // }, []);
    //
    // const linksItems = items.map((item, i) =>
    //     <li className={links.item} key={i}>
    //         <Link
    //             to={`info/${item.business}/${item.point}`}
    //         >{item.name} {item.point}</Link>
    //     </li>
    // );

    return (
        <ul className={links.list}>
            <li className={links.item}>
                <Link to="info/1/0">Silpo 1</Link>
            </li>
            <li className={links.item}>
                <Link to="info/1/1">Silpo 2</Link>
            </li>
            <li className={links.item}>
                <Link to="info/1/2">Silpo 3</Link>
            </li>
            <li className={links.item}>
                <Link to="info/2/0">ATB 1</Link>
            </li>
            <li className={links.item}>
                <Link to="info/2/1">ATB 2</Link>
            </li>
            <li className={links.item}>
                <Link to="info/3/0">Eva 1</Link>
            </li>
            <li className={links.item}>
                <Link to="info/3/1">Eva 2</Link>
            </li>
            {/*<li className={links.item}>*/}
            {/*    <Link to="info/2/21">ошибка</Link>*/}
            {/*</li>*/}
        </ul>
    );
};

export default TestLinks;