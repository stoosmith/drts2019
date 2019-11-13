import React from 'react';

import './admin-leagues.scss';

const AdminLeagues = () => (
    <div className="page-container">
        <div className='admin-header'>Admin of Leagues Page
            <div className='search'>
                <span>Search: </span>
                <input></input>
            </div>
        </div>
        <div className='league-admin-container'>
            <div className='league-admin-table'>
                <div className='table-row row-header'>
                    <div className='header-title column1'>ID</div>
                    <div className='header-title column2'>League Name</div>
                    <div className='header-title column3'>Matchdays</div>
                    <div className='header-title column4'>Active</div>
                </div>    
                
                <div className='table-row'>
                    <div className='column1'>1</div>
                    <div className='column2'>PADDL</div>
                    <div className='column3'>Fridays</div>
                    <div className='column4'>True</div>
                </div>   


            </div>
        </div>
    </div>
    
)

export default AdminLeagues;