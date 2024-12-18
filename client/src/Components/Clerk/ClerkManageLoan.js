import React from 'react'
import ClerkSideBar from './ClerkSideBar'
import '../../Asserts/Styles/ClerkManageLoan.css'
import img from '../../Asserts/images/unsplash_ktQ5qaFR2Dw.png'
import img2 from '../../Asserts/images/carbon_view-filled.png'

function ClerkManageLoan() {

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

                                <tr className='CML-Table-tbody-tr'>

                                    <td className='CML-Table-td-center'>1.</td>
                                    <td className='CML-Table-td-center'><img src={img} alt='Profile'/></td>{/* profile img */}
                                    <td className='CML-Table-td'>Akhila</td>
                                    <td className='CML-Table-td'>123456789</td>
                                    <td className='CML-Table-td'>
                                        <p className='CML-Table-p'>123 City,Trivandtrum</p>
                                        <p className='CML-Table-p-2'>Trivandrum-123123</p>
                                    </td>
                                    <td className='CML-Table-td'>12/03/2000</td>
                                    <td className='CML-Table-td'>Car Loan</td>
                                    <td className='CML-Table-td-center'>$2,22,000/-</td>
                                    <td className='CML-Table-td-center'><img src={img2} alt='View Details' /></td>{/* eye icon */}

                                </tr>
                                <tr className='CML-Table-tbody-tr'>

                                    <td className='CML-Table-td-center'>1.</td>
                                    <td className='CML-Table-td-center'><img src={img} alt='Profile'/></td>{/* profile img */}
                                    <td className='CML-Table-td'>Akhila</td>
                                    <td className='CML-Table-td'>123456789</td>
                                    <td className='CML-Table-td'>
                                        <p className='CML-Table-p'>123 City,Trivandtrum</p>
                                        <p className='CML-Table-p-2'>Trivandrum-123123</p>
                                    </td>
                                    <td className='CML-Table-td'>12/03/2000</td>
                                    <td className='CML-Table-td'>Car Loan</td>
                                    <td className='CML-Table-td-center'>$2,22,000/-</td>
                                    <td className='CML-Table-td-center'><img src={img2} alt='View Details' /></td>{/* eye icon */}

                                </tr>
                                <tr className='CML-Table-tbody-tr'>

                                    <td className='CML-Table-td-center'>1.</td>
                                    <td className='CML-Table-td-center'><img src={img} alt='Profile'/></td>{/* profile img */}
                                    <td className='CML-Table-td'>Akhila</td>
                                    <td className='CML-Table-td'>123456789</td>
                                    <td className='CML-Table-td'>
                                        <p className='CML-Table-p'>123 City,Trivandtrum</p>
                                        <p className='CML-Table-p-2'>Trivandrum-123123</p>
                                    </td>
                                    <td className='CML-Table-td'>12/03/2000</td>
                                    <td className='CML-Table-td'>Car Loan</td>
                                    <td className='CML-Table-td-center'>$2,22,000/-</td>
                                    <td className='CML-Table-td-center'><img src={img2} alt='View Details' /></td>{/* eye icon */}

                                </tr>
                                <tr className='CML-Table-tbody-tr'>

                                    <td className='CML-Table-td-center'>1.</td>
                                    <td className='CML-Table-td-center'><img src={img} alt='Profile'/></td>{/* profile img */}
                                    <td className='CML-Table-td'>Akhila</td>
                                    <td className='CML-Table-td'>123456789</td>
                                    <td className='CML-Table-td'>
                                        <p className='CML-Table-p'>123 City,Trivandtrum</p>
                                        <p className='CML-Table-p-2'>Trivandrum-123123</p>
                                    </td>
                                    <td className='CML-Table-td'>12/03/2000</td>
                                    <td className='CML-Table-td'>Car Loan</td>
                                    <td className='CML-Table-td-center'>$2,22,000/-</td>
                                    <td className='CML-Table-td-center'><img src={img2} alt='View Details' /></td>{/* eye icon */}

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ClerkManageLoan