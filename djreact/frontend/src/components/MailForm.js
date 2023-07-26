import React from 'react'
import CSRFToken from "../csrftoken"
import { useState } from 'react'

export default function MailForm(props) {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [result, setResult] = useState('')
    const updateName = (e) => {
        setName(e.target.value)
    }
    const updateEmail = (e) => {
        setEmail(e.target.value)
    }
    const updateText = (e) => {
        setText(e.target.value)
    }
    const sendForm = (e) => {
        e.preventDefault()
        if(text!=''&&name!=''&&email!='') {
            const formData = new FormData(document.querySelector('form'))
            $.ajax({
                type: 'post',
                url: '/api/send-mail',
                cache: false,
                data: formData,
                processData: false,
                contentType: false,
                success: function (res) {
                    setResult('Письмо успешно отправлено! Спасибо!')
                },
                error: function (xhr) {
                    console.log(JSON.parse(xhr.responseText))
                }
            })
        }
    }
    return (
        <form onSubmit={sendForm} className="mail-form">
            {result !== '' &&
                <p className="success-result">{result}</p>
            }
            <CSRFToken/>
            <div className="inputWrapper">
                <label>Имя</label>
                    <input value={name} onChange={updateName} placeholder="" name="name"/>
            </div>
            <div className="inputWrapper">
                <label>Почта</label>
                    <input value={email} onChange={updateEmail} placeholder="" name="email"/>
            </div>
				<div className="inputWrapper">
                    <label>Сообщение</label>
					<textarea name="text" className="textarea" value={text} onChange={updateText}></textarea>
				</div>
                <button type="submit" className="super-btn">
                    Отправить
                </button>
        </form>
    )
}
