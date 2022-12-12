import React from 'react';
import { Link } from "react-router-dom";
import profile from '../../assets/profile.png'

const Footer = () => {
    return (
		<div className="">
			<footer class="lg:p-4 bg-black shadow md:px-6 md:py-8 dark:bg-gray-900">
				<div class="sm:flex sm:items-center sm:justify-between lg:px-32 px-4 text-white py-10">
					<a
						href="https://flowbite.com/"
						class="flex items-center mb-4 sm:mb-0"
					>
						<img
							src={profile}
							class="mr-3 h-8 w-8 rounded-full"
							alt="Flowbite Logo"
						/>
						<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							M.Tonmoy
						</span>
					</a>
					<ul class="flex flex-wrap lg:items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400 flex-col lg:flex-row">
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
				<hr className="border-gray-800 pt-5"/>
				<span class="block text-sm text-white sm:text-center dark:text-gray-400 px-4">
					© 2022 <a href="https://flowbite.com/" class="hover:underline">
						Md Mehedi Hasan || 
					</a> All Rights Reserved.
				</span>
			</footer>
		</div>
	);
};

export default Footer;