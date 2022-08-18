/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

const JobBoard = (
  props
) => {
  console.log(props)



  return (
    <div className="flex">
      <div className="w-1/4 bg-blue-700">sidebar</div>
      <div>
        <div className={'flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded  lg:flex-row lg:my-4'}>

          <div className="w-1/6">
            <img className="-mt-16 mb-4 w-20 h-20 lg:h-24 lg:w-24  lg:my-0"
              src={props.attributes.company.data.attributes.logo}
              alt={props.attributes.company.data.attributes.name}
            />
            <h1 className="font-bold">{props.attributes.company.data.attributes.name}</h1>
          </div>
          <div className="w-5/6">
            <div className="flex">
              <h6 className="pr-2">{props.attributes.title}</h6> -  <h6 className="pl-2">{props.attributes.country}</h6>
            </div>
            <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
              {props.attributes.tags.data.map((tag, idx) => {
                return (
                  <span className="cursor-pointer text-blue-400 bg-blue-100 font-bold mr-4 mb-4 p-2 rounded"
                  >{tag.id}
                  </span>
                )
              })}
            </div>
          </div>
          {/* <a href={props.links.public_url}>Postula Aqui</a> */}
          <a href={props.links.public_url} className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
            <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            Aqui
          </a>

        </div>


        <div className={'flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded  lg:flex-row lg:my-4'}>

          <div className="w-1/4">
            <img className="-mt-16 mb-4 w-20 h-20 lg:h-24 lg:w-24  lg:my-0"
              src={props.attributes.company.data.attributes.logo}
              alt={props.attributes.company.data.attributes.name}
            />

          </div>
          <div className="w-5/6">
            <div>
              <h6>{props.attributes.title}</h6>
              <h1 className="font-bold">{props.attributes.company.data.attributes.name}</h1>
              <h6>{props.attributes.country}</h6>
              <h6>{props.attributes.perks.map((perk, idx) => {
                return (
                  <i className="icon ">  {perk}</i>

                )
              })}</h6>
            </div>

          </div>
          {/* <a href={props.links.public_url}>Postula Aqui</a> */}
          <a href={props.links.public_url} className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
            <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            Aqui
          </a>

        </div>
      </div>

    </div>


  );
};

export default JobBoard;
