import React from 'react';
import '../App.css';


class Items extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    name: 'Roadster Men White Solid Henley Neck T-shirt with Roll Up Sleeves',
                    description:
                        'Roadster Men White Solid Henley Neck T-shirt with Roll Up Sleeves',
                    image:
                        'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/11294006/2020/3/13/c4d9da62-b338-4349-a810-8b6b22fde95d1584075372215-Roadster-Men-Tshirts-2731584075370645-1.jpg',
                    brand: 'Roadster',
                    priceCurrency: 'INR',
                    price: '419',
                },
                {
                    name: 'Roadster Men Black Solid Round Neck T-shirt',
                    description: 'Roadster Men Black Solid Round Neck T-shirt',
                    image:
                        'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/11294000/2020/3/13/dcfecbb7-e327-4769-8e78-2ea57334c9b51584083952302-Roadster-Men-Tshirts-4591584083950174-1.jpg',
                    brand: 'Roadster',
                    priceCurrency: 'INR',
                    price: '419',
                },
                {
                    name: 'Roadster Men Navy Blue Solid Round Neck T-shirt',
                    description: 'Roadster Men Navy Blue Solid Round Neck T-shirt',
                    image:
                        'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/11294020/2020/3/13/d52dcc7f-1b76-463d-91dd-d94b09c496af1584077983015-Roadster-Men-Tshirts-8631584077981235-1.jpg',
                    brand: 'Roadster',
                    priceCurrency: 'INR',
                    price: '559',
                },
                {
                    name: 'UNDER ARMOUR Men Blue HeatGear Rush Fitted Printed T-Shirt',
                    description: 'UNDER ARMOUR Men Blue HeatGear Rush Fitted Printed T-Shirt',
                    image:
                        'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10819230/2019/10/30/3bc7dc38-7647-463b-861a-bf4984f4cef41572437582330-UNDER-ARMOUR-Men-Tshirts-8991572437580676-1.jpg',
                    brand: 'UNDER ARMOUR',
                    priceCurrency: 'INR',
                    price: '3999',
                }
            ]
        }

    }


    render() {

        const renderProducts = () => {

            return (
                this.state.data.map(el => {
                    return (
                        <div className="item" key={el.name}>
                            <img src={el.image} alt="" />
                            <div className="details">
                                <h1 className="itemName">{el.name}</h1>
                                <h4>{el.priceCurrency} {el.price}</h4>
                            </div>
                        </div>
                    )
                })
            )

        }

        return (
            <div className="container"> {renderProducts()}</div>
        )

    }
}

export default Items;