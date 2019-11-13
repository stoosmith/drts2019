import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './league-add.styles.scss';

class LeagueAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '1',
            league_name: 'PADDL',
            fixture_dow: 'Friday',
            logo: '',
            league_slug: 'PADDL'
        }

    }
    
    handleSubmit = event => {
        event.preventDefault();

        //this.setState({ })

    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
   
        render() {
            return(
                <div className='league-add-container'>
                    <h2 className='title'>Add a League</h2>
                    <span>Please add details</span>

                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name='id' 
                            value={this.state.id} 
                            label='League ID'
                            readOnly
                            required 
                        />
                        <FormInput
                            name='league_name' 
                            value={this.state.league_name} 
                            onChange={this.handleChange}
                            label='League Name'
                            required />
                        <select 
                            name='fixture_dow'  
                            value={this.state.fixture_dow} 
                            onChange={this.handleChange}
                            required>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                        </select>

                        <label>Matchdays</label>
                        <FormInput 
                            name='logo' 
                            value={this.state.logo} 
                            onChange={this.handleChange}
                            label="logo"
                        />                        

                        <CustomButton
                            type='submit'>Submit</CustomButton>
                    </form>

                </div>
            );

        }
    
}

export default LeagueAdd;