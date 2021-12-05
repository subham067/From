// eslint-disable-next-line 
import React, { useState, useEffect } from 'react'

function From() {

    const [FristName, setFristName] = useState("")
    const [LastName, setLastName] = useState("")
    const [UserName, setUserName] = useState("")
    const [City, setCity] = useState("")
    const [ZipC, setZipC] = useState("")
    const [FForm, setFForm] = useState([])

    let JsonFrom = [
        {
            FristName: FristName,
            LastName: LastName,
            UserName: UserName,
            City: City,
            ZipC: ZipC,

        }
    ]


    const Submit = (e) => {
        e.preventDefault();
        console.log(JsonFrom);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: "post",
            headers: myHeaders,
            redirect: "follow",
            body: JSON.stringify(JsonFrom)
        };

        fetch("https://v1.nocodeapi.com/subham067/google_sheets/OldWtGCwrgnJdVNN/addRows?tabId=Sheet1", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(FetchFrom())
            .catch(error => console.log('error', error));

    }
    const FetchFrom = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: "get",
            headers: myHeaders,
            redirect: "follow",

        };

        fetch("https://v1.nocodeapi.com/subham067/google_sheets/OldWtGCwrgnJdVNN?tabId=Sheet1", requestOptions)
        .then(res => res.json())
        .then(result => setFForm(result.data))
        .catch(error => console.log('error', error));
       
    }
    useEffect(() => {
        FetchFrom();
    }, [])

    return (
        <div className="container">
        <h1 className="text-center">Submit From</h1>
            <div className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">
                        First name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={FristName}
                        onChange={(e) => setFristName(e.target.value)}
                        id="validationCustom01"
                        defaultValue="Mark"
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">
                        Last name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                        id="validationCustom02"
                        defaultValue="Otto"
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">
                        Username
                    </label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">
                            @
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            value={UserName}
                            onChange={(e) => setUserName(e.target.value)}
                            id="validationCustomUsername"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">
                        City
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={City}
                        onChange={e => setCity(e.target.value)}
                        id="validationCustom03"
                        required
                    />
                    <div className="invalid-feedback">Please provide a valid city.</div>
                </div>

                <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">
                        Zip
                    </label>
                    <input
                        type="text"
                        value={ZipC}
                        onChange={e => setZipC(e.target.value)}
                        className="form-control"
                        id="validationCustom05"
                        required
                    />
                    <div className="invalid-feedback">Please provide a valid zip.</div>
                </div>

                <div className="col-md-3 d-grid d-flex align-items-end flex-row-reverse">
               
                    <button className="btn btn-primary " onClick={Submit}>
                        Submit form
                    </button>
                </div>
            </div>

            <h1 className="text-center">Show all Data</h1>
            <table className="table    mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">City</th>
                        <th scope="col">Zip</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        FForm.map((table) => {
                            return (
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{table.FristName}</td>
                                    <td>{table.LastName}</td>
                                    <td>@{table.UserName}</td>
                                    <td>{table.City}</td>
                                    <td>{table.ZipC}</td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>


        </div>
    )
}

export default From
