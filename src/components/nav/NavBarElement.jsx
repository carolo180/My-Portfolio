import styled from "styled-components";

export const NavBarContainer = styled.div`
       height: 70px;
       position:sticky;
       top:0;
       z-index:99;
       background-color:transparent;
       width: 100vw;

       @media screen and (max-width:960px){
        height: 90px;
       }
`;
export const NavBarWrapper = styled.div`
       margin:auto;
       width: 100%;
       max-width:1300px;
       height: 100%;
       display:flex;
       flex-wrap:wrap;
       background-color:transparent;
       display: grid;
       grid-template-columns: 1fr 1fr;
       align-items: center;
       justify-content: space-between;

`;
export const NavLogo = styled.div`
        grid-column-start: 1;
        display: flex;
        flex-direction: column;
        width: 40%;
        height:100%;
        text-align: center;
        padding-top: 0.5rem;
        padding-left:0%;

        @media screen and (max-width:700px){
          width:50%;
          padding-top: 1.3rem;
          padding-left:0%;
         }
`;
export const Menu = styled.ul`
        display: flex;
        width:100%;
        justify-content: space-evenly;
        height:70%;
        align-items:center;
        margin-block-start:-1em;

        @media screen and (max-width:700px){
            width:100%;
            height:100vh;
            position:absolute;
            top:150px;
            left:${({click}) =>(click ? "0" : "-100%")};
            flex-direction:column;
            justify-content:flex-start;
            transition:0.5s all ease-in;
            background: linear-gradient(to bottom, #7a3030,#1B001C);
            display:flex;
            color: #fde1be;
            font-size:1.5rem;
            overflow:hidden;
         }
`;

export const MenuItem = styled.li`
        padding: 2.5rem;
        color: #fde1be;
        font-weight: 400;
        letter-spacing: 1px;
        text-gradient(to left, #d92afc, #9a03ff);

        @media screen and (max-width:700px){
            margin-block-start:2em;
            height:100px;
         }

`;
export const IconNav = styled.div`
       display:none;
       color: #fde1be;

    @media screen and (max-width:700px){
       display:flex;
       color: #fde1be;
       font-size:2rem;
        padding-right:10px;
       justify-content:flex-end;
    }
`;
