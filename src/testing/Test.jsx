import React from 'react'
import { Select , SelectContent, SelectTrigger,SelectLabel, SelectItem,SelectValue,SelectGroup } from '../components/ui/select'

const Test = () => {
  return (
   <div className='h-[400px]'>
       <Select>
        {/* Trigger (button) */}
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>

        {/* Dropdown Content */}
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>

            <SelectItem value="apple">🍎 Apple</SelectItem>
            <SelectItem value="banana">🍌 Banana</SelectItem>
            <SelectItem value="orange">🍊 Orange</SelectItem>
            <SelectItem value="mango">🥭 Mango</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
   </div>
  )
}

export default Test