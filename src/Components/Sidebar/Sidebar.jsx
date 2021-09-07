import React, { useState } from 'react';
import './Sidebar.scss';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const { midCategory, topCategory } = useSelector((state) => state.category);
    console.log(topCategory);
    const [sideCategory, setSideCategory] = useState([]);
    const [openCategory, setOpenCategory] = useState(false);

    const handleCategory = (index) => {
        const id = topCategory[index].tCatId;
        setOpenCategory(!openCategory);
        const filterItem = midCategory.filter(item => (item.tCatId === id))
        console.log(filterItem);
        setSideCategory(filterItem);

    }
    return (

        <div className="container">
            <SideNav
            // onSelect={(selected) => {
            //   // Add your code here
            // }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="offer">
                        <NavIcon>
                            <i className="fa fa-handshake-o" style={{ fontSize: '1em', color: "black" }}></i>
                        </NavIcon>
                        <NavText>
                            Offer
                        </NavText>
                    </NavItem>
                    {/* {
            topCategory.slice(0, 6).map(item => <CategoryItem key={item.id} item={item} />)
          } */}
                    <NavItem onClick={() => handleCategory(0)} className="rounded-pill" eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1em', color: "black" }} />
                        </NavIcon>
                        <NavText>
                            {topCategory[0].name}
                        </NavText>
                    </NavItem>

                    <NavItem onClick={() => handleCategory(1)} className="rounded-pill" eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-area-chart" style={{ fontSize: '1em', color: "black" }} />
                        </NavIcon>
                        <NavText>
                            {topCategory[1].name}
                        </NavText>
                    </NavItem>
                    <NavItem onClick={() => handleCategory(2)} eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-area-chart" style={{ fontSize: '1em', color: "black" }} />
                        </NavIcon>
                        <NavText>
                            {topCategory[2].name}
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-area-chart" style={{ fontSize: '1em', color: "black" }} />
                        </NavIcon>
                        <NavText>
                            {topCategory[3].name}
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-area-chart" style={{ fontSize: '1em', color: "black" }} />
                        </NavIcon>
                        <NavText>
                            {topCategory[4].name}
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-area-chart" style={{ fontSize: '1em', color: "black" }} />
                        </NavIcon>
                        <NavText>
                            {topCategory[5].name}
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts">
                        <NavIcon>
                            <i className="fa fa-fw fa-area-chart" style={{ fontSize: '1em', color: "black" }} />
                        </NavIcon>
                        <NavText>
                            {topCategory[6].name}
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

            {
                openCategory && <div className="sideCategory">
                    {
                        sideCategory.map(item => <li key={item.id} > {item.name} </li>)
                    }
                </div>

            }
        </div>

    );
};

export default Sidebar;