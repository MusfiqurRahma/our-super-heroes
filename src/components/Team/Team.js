import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Troops from '../Troops/Troops';
import './Team.css';

const Team = () => {
    // declaring state
    const [teams, setTeams] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./shoulders.JSON')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, []);
    // btn handler
    const handleBtnTroops = team =>{
        const newCart = [...cart, team];
        setCart(newCart)
    }
    return (
        <div className='team-container'>
            <div className='main-team'>
                {
                    teams.map(team => <Troops
                        team={team}
                        key={team.name}
                        handleBtnTroops={handleBtnTroops}>
                        </Troops>)
                }
            </div>
            <div className='team-cart'>
              <Cart cart={cart}></Cart>
            </div>
            </div>
    );
};

export default Team;