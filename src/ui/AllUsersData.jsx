import styled from 'styled-components';
import { useAllUsers } from '../features/user/useAllUsers';
import AllUsersList from './AllUsersList';
import Spinner from './Spinner';

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: rgb(68 64 60);

  @media (min-width: 300px) {
    padding: 1rem;
    font-size: 1.6rem;
    line-height: 2rem;
  }

  @media (min-width: 540px) {
    padding: 1rem;
    font-size: 1.8rem;
    line-height: 2rem;
  }

  @media (min-width: 768px) {
    padding: 1rem;
    font-size: 1.8rem;
    line-height: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  @media (min-width: 1280px) {
    padding: 3rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const Content = styled.div`
  display: grid;

  @media (min-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-bottom: 5rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
  }

  @media (min-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-bottom: 5rem;
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-bottom: 5rem;
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 5rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

function AllUsersData() {
  const { allUsers, isLoading, error } = useAllUsers();

  if (isLoading) return <Spinner />;
  if (error) return <H1>Error in Fetching Users</H1>;
  if (allUsers?.length === 0 || error) return <H1>No users found</H1>;

  return (
    <div>
      <H1>All Users</H1>

      <Content>
        {allUsers.map((user) => (
          <AllUsersList user={user} key={user._id} />
        ))}
      </Content>
    </div>
  );
}

export default AllUsersData;

// import React, { useState, useEffect } from 'react';
// import { getAllUsers } from '../services/apiUser';
// import AllUsersList from './AllUsersList';
// import Spinner from './Spinner';

// function AllUsersData() {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 10;
//   console.log(users);

//   useEffect(() => {
//     async function fetchUsers() {
//       try {
//         setIsLoading(true);
//         const { users } = await getAllUsers(currentPage, usersPerPage);
//         setUsers(users);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setIsLoading(false);
//       }
//     }

//     fetchUsers();
//   }, [currentPage]);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (isLoading) return <Spinner />;

//   if (!users || users.length === 0 || error) {
//     return (
//       <h1 className="flex justify-center p-12 text-4xl font-semibold text-stone-700">
//         No users found
//       </h1>
//     );
//   }

//   return (
//     <>
//       <h1 className="p-12 text-4xl font-semibold text-stone-700">All Users</h1>

//       <div className="mx-10 mb-6 grid grid-cols-2 gap-20">
//         {users.map((user) => (
//           <AllUsersList user={user} key={user._id} />
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="mt-4 flex justify-center">
//         <nav className="pagination">
//           <ul className="pagination-list">
//             {Array.from(
//               { length: Math.ceil(users.length / usersPerPage) },
//               (_, index) => (
//                 <li key={index} className="pagination-item">
//                   <button
//                     onClick={() => paginate(index + 1)}
//                     className={`pagination-link ${currentPage === index + 1 ? 'current' : ''}`}
//                   >
//                     {index + 1}
//                   </button>
//                 </li>
//               ),
//             )}
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default AllUsersData;
