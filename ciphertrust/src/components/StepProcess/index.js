import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';


export default function StepProcessComponent() {
    return (
        <div className="container mb-20">
        <h1 className="text-4xl text-center font-bold m-4">
        3 Steps To Secure Data
        </h1>
        <ul className="items-center sm:flex sm:space-x-4 list-none">
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 text-black">Deploy on Any Cloud Provider</h3>
                    {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time> */}
                    <p className="text-base font-normal">We have marketplace images and terraform configurations for AWS, Google Cloud Platform and Azure.</p>
                    <Link href="/docs/category/deploy-ciphertrust-platform"><button className="bg-blue-600 p-3 text-white rounded-lg border-none cursor-pointer">Watch Demo</button></Link>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 text-black">Centralize Key Management</h3>
                    {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time> */}
                    <p className="text-base font-normal">Use our extensive platform to store and centralize your key management.</p>
                    <button className="bg-blue-600 p-3 text-white rounded-lg border-none cursor-pointer">Watch Demo</button>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 text-black">Integrate Connectors and Secure Data</h3>
                    {/* <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time> */}
                    <p className="text-base font-normal">Use our vast set of connectors to start securing your data seamlessly</p>
                    <button className="bg-blue-600 p-3 text-white rounded-lg border-none cursor-pointer">Watch Demo</button>
                </div>
            </li>
        </ul>
        </div>
    );
}