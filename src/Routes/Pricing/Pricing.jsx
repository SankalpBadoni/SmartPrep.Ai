import React, { useState } from 'react';

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState('yearly');

  const pricingData = {
    yearly: [
      {
        title: "Free Trial",
        price: "$0",
        period: "For 7 days",
        popular: false,
        features: [
          "Upload PDFs",
          "Generate MCQs",
          "View test analysis",
          "Basic support",
          "1 user account"
        ],
        target: "Individuals who want to create quizzes quickly based on their own study materials"
      },
      {
        title: "Educators",
        price: "$399",
        period: "Per year Per subject",
        popular: true,
        features: [
          "Custom MCQ creation",
          "Classroom environment focus",
          "Advanced analytics",
          "Priority support",
          "Multiple teacher accounts"
        ],
        target: "Teachers and educators who need to create quizzes aligned with their specific curriculum"
      },
      {
        title: "Enterprises",
        price: "$400",
        period: "Per year",
        popular: false,
        features: [
          "Customizable MCQ generation",
          "Company server tracking",
          "Advanced security features",
          "24/7 dedicated support",
          "Unlimited user accounts"
        ],
        target: "Large organizations looking for scalable learning and assessment tools"
      }
    ],
    monthly: [
      {
        title: "Free Trial",
        price: "$0",
        period: "For 7 days",
        popular: false,
        features: [
          "Upload PDFs",
          "Generate MCQs",
          "View test analysis",
          "Basic support",
          "1 user account"
        ],
        target: "Individuals who want to create quizzes quickly"
      },
      {
        title: "Educators",
        price: "$39",
        period: "Per month",
        popular: true,
        features: [
          "Custom MCQ creation",
          "Classroom environment focus",
          "Advanced analytics",
          "Priority support",
          "Multiple teacher accounts"
        ],
        target: "Teachers and educators who need curriculum-aligned quizzes"
      },
      {
        title: "Enterprises",
        price: "$49",
        period: "Per month",
        popular: false,
        features: [
          "Customizable MCQ generation",
          "Company server tracking",
          "Advanced security features",
          "24/7 dedicated support",
          "Unlimited user accounts"
        ],
        target: "Large organizations seeking scalable assessment solutions" 
      }
    ]
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-manrope text-5xl text-center font-bold text-white mb-4">
            Our pricing plans
          </h2>
          <p className="text-gray-500 text-xl text-center leading-6 mb-12">
            7 Days free trial. No credit card required.
          </p>
          
          <div className="mb-10 flex justify-center">
            <span className="flex items-center">
              <span className="inline-block whitespace-nowrap text-xs leading-4 font-semibold tracking-wide bg-indigo-50 text-indigo-600 rounded-full py-2 px-4">
                Save 20% with yearly billing
              </span>
            </span>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center bg-gray-100 rounded-full p-1.5 max-w-sm mx-auto mb-12">
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`inline-block w-1/2 text-center rounded-full py-3 px-3 lg:px-11 font-semibold transition-all duration-300 ${
                billingPeriod === 'yearly'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Bill Yearly
            </button>
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`inline-block w-1/2 text-center rounded-full py-3 px-3 lg:px-11 font-semibold transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Bill Monthly
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingData[billingPeriod].map((plan, index) => (
              <div
                key={plan.title}
                className={`group relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600'
                    : 'bg-gray-900 border-gray-300 hover:border-indigo-600'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1 rounded-full">
                    Popular
                  </span>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                
                <p className="text-gray-400 mb-8 text-sm">
                  {plan.target}
                </p>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white">
                      <svg className="w-5 h-5 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-indigo-600 hover:bg-gray-100'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;