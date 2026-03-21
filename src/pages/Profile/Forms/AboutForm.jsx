import React from 'react'
import { Textarea } from '../../../components/ui/textarea'
import { Button } from '../../../components/ui/Button';
import { Label } from '../../../components/ui/label';
const AboutForm = () => {

    const handleSubmit = ()=>{
        alert("Form Submit");
    }
  return (
     <>
     <form onSubmit={handleSubmit} className="space-y-6">
          {/* Message */}
          <div>
           
            <div className="relative mt-1">
               <Label className="mb-3" htmlFor="about">Introduce your self</Label>
              <Textarea
                id="message"
                placeholder="Introduce yourself and explain why you're the perfect fit for this project..."
                rows={5}
                //value={formData.message}
                // onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Personalized messages increase your chances of getting hired
            </p>
          </div>

          <Button type='submit'>
            Save
          </Button>

         

          
        </form></>
  )
}

export default AboutForm