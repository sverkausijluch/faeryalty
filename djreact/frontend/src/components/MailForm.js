import React from 'react'
import CSRFToken from "../csrftoken"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import {useState} from "react"

const schema = yup.object().shape({
    name: yup
        .string()
        .max(50, 'Введите имя покороче')
        .required("Заполните поле Имя"),
    email: yup
        .string()
        .required("Укажите почту")
        .min(5, 'Введите почту подлиннее')
        .max(80, 'Почта не может быть длиннее 80 символов')
        .email("Почта имеет другой формат"),
    text: yup
        .string()
        .min(5, 'Текст слишком короткий')
        .max(1000, 'Текст великоват, сократите его до 1000 символов')
        .required("Введите текст сообщения"),
})

export default function MailForm() {
    const {register, handleSubmit, formState: {errors},} = useForm({
        defaultValues: {name: '', email: '', text: ''},
        mode: "onBlur",
        resolver: yupResolver(schema),
    })
    const [result, setResult] = useState('')
    const onSubmit = (data) => {
        $.ajax({
            type: 'post',
            url: '/api/send-mail',
            cache: false,
            data: data,
            success: function (res) {
                setResult('Письмо успешно отправлено! Спасибо!')
            },
            error: function (xhr) {
                console.log(JSON.parse(xhr.responseText))
            }
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mail-form">
            <CSRFToken/>
            {result !== '' &&
                <p className="success-result">{result}</p>
            }
            <div className="inputWrapper">
                <label>Имя</label>
                <input {...register("name")}/>
            </div>
            <div className="inputWrapper">
                <label>Почта</label>
                <input {...register("email")}/>
            </div>
            <div className="inputWrapper">
                <label>Сообщение</label>
                <textarea {...register("text")}></textarea>
            </div>
            <button type="submit" className="super-btn">
                Отправить
            </button>
            <div className="errors-block">
                <p>{errors.name?.message}</p>
                <p>{errors.email?.message}</p>
                <p>{errors.text?.message}</p>
            </div>
        </form>
    )
}
