import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
		<div className="">
			<footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
				<div class="sm:flex sm:items-center sm:justify-between px-32">
					<a
						href="https://flowbite.com/"
						class="flex items-center mb-4 sm:mb-0"
					>
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							class="mr-3 h-8"
							alt="Flowbite Logo"
						/>
						<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							M.Tonmoy
						</span>
					</a>
					<ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<Link href="#" class="mr-4 hover:underline md:mr-6 ">
								About
							</Link>
						</li>
						<li>
							<Link href="#" class="mr-4 hover:underline md:mr-6">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href="#" class="mr-4 hover:underline md:mr-6 ">
								Licensing
							</Link>
						</li>
						<li>
							<Link href="#" class="hover:underline">
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2022 <a href="https://flowbite.com/" class="hover:underline">
						Md Mehedi Hasan || 
					</a> All Rights Reserved.
				</span>
			</footer>
		</div>
	);
};

export default Footer;