
const Test = () => {

   const login = async ()=>{
      
         window.location.href = "http://localhost:3000/auth/google"
          
       

      }
  return (
   <div className='h-[400px]'>
        <button className='cursor-pointer' onClick={login}>
             Google login
        </button>

     
   </div>
  )

}

export default Test