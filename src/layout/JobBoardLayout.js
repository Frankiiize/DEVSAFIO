/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import JobBoard from "../components/jobBoard/JobBoard.js";

//console.log(data)

function JobBoardLayout() {
  const [jobs, setJobs] = useState([])
  const [jobLoading, setJopLoading] = useState(false)



  useEffect(() => {
    setJopLoading(true)
    function getData() {
      //fetch('https://www.getonbrd.com/api/v0/tags/full-stack/jobs?per_page=10&page=1&expand=["company","tags"]')
      fetch('https://devsafio-api-staging.herokuapp.com/getonboard/categories/programming/jobs')
        .then(res => res.json())
        .then(data => {

          setJobs(data.data)
          setJopLoading(false)

        })

    }
    getData()
  }, []);

  console.log(jobs)

  const handleTagClick = (tag) => {
    // avoid reading the tag
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };
  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };
  const clearFilters = () => {
    setFilters([]);
  };

  // const filteredJobs = jobs.filter(filterFunc);

  return (
    <>
      <div className="container m-auto">
        {/* {filters.length > 0 &&
          (
            <div className={`flex  bg-white shadow-md -my-20 mb-16 mx-10 p-6 rounded z-10 relative`}>
              {filters.map((filter) => (
                <span className="cursor-pointer rounded font-bold mr-4 mb-4 lg:mb-0"
                  onClick={() => handleFilterClick(filter)}>
                  <span className=" text-blue-400 bg-blue-100  p-2">
                    {filter}
                  </span>
                  <span className="bg-blue-500 text-blue-100  p-2">	✖ </span>
                </span>))}
              <button onClick={clearFilters} className="font-bold text-gray-700 ml-auto">Clear</button>
            </div>


          )} */}
        {/* {jobs.length === 0 ? (
          <p>Job are Fetching...</p>
        ) : (
          jobs.map((job) => (
            <JobBoard job={job} key={job.id} />
          ))
        )} */}


      </div>

      {
        !jobLoading
          ?
          jobs.map((item) => (
            <JobBoard
              {...item} key={item.id} />

          ))
          : 'cargando'
      }
    </>
  );
}

export default JobBoardLayout;
