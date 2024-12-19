import React, { useEffect, useState } from 'react'
import ClerkSideBar from './ClerkSideBar'
import '../../Asserts/Styles/ClerkManageLoan.css'
import img from '../../Asserts/images/unsplash_ktQ5qaFR2Dw.png'
import img2 from '../../Asserts/images/carbon_view-filled.png'
import axiosInstance from '../../apis/axiosinstance'

function ClerkManageLoan() {

    const [DbData, setDbDataD] = useState([])

    const EmployeeData = async () => {

        try {
            const response = await axiosInstance.get('/viewallloan')
            console.log("user list", response.data)
            setDbDataD(response.data.data)
        }
        catch (error) {
            console.error('error fetching user data:', error)
        }

    }

    useEffect(() => {
        EmployeeData();
    }, [])

    return (

        <div className='CML-MainDiv'>

            <div className='CML-MainDiv-ContainDiv'>

                <div>
                    <ClerkSideBar />
                </div>

                <div className='CML-MainDiv-ContainDiv-ContentDiv'>

                    <div className='CML-MainDiv-ContainDiv-HeaderDiv'>
                        <h1 className='CML-h1'>MANAGE </h1>
                        <h1 className='CML-h2'>LOAN</h1>
                    </div>

                    <div className='CML-MainDiv-ContainDiv-ButtonDiv'>

                        <button className='CML-Button1'>Application</button>
                        <button className='CML-Button2'>Verified Application</button>

                    </div>

                    <div className='CML-MainDiv-ContainDiv-Content'>

                        <div>
                            <h3 className='CML-h3'>View Request</h3>
                        </div>
                        <div className='CML-Table-Contain-Shadow'>
                            <table className='CML-Table'>

                                <thead className='CML-Table-thead '>

                                    <tr className='CML-Table-thead-tr '>

                                        <th className='CML-Table-thead-th-center '>S No</th>
                                        <th className='CML-Table-thead-th-center'>Profile</th>
                                        <th className='CML-Table-thead-th'>Name</th>
                                        <th className='CML-Table-thead-th'>Phone No</th>
                                        <th className='CML-Table-thead-th'>Address</th>
                                        <th className='CML-Table-thead-th'>DOB</th>
                                        <th className='CML-Table-thead-th'>Loan Type</th>
                                        <th className='CML-Table-thead-th-center'>Loan Amount</th>
                                        <th className='CML-Table-thead-th-center'>Action</th>

                                    </tr>

                                </thead>

                                <tbody className='CML-Table-tbody'>

                                    {DbData.length > 0 ? (

                                        DbData.map((data, index) => {

                                            return (

                                                <tr className='CML-Table-tbody-tr' key={index}>

                                                    <td className='CML-Table-td-center'>{index+1}</td>
                                                    <td className='CML-Table-td-center'><img src={data.userid?.userPicture} alt='Profile' /></td>{/* profile img */}
                                                    <td className='CML-Table-td'>{data.userid?.username}</td>
                                                    <td className='CML-Table-td'>{data.userid?.userContact}</td>
                                                    <td className='CML-Table-td'>
                                                        <p className='CML-Table-p'>{data.userid?.userAddress}</p>
                                                        <p className='CML-Table-p-2'>{data.userid?.userNumber}</p>
                                                    </td>
                                                    <td className='CML-Table-td'>{data.userid?.userDate}</td>
                                                    <td className='CML-Table-td'>{data.loantype}</td>
                                                    <td className='CML-Table-td-center'>₹{data.loanamount}</td>
                                                    <td className='CML-Table-td-center'><img src={img2} alt='View Details' /></td>{/* eye icon */}

                                                </tr>

                                            )

                                        })
                                    ) : (
                                        <tr><p className=' text-danger'>No Data Found</p></tr>
                                    )}

                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default ClerkManageLoan