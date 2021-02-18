import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';
import { wordlTable } from '../api';
import { toast } from 'react-toastify';

import CountUp from "react-countup";
import Table from './Table';
import Load from "../img/30.gif";

import Pagination from '../utils/Pagination';

const WorldTable = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    
    const [search, setSearch] = useState("")
    const [perPage] = useState(10);
    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentResults = results.slice(indexOfFirst, indexOfLast);



    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const { data } = await axios(wordlTable)
                setResults(data.response);
              
                
               
                
                setLoading(false)
                toast.dark("این جدول هر ۱۵ دقیقه به روز می شود", {
                    position: "top-right",
                })


            } catch (ex) {
                console.log(ex);
                toast.error("مشکلی از سمت سرور رخ داده است.", {
                    position: "top-right"
                })
                setLoading(true)
            }
        }
        fetchData();





    }, [])
    const inputChange = (event) => {
        setSearch(event.target.value)
        const listSearch = [...results];
        setResults(listSearch.filter(country => country.country.includes(search)))
        


    }
    const searchBtn = (event) => {
        event.preventDefault();
        const listSearch = [...results];
        setResults(listSearch.filter(country => country.country.includes(search)))
        


    }
  
  
   



    if (loading) {
        return (
            <div className="text-center load">


                <h2 className="loading">
                    لطفا منتظر بمانید...!
            </h2>

                <img src={Load} alt={"Load"} />
            </div>
        )
    }


    return (
        <div>

        <Helmet>
            <title>
            ویروس کرونا | جدول کشور ها  

            </title>
        </Helmet>

        <div className="wtbl">
            <h2 className="tlc">
                تعداد کشور ها : <CountUp key={results.country} start={0} end={results.length} className="badge badge-danger" />
            </h2>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-10 ">
                    <form onSubmit={searchBtn} >


                        <div className="input-group mb-3">
                            <input type="text" className="form-control tableSearch" placeholder="جستجو جدول" value={search} onChange={inputChange}
                              style={{
                                background:"none",
                                border:"none",
                                borderBottom:"1px solid #b2bec3",
                                borderRadius:"0px"
                            }}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-success" type="submit" style={{
                                    fontSize: "8px"
                                }} >
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
            <div className="row">

            </div>
            <Table  results={currentResults}/>
{/* 
            {
                currentResults.map(result => (
                    <Table key={result.country} result={result} />
                ))
            } */}


            <Pagination perPage={perPage} totalresults={results.length} paginate={paginate} currentPage={currentPage} />





        </div>
        </div>
    );
}

export default WorldTable;