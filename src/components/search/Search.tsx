import { useState } from 'react'
import { Input } from '../ui/input'

const Search = () => {

    const [searchValue, setSearchValue] = useState('')

  return (
    <div>
        <Input
            type='text'
            placeholder='search for a service'
            className=''
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} 
        />
    </div>
  )
}

export default Search
