// поисковое поле 

import { ChangeEvent, FormEvent } from "react"

interface ISearchFieldProps {
  setSearchQuery: Function
}

export const SearchField = ({setSearchQuery}: ISearchFieldProps) => {

  let searchValue = ''

  const handlerChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    searchValue = target.value
  }

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchQuery(searchValue)
  }

  return (<><form onSubmit={handlerSubmit}>
    <input type="text" onChange={handlerChange}/>
    <button type="submit">Найти</button>
    </form></>)
}
