import React from 'react'

type statusProps = {
    // status: string //this won't show up any error if we type any random string
    status: 'loading' | 'success' | 'error' //this will show up error if we type any random string
}

const Status = (props: statusProps) => {
  let message: string = ''
  if(props.status === 'loading'){
        message = 'Loading...'
  }else if(props.status === 'success'){
        message = 'Data Fetched Successfully'
    }else if(props.status === 'error'){ 
        message = 'Error Fetching Data'
    }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  )
}

export default Status
