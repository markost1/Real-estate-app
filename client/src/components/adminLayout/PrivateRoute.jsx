import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { logout } from '../../features/auth/authSlice';


const PrivateRoute = () => {
  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);
  const [isValid, setIsValid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await fetch('/api/auth/verify', {
          credentials: 'include',
        });

        const data = await res.json();

        if (!data.isAdmin) {
          setIsValid(false);
          dispatch(logout());
        } else {
          setIsValid(true);
        }
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setIsValid(false);
        dispatch(logout());
      }
    };

    if (isAuthenticated) {
      verifyToken();
    } else {
      setIsValid(false);
    }
  }, [isAuthenticated, dispatch]);

  if (isValid === null) return null;  // Prikazivanje loading spinner-a

  if (!isAuthenticated || !isValid) {
    return <Navigate to="/" />;  // Ako korisnik nije autentifikovan ili nije admin
  }

  if (!isAdmin) {
    return <Navigate to="/not-authorized" />;  // Ako korisnik nije admin
  }

  return <Outlet />;  // Ako je sve validno, prikazujemo sadržaj
};

export default PrivateRoute;


// const PrivateRoute = () => {
//   const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);
//   const [isValid, setIsValid] = useState(null);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const verifyToken = async () => {
//       try {
//         const res = await fetch('/api/auth/verify', {
//           credentials: 'include',
//         });
//         const data = await res.json();
//         if (!data.isAdmin) {
//           setIsValid(false);
//           dispatch(logout());
//         } else {
//           setIsValid(true);
//         }
//       // eslint-disable-next-line no-unused-vars
//       } catch (err) {
//         setIsValid(false);
//         dispatch(logout());
//       }
//     };

//     if (isAuthenticated) {
//       verifyToken();
//     } else {
//       setIsValid(false);
//     }
//   }, [isAuthenticated, dispatch]);

//   if (isValid === null) return null; // ili loading spinner

//   if (!isAuthenticated || !isValid) {
//     return <Navigate to="/" />;
//   }

//   if (!isAdmin) {
//     return <Navigate to="/not-authorized" />;
//   }

//   return <Outlet />;
// };

// export default PrivateRoute;
