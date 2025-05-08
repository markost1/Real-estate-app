import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginSuccess } from '../../features/auth/authSlice'


export default function AdminPage() {
  
  const [formData, setFormData] = useState({})
  const navigate  = useNavigate()
  const dispatch = useDispatch()
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })

    console.log(formData);
    
  }

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    
    // Ovde bi išao fetch poziv ka backendu
    try {
      const res = await fetch('/api/auth/signin',{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      })

      const data = await res.json();
      console.log(data);
      console.log(formData);
      

      if (data.success && data.admin) {
        console.log('Uspešna prijava. Preusmeravam na dashboard');
        // Ako je prijava uspešna, preusmjeri na Admin Dashboard
       dispatch(loginSuccess(data.token))
        navigate('/admin/dashboard');
      }else {
        alert(data.message);
        
      }

      
    } catch (error) {
      console.log('Problem sa prijavom korisnika', error);
      
    }
   
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="admin@example.com"
              id='email'
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="••••••••"
              id='password'
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-2 text-white transition duration-200 hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
 
    
  
}
