import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import db from '../../services';
import { collection, addDoc } from 'firebase/firestore';
import { Button, Form } from 'react-bootstrap';

    const validateForm = (campos) => {
    return campos.some((campo) => campo === "")}

    const Formulario = ({ total, compra }) => {
    const { clear } = useContext(CartContext)
    const fetchGenerateTicket =  async ({data}) => {
        try {
            const col = collection(db,"orders")
            const order =  await addDoc(col,data)
            console.log(order.id)
            alert(`Su ID de pedido es: ${order.id}`)
        } catch (error) {
            console.log(error)
        }
        };

    const [form, setForm] = useState({
        buyer: {
        Name: "",
        Lastname: "",
        Email: "",
        Tel: "",
        },
        total: total,
        items: compra,
    });

    const {
        buyer: { Name, Lastname, Email, Tel },
        } = form;

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm([Name, Lastname, Email, Tel])) {
            alert("Faltan completar campos!")
            return;
        }
        fetchGenerateTicket({ data: form });
        alert("Orden de compra generada correctamente!")
        clear();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            buyer: {
            ...form.buyer,
            [name]: value,
            },
        });
        };


    return (
        <Form onSubmit={onSubmit}>
            <h3>Ingrese sus datos para finalizar la compra!</h3>
            {Object.keys(form.buyer).map((key,index) => (
                <Form.Group className="mb-3" key={index}>
                    <Form.Label>{`${key}`}</Form.Label>
                    <Form.Control type="text" name={`${key}`} onChange={handleChange} placeholder={`${key}`} />
                </Form.Group>
            ))}
            <Button variant="warning" type="submit"> Finalizar compra </Button>
        </Form>
    )
}

export default Formulario