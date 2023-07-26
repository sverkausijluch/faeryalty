import React from 'react'
import CSRFToken from "../csrftoken"
import { useState } from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object().shape({
    name: yup
        .string()
        .max(50, 'Введите имя покороче')
        .required("Заполните поле Имя"),
    text: yup
        .string()
        .min(5, 'Текст слишком короткий')
        .max(1000, 'Текст великоват, сократите его до 1000 символов')
        .required("Введите текст сообщения"),
})

export default function CommentForm(props) {
    const [result, setResult] = useState('')

    const {register, handleSubmit, formState: {errors},} = useForm({
        defaultValues: {name: '', text: ''},
        mode: "onBlur",
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
            data.append('article_id', props.article_id)
            $.ajax({
                type: 'post',
                url: '../api/create-comment',
                cache: false,
                data: data,
                success: function (res) {
                    setResult('Комментарий успешно отправлен!')
                },
                error: function (xhr) {
                    console.log(JSON.parse(xhr.responseText))
                }
            })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {result !== '' &&
                <p className="success-result">{result}</p>
            }
            <CSRFToken/>
            <div className="inputWrapper">
                    <input {...register("name")}/>
            </div>
				<div className="comment-textarea">
					<textarea {...register("text")}></textarea>
				</div>
                <button type="submit" className="super-btn">
                    Отправить
                </button>

            <div className="errors-block">
                <p>{errors.name?.message}</p>
                <p>{errors.text?.message}</p>
            </div>
        </form>
    )
}
