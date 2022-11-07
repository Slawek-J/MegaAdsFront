import React, { SyntheticEvent, useState } from 'react'
import { geocode } from '../../utils/geocoding'
import { Btn } from '../common/Btn'
import './AddForm.css'

export const AddForm = () => {
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState('')
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: 0,
        url: '',
        address: ''
    })

    const updateForm = (key: string, val: any) => {
        setForm(form => ({
            ...form,
            [key]: val,
        }))
    }

    const saveAd = async (e:SyntheticEvent) => {
        e.preventDefault();

        setLoading(true)

        try {
        const {lat, lon} = await geocode(form.address)

        const res = await fetch(`http://localhost:3001/ad`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...form,
                lat,
                lon
            })
        })

        const data = await res.json()
        
        setId(data.id)
        
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <h2>Ad is being added</h2>
    }

    if(id) {
        return <h2>Your add {form.name} has been added to the service with id: {id}</h2>
    }

  return (
    <form className='add-form' onSubmit={saveAd}>
        <h1>Add new ad</h1>
        <p>
            <label>
                Name:
                <br />
                <input 
                    type="text" 
                    name="name" 
                    required 
                    maxLength={99}
                    value={form.name}
                    onChange={e => updateForm("name", e.target.value)}/>
            </label>
        </p>
        <p>
            <label>
                Description:
                <br />
                <textarea 
                    name="description" 
                    maxLength={999}
                    value={form.description}
                    onChange={e => updateForm("description", e.target.value)}/>
            </label>
        </p>
        <p>
            <label>
                Price:
                <br />
                <input 
                    type="number" 
                    name="price" 
                    required 
                    min={0} 
                    max={999999}
                    value={form.price}
                    onChange={e => updateForm("price", Number(e.target.value))}/>
                <br/>
                <small>Enter 0 not to display price</small>
            </label>
        </p>
        <p>
            <label>
                URL:
                <br />
                <input 
                    type="url" 
                    name="url" 
                    maxLength={99}
                    value={form.url}
                    onChange={e => updateForm("url", e.target.value)}/>
            </label>
        </p>
        <p>
            <label>
                Address on map:
                <br />
                <input 
                    type="text" 
                    name="address" 
                    maxLength={99}
                    value={form.address}
                    onChange={e => updateForm("address", e.target.value)}/>
            </label>
        </p>
        <Btn text='Save'/>
    </form>
  )
}
