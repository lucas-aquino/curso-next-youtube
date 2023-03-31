'use client'

import { useState } from "react"


export function usePageCounter(dataPage){
  const [state, setState] = useState(dataPage);
  
  const lenSetter = (newLen) => setState({
    ...state,
    len: newLen
  })

  const pageSizeSetter = (newPageSize) => setState({
    ...state,
    pageSize: newPageSize
  })

  const currentPageSetter = (newCurrentPage) => setState({
    ...state,
    currentPage: newCurrentPage
  })

  const firstPage = () => state.lastPage < 1

  const lastPage = () => state.nextPage >= state.len

  const nextPage = () => {
    if(!state.lastPage) {
      setState({
        ...state,
        lastPage: state.nextPage,
        currentPage: state.currentPage + 1,
        nextPage: state.nextPage + state.pageSize
      })
    }
  }

  const previousPage = () => {
    if(!state.firstPage) {
      setState({
        ...state,
        lastPage: state.lastPage - state.pageSize,
        currentPage: state.currentPage - 1,
        nextPage: state.nextPage - state.pageSize
      })
    }
  }

  const toFirstPage = () => {
    if(!state.firstPage) {
      setState({
        ...state,
        lastPage: 0,
        currentPage: 1,
        nextPage: state.pageSize
      })
    }
  }

  const toLastPage = () => {
    if(!state.firstPage) {
      setState({
        ...state,
        lastPage: 0,
        currentPage: 1,
        nextPage: state.pageSize
      })
    }
  }

  return {
    currentPage: state.currentPage,
    currentPageSetter,
    lenSetter,
    pageSizeSetter,
    firstPage,
    lastPage,
    nextPage,
    previousPage,
    toFirstPage,
    toLastPage
  }
}


export function PageCounter() {

  const {
    previousPage,
    nextPage,
    firstPage,
    lastPage,
    currentPage
  } = usePageCounter({
    len: 100,
    lastPage: 0,
    currentPage: 1,
    nextPage: 5,
    pageSize: 5
  });

  return (
    <div>
      {!firstPage() &&
        <button onClick={previousPage}>◀️</button>
      }
      <span>{currentPage}</span>
      {!lastPage() &&
        <button onClick={nextPage}>▶️</button>
      }
    </div>
  )
}