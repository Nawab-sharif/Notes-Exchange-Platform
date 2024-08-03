import React from 'react';

const Plans = () => {
  const plansData = [
    {
      plan: 'Basic Plan',
      description: "This is our basic plan for our notes which is applicable for every note.",
      l1: "It innclude a PDF fromat",
      l2: "It include a file/text format",
      l3: "It include a Hand written content material",
      price: "₹49/Month",
    },
    {
      plan: 'Medium Plan',
      description: "This is the avarage plan which is applicable for only 6 Months for every note.",
      l1: "It innclude a PDF fromat",
      l2: "It include a file/text format",
      l3: "It include a Hand written content material",
      price: "₹99/3 Month",
    },
    {
      plan: "Premium Plan",
      description: "This is premium plan for our notes which is applicable for 1 Year for every note.",
      l1: "It innclude a PDF fromat",
      l2: "It include a file/text format",
      l3: "It include a Hand written content material",
      price: "₹199/Year",
    }
  ]
  const login = false;
  function buyPlan(){
    if(login){
        //code if user login
    }else{
      alert("Login First");
    }
  }
  return (
    <div className='plans bg-bgColor h-[100vh] max-w-full pt-[8%] text-textPrimary text-center'>
      <h1 className='text-xl font-bold text-primary border-b-4 border-accent rounded px-2 inline ' >OUR SUBSCRIPTION PLANS OF PAID NOTES</h1>
      <p className='my-[1%] text-xl'>These are some subscription plans of paid notes that we are provide to students for better learning detailed concepts.</p>
      <div className="plans-card h-[70%] max-w-[100%] mt-[2%] flex justify-around flex-wrap">
        {plansData.map((key) => {
          return <div className="card bg-secondry border-2 border-accent rounded h-[100%] w-[28%] p-[2%] text-start hover:scale-105 hover:shadow-lg hover:shadow-accent">
            <h1 className='text-primary my-[6%] text-2xl font-bold'>{key.plan}</h1>
            <p className='my-[6%] text-lg'>{key.description}</p>
            <p className='text-sm my-[5%]'><span className='mr-[3%]  text-primary'><i class="ri-checkbox-circle-line"></i></span>{key.l1}</p>
            <p className='text-sm my-[5%]'><span className='mr-[3%]  text-primary'><i class="ri-checkbox-circle-line"></i></span>{key.l2}</p>
            <p className='text-sm my-[5%]'><span className='mr-[3%]  text-primary'><i class="ri-checkbox-circle-line"></i></span>{key.l3}</p>
            <h1 className='text-primary text-lg m-4'>{key.price}</h1>
            <button className='btn' onClick={() => { buyPlan() }}>Buy Plans</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Plans
