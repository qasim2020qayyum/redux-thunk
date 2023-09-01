import React from 'react'

const ListData = ({users}) => {
  return (
    <>
        <table border='1' width="50%" align='center' cellSpacing={10}>
            <tr>
                <td>Sr.No.</td>
                <td>Name</td>
                <td>Email</td>
                <td></td>
            </tr>
            
            {
                users.map((user, ind)=>{
                    return(
                        <tr key={ind}>
                            <td>{ind+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button>Delete</button>
                                <button>Edit</button>
                            </td>
                        </tr>
                    )
                })
            }

        </table>
    </>
  )
}

export default ListData
