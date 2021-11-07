import React,{ useState} from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
function Header() {
    // this variable for the menu in the right side
    // transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);
    return (
        <Container>
           <a href="kkk">
           <img src="/images/logo.svg" alt="" />
           </a>
            <Menu>
                { cars &&
                    cars.map((car,index)=>(
                          <a  key={index} href="ff">{car}</a> 
                    ))
                }
                
            </Menu>    
                  <RightMenu>
                      <a href="f">Shop</a>
                      <a href="f">Tesla Account</a>
                      <CustomMenu onClick={()=> setBurgerStatus(true)}/>
                  </RightMenu>
                  <BurgerNav show={burgerStatus}>
                      <CloseWraper>

                          <CustomClose onClick={()=> setBurgerStatus(false)}/>
                      </CloseWraper>
                      { cars &&
                    cars.map((car,index)=>(
                        <li key={index}><a href="ff">{car}</a></li>
                    ))
                }
                      <li><a href="ff">Existing Inventory</a></li>
                      <li><a href="ff">Used Inventory</a></li>
                      <li><a href="ff">CyberTruck</a></li>
                      <li><a href="ff">Roadaster</a></li>
                      <li><a href="ff">Existing Inventory</a></li>
                  </BurgerNav>
         
        </Container>
    )
}

export default Header
const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    // make the model center
    top:  0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 600;
        text-transform: uppercase;
        //  top bottom 0 
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media(max-width:768px ){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav=styled.div`
   position:fixed;
   top: 0;
   bottom:0;
   right:0;
   background: white;
   width: 300px;
   z-index:100;
   list-style: none;
   padding: 20px;
   display: flex;
   flex-direction: column;
   text-align: start;
   transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
   transition: transform 0.2s; // animation
   li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a{
        font-weight: 600;
    }
   }
`
const CustomClose = styled(ClearIcon)``

const CloseWraper = styled.div`
   display: flex;
   justify-content: flex-end;
`