import React from 'react'
import CSRFToken from '../csrftoken'
import { useState } from 'react'

export default function CommentForm(props) {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [result, setResult] = useState('')
    const updateName = (e) => {
        setName(e.target.value)
    }
    const updateText = (e) => {
        setText(e.target.value)
    }
    const sendForm = (e) => {
        e.preventDefault()
        if(text!=''&&name!='') {
            const formData = new FormData(document.querySelector('form'))
            formData.append('article_id', props.article_id)
            $.ajax({
                type: 'post',
                url: '../api/create-comment',
                cache: false,
                data: formData,
                processData: false,
                contentType: false,
                success: function (res) {
                    setResult('Комментарий успешно отправлен!')
                },
                error: function (xhr) {
                    console.log(JSON.parse(xhr.responseText))
                }
            })
        }
    }
    return (
        <form onSubmit={sendForm}>
            {result !== '' &&
                <p className="success-result">{result}</p>
            }
            <CSRFToken/>
            <div className="inputWrapper">
                    <input value={name} onChange={updateName} placeholder="Имя" name="author_name"/>
            </div>
				<div className="comment-textarea">
					<textarea className="textarea" name="text" value={text} onChange={updateText}>Напишите здесь что-нибудь</textarea>
				</div>
                <button type="submit" className="super-btn">
                    Отправить
                </button>
        </form>
    )
}
