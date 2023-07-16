import React from "react";
import {House} from "./House";
import { housesApi } from "../Api/HousesApi";

export default class HousesList extends React.Component {
    state = {
        houses: []
    };
    componentDidMount() {
        this.fetchHouses ();
    }

    fetchHouses = async () => {
        const houses = await housesApi.getHouses();
        this.setState({houses});
    }

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    render () {
        return (
            <div className="house-list">
                {this.state.houses.map((house) => (
                   <House
                    house = {house}
                    key = {house._id}
                    updateHouse = {this.updateHouse}
                    ></House>
                ))}
            </div>
        )
    }
}

