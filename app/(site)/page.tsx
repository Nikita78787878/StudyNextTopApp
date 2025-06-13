import {Metadata} from "next";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
   //... вычисление на беке
   return {
     title: 'ComputedMeta'
   }
 }

export default function Home(){
    return (
        <main className={styles.main}>
                Главная страница
        </main>
    )
}




// Тестовые данные и компоненты
// 'use client';
// // import Image from "next/image";
// // import styles from "./page.module.css";
// // import type {Metadata} from "next";
// import {Button, Htag, P, Tag, TestUseClient, Rating, BadExample, GoodExample} from "../components";
// import {JSX, useEffect, useState} from "react";
//
// // export const metadata: Metadata = {
// //   title: "Испроавленные данные",
// //   description: "мой текст",
// // };
//
// // export async function generateMetadata(): Promise<Metadata> {
// //   //... вычисление на беке
// //   return {
// //     title: 'ComputedMeta'
// //   }
// // }
//
// export default function Home(): JSX.Element {
//     const [counter, setCounter] = useState<number>(0)
//
//     const [trueOrfalse, setTF] = useState<boolean>(false)
//     const [rating, setRating] = useState<number>(4)
//
//     useEffect(() => {
//         console.log('Counter: ', counter);
//         return function cleanup(){
//             console.log('Unmount');
//         };
//     }, []); // если добавить [], то эффект появится один раз
//
//     useEffect(() => {
//         console.log('Monuted');
//     }, []);
//
//     // Так делать НЕЛЬЗЯ
//     // if(counter > 0){
//     //     useEffect(() => {
//     //         console.log('Monuted');
//     //     }, []);
//     // }
//     //Два правила,
//     // хуки вызываются из самих функицональных компонентах либо из пользовательских хуках
//     // хуки всегда вызываются на верхнем уровне!!!
//
//     // вот правильно
//     // useEffect(() => {
//     //     if (counter > 0) {
//     //         console.log('Monuted');
//     //     }
//     //     }, []);
//
//
//     return (
//       <>
//         <Htag tag='h1'>Текст</Htag>
//
//         <Button appearance='primary' arrow='right' >Кнопка</Button>
//         <Button appearance='ghost' arrow='down'>Кнопка2</Button>
//
//         <P size='l'> Большой </P>
//         <P size='m'> Средний </P>
//         <P size='s'> Маленький </P>
//
//         <Tag size='s' > Ghost </Tag>
//         <Tag size='m'  color='red'> Red </Tag>
//         <Tag size='s'  color='green'> Green </Tag>
//         <Tag color='primary'> Primary </Tag>
//
//         <TestUseClient/>
//
//       <Button appearance='ghost' onClick={() => setCounter(x => x + 1)}>Кнопка счётчик</Button>
//           <span>{counter}</span>
//           <div></div>
//
//       <Button appearance='primary' onClick = {() => setTF(tf => !tf)}>Кнопка Boolean</Button>
//           <span>{trueOrfalse.toString()}</span>
//         <Rating rating={rating} isEditable setRating={setRating}/>
//
//           <BadExample/>
//           <GoodExample/>
//
//       </>
//
//
//
//
//   );
// }
