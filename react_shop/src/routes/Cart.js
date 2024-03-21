import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from "react-redux";
import { fnc_changeName, addCount, minCount } from "../store";

const Cart = () => {
    const dispatch = useDispatch();

    let state = useSelector((state) => {
        console.log(state)
        return state;
    })


    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map(function (a, i) {
                            return (
                                <tr key={i}>
                                    <td>1</td>
                                    <td>{state.cart[i].name}</td>
                                    <td>
                                    <Button onClick={() => { dispatch(minCount(i)) }}>＜</Button>  {state.cart[i].count} <Button onClick={() => { dispatch(addCount(i)) }}>＞</Button></td>
                                    <td>안녕</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>

            <button onClick={() => {
                dispatch(fnc_changeName())
            }}>버튼임</button>

        </>
    );
}

export default Cart;