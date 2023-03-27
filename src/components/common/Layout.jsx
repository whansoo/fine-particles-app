import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    background-color: rgb(255 255 255);
    max-width: 340px; /* 576px */
    border-top: 1px solid #c8c8c8;
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-bottom: 1.25rem;
    padding-top: 0.75rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    line-height: 1rem;

`
const Nav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 1rem; */
    /* margin-bottom: 1rem; */
    height: 2.5rem;
`

function Layout() {
  return (
    <>
    <Container>
        <NavLink to="/">
            <Nav>
                <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>내 지역보기</span>
            </Nav>
        </NavLink>
          <NavLink to="/particles">
            <Nav>
                <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
             <span>전체 시/도보기</span>
            </Nav>
          </NavLink>
            <NavLink to="/like">
             <Nav>
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
            </svg>
            <span>즐겨찾기</span>
                </Nav>
            </NavLink>
    </Container>
    <Outlet />
    </>
  )
}

export default Layout