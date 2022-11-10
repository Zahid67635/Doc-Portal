import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const serviceCost = form.serviceCost.value;
        const detail = form.detail.value
        const newService = {
            name, serviceCost, image: photoUrl, detail
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Service added successfully')
                console.log(data);
                form.reset()
            })
            .catch(er => console.log(er))
    }
    return (
        <div className='w-3/4 mx-auto my-10'>
            <h1 className='text-4xl text-center mb-4'>Add a New service</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-black dark:text-black">Your Name</label>
                    <input type="text" id="name" name="name" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type Your name" required="" />
                </div>
                <div class="mb-6">
                    <label for="photoUrl" class="block mb-2 text-sm font-medium text-black dark:text-black">Photo Url</label>
                    <input type="text" id="photoUrl" name="photoUrl" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Type Your photo Url" />
                </div>
                <div class="mb-6">
                    <label for="detail" class="block mb-2 text-sm font-medium text-black dark:text-black">Service Detail</label>
                    <input type="text" id="detail" name="detail" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Type Your service detail" />
                </div>
                <div class="mb-6">
                    <label for="serviceCost" class="block mb-2 text-sm font-medium text-black dark:text-black">Service Cost</label>
                    <input type="text" id="serviceCost" name="serviceCost" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" placeholder="Type Your service Cost" />
                </div>
                <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <label for="remember" class="ml-2 text-sm font-medium text-black dark:text-black">Remember me</label>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default AddService;