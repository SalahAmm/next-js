import Link from "next/link"

const  Users = () => {
  return (
    <div> 
        <h1>Dashboard Users</h1>
        <ul className='mt-10'>
            <li><Link href='/dashboard/users/1'>Users 1</Link>Users 1</li>
            <li><Link href='/dashboard/users/2'>Users 2</Link>Users 2</li>
            <li><Link href='/dashboard/users/3'>Users 3</Link>Users 3</li>
            <li><Link href='/dashboard/users/4'>Users 4</Link>Users 4</li>
     
   </ul>
    </div>
  )
}

export default Users  