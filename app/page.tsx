'use client'
import {Button, Htag, P, Tag, TestUseClient, Rating, BadExample, GoodExample} from "../components";
import {JSX, useEffect, useState} from "react";


export default function Home(): JSX.Element {
    const [counter, setCounter] = useState<number>(0)

    const [trueOrfalse, setTF] = useState<boolean>(false)
    const [rating, setRating] = useState<number>(4)

    useEffect(() => {
        console.log('Counter: ', counter);
        return function cleanup(){
            console.log('Unmount');
        };
    }, []); // если добавить [], то эффект появится один раз

    useEffect(() => {
        console.log('Monuted');
    }, []);


    return (
      <>
        <Htag tag='h1'>Текст</Htag>

        <Button appearance='primary' arrow='right' >Кнопка</Button>
        <Button appearance='ghost' arrow='down'>Кнопка2</Button>

        <P size='l'> Большой </P>
        <P size='m'> Средний </P>
        <P size='s'> Маленький </P>

        <Tag size='s' > Ghost </Tag>
        <Tag size='m'  color='red'> Red </Tag>
        <Tag size='s'  color='green'> Green </Tag>
        <Tag color='primary'> Primary </Tag>

        <Rating rating={rating} isEditable setRating={setRating}/>

      </>

  );
}


