import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import db from '../../services';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

    const validateForm = (campos) => {
    return campos.some((campo) => campo === "")}

    const Formulario = ({ total, compra }) => {
    const { clear, items } = useContext(CartContext)
    const fetchGenerateTicket =  async ({data}) => {
        function updateStock() {
            const updateItemStock = async(id, qty) => {
                try {
                const orderedItem = doc(db, "products", id)
                const orderedItemSnap = await getDoc(orderedItem)
                const newStock = orderedItemSnap.data().stock - qty
                updateDoc(orderedItem, { stock: newStock})
                } catch (error) {
                    console.log(error)
                }
            }
            items.map((item)=>
            updateItemStock(item.id, item.qty)
            )
        }

        try {
            const col = collection(db,"orders")
            const order =  await addDoc(col,data)
            updateStock();
            console.log(order.id)
            Swal.fire(
                '¡Pedido generado correctamente!',
                `Su ID de pedido es: ${order.id}`,
                'success'
            )
        } catch (error) {
            console.log(error);
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
            Swal.fire(
                '¡Faltan completar campos!',
                'Rellene todos los campos e intente nuevamente',
                'error'
            )
            return;
        }         
        fetchGenerateTicket({ data: form });
        setTimeout(() => {
            clear();
        }, 1500);
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