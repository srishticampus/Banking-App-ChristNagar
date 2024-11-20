import React from 'react'
import Form from 'react-bootstrap/Form';
import { IoEye } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import '../../Asserts/Styles/manager.css';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import ManagerSidebar from './ManagerSidebar';


function ManagerViewUsers() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div className='row'>
       <div className="col-3">
        <ManagerSidebar/>
        </div>
        <div className='col-9' id='viewuserbody'>
            <h3><span id='view'>VIEW</span> USERS</h3>
            <div id='content'>
                <div className='row'>
                   
                   
                </div>
                <div>
                    <table className='fulltable'>
                        <tr>
                            <th className='tableth'>S No</th>
                            <th className='tableth'>Name</th>
                            <th className='tableth'>Phone Number</th>
                            <th className='tableth'>Address</th>
                            <th className='tableth'>Account No</th>
                            <th className='tableth'>IFSC Code</th>
                            <th className='tableth'>Balance</th>
                            <th className='tableth'>Action</th>
                        </tr>
                        
                    </table>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p>Show per page</p>
                    </div>
                    <div className='col'>
                       <span className='blocktoinline'>  <p >1-4 of 10</p> <FaArrowLeft /><Pagination id='pageno'>{items}</Pagination><FaArrowRight /></span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ManagerViewUsers

// <div className='col '>
// <Form className="searchbar1">
//     <Form.Control
//         type="search"
//         placeholder="Search Here... "
//         className="me-2 searchbar"
//         aria-label="Search"

//     /> </Form>
// </div>