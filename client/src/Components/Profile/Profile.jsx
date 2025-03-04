import './profile.css';
import { useEffect, useState } from 'react';
import Loading from '../Loading/loading';
import Navbar from '../Home/Navbar/Navbar';

function Profile() {

    const token = sessionStorage.getItem('userId');
    const [isLoading, setIsLoading] = useState(true);
    const [played, setplayed] = useState([]);
    const [playing, setplaying] = useState([]);
    const [wishlist, setwishlist] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    function fetchplayed() {
        fetch(`${process.env.REACT_APP_API_URL}profile/played`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
        })
            .then((data) => data.json())
            .then((res) => {
                if (res) {
                    setplayed(res.played);
                }
            })
            .catch((error) => console.log(error))
    }

    function fetchplaying() {
        fetch(`${process.env.REACT_APP_API_URL}profile/playing`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
        })
            .then((data) => data.json())
            .then((res) => {
                if (res) {
                    setplaying(res.playing);
                }
            })
            .catch((error) => console.log(error))
    }

    function fetchwishlist() {
        fetch(`${process.env.REACT_APP_API_URL}profile/wishlist`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
        })
            .then((data) => data.json())
            .then((res) => {
                if (res) {
                    setwishlist(res.wishlist);
                }
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
        <Navbar />
            <div className='container_user'>
                <div className='user_info'>
                    <div className='played'>
                        <h1>
                            Played
                        </h1>
                    </div>
                    <div className='playing'>
                        <h1>

                            Playing
                        </h1>
                    </div>
                    <div className='wishlist'>
                        <h1>
                            Wishlist
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;